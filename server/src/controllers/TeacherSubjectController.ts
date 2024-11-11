import logger from "@logger";
import {Request, Response} from "express";
import {PrismaClient} from "@prisma/client";
import {z} from "zod";
import TeacherSubjectDTOs from "@/dtos/TeacherSubjectDTOs.ts";

const log = logger("Teacher:subject")

const orm = new PrismaClient()

// TODO add topic variable to this controller
export default class TeacherSubjectController {

    async createSubject(req: Request, res: Response)  {
        log.http("Creating new subject")

        const subject: z.infer<typeof TeacherSubjectDTOs.createSubjectDTO> = req.body

        log.silly("Creating new subject", {json: subject})

        try {
            const createdSubject = await orm.targy.create({
                data: {
                    name: subject.name,
                    category: subject.category,
                    evf: subject.evf,
                    TargyInfo: {
                        create: [
                            {
                                tanarId: subject.tanarId,
                            },
                        ],
                    },
                    TargyContent: {
                        create: [
                            {
                                content: subject.content,
                                gyakorlat: subject.gyakorlat,
                            },
                        ],
                    },
                },
            })

            log.silly("Created new subject", {json: createdSubject})

            res.send(subject);

        } catch (e) {
            log.error(e)
            res.status(500).send("Internal server error")
        }

    }

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

    async updateSubject(req: Request, res: Response)  {
        log.http("Updating subject")

        const subject: z.infer<typeof TeacherSubjectDTOs.updateSubjectDTO> = req.body

        log.silly("Updating subject", {json: subject})

        try {
            const updated = await orm.targy.update({
                where: {
                    id: subject.id,
                },
                data: {
                    name: subject.name,
                    category: subject.category,
                    evf: subject.evf,
                    TargyInfo: {
                        upsert: {
                            where: {
                                tanarId_targyId: {
                                    targyId: subject.id,
                                    tanarId: subject.tanarId,
                                },
                            },
                            update: {
                                tanarId: subject.newTanarId
                            },
                            create: {
                                tanarId: subject.tanarId
                            },
                        },
                    },
                    TargyContent: {
                        upsert: {
                            where: { targyId: subject.id },
                            update: {
                                content: subject.content,
                                gyakorlat: subject.gyakorlat,
                            },
                            create: {
                                content: subject.content,
                                gyakorlat: subject.gyakorlat,
                            }
                        },
                    },
                },
                include: {
                    TargyInfo: true,
                    TargyContent: true,
                },
            })

            log.silly("Updated", updated)

            res.send(subject)

        } catch (e) {
            log.error(e)
            res.status(500).send("Internal server error")
        }
    }
    async deleteSubject(req: Request, res: Response)  {
        log.http("Deleting subject")

        const subject: z.infer<typeof TeacherSubjectDTOs.updateSubjectDTO> = req.body

        log.silly("Deleting subject", {json: subject});

        try {
            const deletedSubject = await orm.targy.delete({
                where: {
                    id: subject.id
                },
                include: {
                    TargyInfo: true,
                    TargyContent: true,
                },
            })

            log.silly("Deleted subject", deletedSubject)

            res.send(deletedSubject)

        } catch (e) {
            log.error(e)
            res.status(500).send("Internal server error")
        }
    }
}