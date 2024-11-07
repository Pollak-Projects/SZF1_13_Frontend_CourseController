import logger from "@logger";
import {Request, Response} from "express";
import {Prisma, PrismaClient} from "@prisma/client";
import {z} from "zod";


const log = logger("student:topic")

const orm = new PrismaClient()

export default class StudentTopicController {

async getTopics(req: Request, res: Response)  {
    log.http("Getting all topics")

    try {
        const allTopics = await orm.topic.findMany({
            include: {
                Subjects: true,
            },
        })

        log.silly("All topics", {json: allTopics})

        res.send(allTopics)

    } catch (e) {
        log.error(e)
        res.status(500).send("Internal server error")
    }
}
}