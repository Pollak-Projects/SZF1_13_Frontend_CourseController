import logger from "@logger";
import {Request, Response} from "express";
import {Prisma, PrismaClient} from "@prisma/client";
import {z} from "zod";
import AdminTopicDTOs from "@/dtos/AdminTopicDTOs.ts";

const log = logger("admin:topic")

const orm = new PrismaClient()

export default class AdminTopicController {

    async createTopic(req: Request, res: Response)  {
        log.http("Creating new topic")

        const topic: z.infer<typeof AdminTopicDTOs.createTopicDTO> = req.body

        try {
            const resultTopic = await orm.topic.create({
                data: {
                    topicName: topic.topicName,
                    Subjects: {
                        connectOrCreate: topic.subjects?.map((sub) => ({
                            where: {
                                id: sub,
                            },
                            create: {
                                id: sub,
                                name: "",
                                category: "",
                                evf: "",
                            },
                        })),
                        // This is just here for testing
                        // connect: topic.subjects?.map((sub) => ({ id: sub } as Prisma.TargyWhereUniqueInput)),
                        // createMany: {
                        //     data: topic.subjects?.map((sub) => ({
                        //         id: sub,
                        //         name: "",
                        //         category: "",
                        //         evf: "",
                        //     } as Prisma.TargyCreateManyTopicInfoInput)) as Prisma.TargyCreateManyTopicInfoInput[],
                        // },
                    },
                },
                include: {
                    Subjects: true,
                }
            })

            log.silly("Created new topic", {json: resultTopic})

            res.send(topic)

        } catch (e) {
            log.error(e)
            res.status(500).send("Internal server error")
        }
    }

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

    async updateTopics(req: Request, res: Response)  {
        log.http("Updating topic")

        const topic: z.infer<typeof AdminTopicDTOs.updateTopicDTO> = req.body

        try {
            const updatedTopic = await orm.topic.update({
                where: {
                    id: topic.id,
                },
                data: {
                    topicName: topic.topicName,
                    Subjects: {
                        upsert: topic.subjects?.map((sub) => ({
                            where: {
                                id: sub,
                            },
                            update: {
                                id: sub,
                            },
                            create: {
                                id: sub,
                                name: "",
                                category: "",
                                evf: "",
                            },
                        }))
                    }
                },
                include: {
                    Subjects: true,
                },
            })

            log.silly("Updated topic", {json: updatedTopic})
            res.send(topic)

        } catch (e) {
            log.error(e)
            res.status(500).send("Internal server error")
        }

    }
    async deleteTopic(req: Request, res: Response)  {
        log.http("Deleted topic")

        const topic: z.infer<typeof AdminTopicDTOs.updateTopicDTO> = req.body

        try {
            const deletedTopic = await orm.topic.delete({
                where: {
                    id: topic.id,
                },
                include: {
                    Subjects: true,
                },
            })

            log.silly("Deleted topic", {json: deletedTopic})

            res.send(topic)

        } catch (e) {
            log.error(e)
            res.status(500).send("Internal server error")
        }
    }
}