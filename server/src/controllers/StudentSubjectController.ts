import logger from "@logger";
import {Request, Response} from "express";
import {PrismaClient} from "@prisma/client";
import {z} from "zod";

const log = logger("student:subject")

const orm = new PrismaClient()
export default class StudentSubjectController {
    
async getSubjects(req: Request, res: Response)  {
    log.http("Getting all subjects")

    try {
        const subjects = await orm.targy.findMany({
            include: {
                TargyInfo: true,
                TargyContent: true,
            }
        })

        log.silly("All subjects", subjects)

        res.send(subjects)

    } catch (e) {
        log.error(e)
        res.status(500).send("Internal server error")
    }
}
}