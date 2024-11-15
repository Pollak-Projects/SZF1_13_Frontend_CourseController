import logger from "@logger";
import {Request, Response} from "express";
import {PrismaClient} from "@prisma/client";
import {z} from "zod";
import AdminSubjectDTOs from "@/dtos/AdminSubjectDTOs.ts";

const log = logger("admin:subject")

const orm = new PrismaClient()

export default class AdminSubjectController {

    async createSubject(req: Request, res: Response)  {
        log.http("Creating new subject")

        const subject: z.infer<typeof AdminSubjectDTOs.createSubjectDTO> = req.body

        log.silly("Creating new subject", {json: subject})

        try {
            const createdSubject = await orm.subject.create({
                data: {
                    Name: subject.Name,
                    Grade: subject.Grade,
                    Description: subject.Description,
                    Category: {
                        connectOrCreate: {
                            where: {
                                CategoryName: subject.Category,
                            },
                            create: {
                                CategoryName: subject.Category,
                            },
                        },
                    },
                    Profession: {
                        connectOrCreate: {
                            where: {
                                ProfessionName: subject.Profession,
                            },
                            create: {
                                ProfessionName: subject.Profession,
                            },
                        },
                    },
                    TeacherSubject: {
                        create: {
                            TeacherId: subject.TeacherId,
                        }
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
            const subjects = await orm.subject.findMany({
                include: {
                    Category: true,
                    Profession: true,
                    TeacherSubject: true
                }
            })

            log.silly("All subjects", subjects)

            res.send(subjects)

        } catch (e) {
            log.error(e)
            res.status(500).send("Internal server error")
        }
    }

    async getSubjectById(req: Request, res: Response) {
        log.http("Getting subject by id")

        const id = req.params.id

        log.silly("Getting subject by id", {id})

        try {
            const subject = await orm.subject.findUnique({
                where: {
                    Id: id
                },
                include: {
                    Category: true,
                    Profession: true,
                    TeacherSubject: true
                }
            })

            log.silly("Subject", subject)

            res.send(subject)

        } catch (e) {
            log.error(e)
            res.status(500).send("Internal server error")
        }

    }

    async updateSubject(req: Request, res: Response)  {
        log.http("Updating subject")

        const subject: z.infer<typeof AdminSubjectDTOs.updateSubjectDTO> = req.body

        log.silly("Updating subject", {json: subject})

        try {
            const updated = await orm.subject.update({
                where: {
                    Id: subject.Id,
                },
                data: {
                    Name: subject.Name,
                    Grade: subject.Grade,
                    Description: subject.Description,
                    Category: {
                        upsert: {
                            where: {
                                CategoryName: subject.Category,
                            },
                            update: {
                                CategoryName: subject.Category,
                            },
                            create: {
                                CategoryName: subject.Category,
                            },
                        },
                    },
                    Profession: {
                        upsert: {
                            where: {
                                ProfessionName: subject.Profession,
                            },
                            update: {
                                ProfessionName: subject.Profession,
                            },
                            create: {
                                ProfessionName: subject.Profession,
                            },
                        },
                    },
                    TeacherSubject: {
                        upsert: {
                            where: {
                                TeacherId_SubjectId: {
                                    SubjectId: subject.Id,
                                    TeacherId: subject.TeacherId,
                                }
                            },
                            update: {
                                TeacherId: subject.NewTeacherId,
                            },
                            create: {
                                TeacherId: subject.TeacherId,
                            },
                        },
                    },
                },
                include: {
                    Category: true,
                    Profession: true,
                    TeacherSubject: true
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

        const subject: z.infer<typeof AdminSubjectDTOs.updateSubjectDTO> = req.body

        log.silly("Deleting subject", {json: subject});

        try {
            const deletedSubject = await orm.subject.delete({
                where: {
                    Id: subject.Id
                },
                include: {
                    Category: true,
                    Profession: true,
                    TeacherSubject: true
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