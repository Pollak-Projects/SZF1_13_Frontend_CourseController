import logger from "@logger";
import {Request, Response} from "express";
import {z} from "zod";
import {AdminProfessionDTOs} from "@/dtos/AdminProfessionDTOs.ts";
import {PrismaClient} from "@prisma/client";

const log = logger("admin:profession")

const orm = new PrismaClient()


export default class AdminProfessionController {

    async createProfession(req: Request, res: Response) {
        log.http("Adding new profession")

        const profession: z.infer<typeof AdminProfessionDTOs.createProfessionDTO> = req.body

        log.silly(profession)

        try {
            const result = await orm.profession.create({
                data: {
                    ProfessionName: profession.professionName,
                    Subjects: {
                        connectOrCreate: profession.subjects?.map((sub) => ({
                            where: {
                                Id: sub,
                            },
                            create: {
                                Id: sub,
                                Name: "",
                            },
                        })),
                    },
                    Assignments: {
                        connectOrCreate: profession.assignments?.map((ass) => ({
                            where: {
                                Id: ass,
                            },
                            create: {
                                Id: ass,
                                Name: "",
                            }
                        }))
                    }
                },
                include: {
                    Subjects: true,
                    Assignments: true,
                }
            }).catch((err) => {
                log.error(err)
            });

            log.silly("Added profession:", {json: result})

            res.send(profession)
        } catch (err) {
            log.error(err)
            res.status(500).send("Internal server error")
        }
    }

    async getProfessions(req: Request, res: Response) {
        log.http("Getting all professions")

        try {
            const result = await orm.profession.findMany({
                include: {
                    Subjects: true,
                    Assignments: true,
                }
            }).catch((err) => {
                log.error(err)
            });

            log.silly("All professions:", {json: result})

            res.send(result)
        } catch (err) {
            log.error(err)
            res.status(500).send("Internal server error")
        }

    }

    async getProfessionById(req: Request, res: Response) {
        log.http("Getting profession by id")

        const profession: z.infer<typeof AdminProfessionDTOs.createProfessionDTO> = req.body

        log.silly(profession)

        try {
            const result = await orm.profession.findMany({
                include: {
                    Subjects: true,
                    Assignments: true,
                }
            }).catch((err) => {
                log.error(err)
            });

            log.silly("All professions:", {json: result})

            res.send(profession)
        } catch (err) {
            log.error(err)
            res.status(500).send("Internal server error")
        }

    }

    async updateProfession(req: Request, res: Response) {
        log.http("Updated profession")

        const profession: z.infer<typeof AdminProfessionDTOs.updateProfessionDTO> = req.body

        log.silly(profession)

        try {
            const result = await orm.profession.update({
                where: {
                    Id: profession.id,
                },
                data: {
                    ProfessionName: profession.professionName,
                    Subjects: {
                        upsert: profession.subjects?.map((sub) => ({
                            where: {
                                Id: sub,
                            },
                            update: {
                                Id: sub,
                                Name: "",
                            },
                            create: {
                                Id: sub,
                                Name: "",
                            }
                        }))
                    },
                    Assignments: {
                        upsert: profession.assignments?.map((sub) => ({
                            where: {
                                Id: sub,
                            },
                            update: {
                                Id: sub,
                                Name: "",
                            },
                            create: {
                                Id: sub,
                                Name: "",
                            }
                        }))
                    }
                },
                include: {
                    Subjects: true,
                    Assignments: true,
                }
            }).catch((err) => {
                log.error(err)
            });

            log.silly("Updated profession:", {json: result})


            res.send(profession)
        } catch (err) {
            log.error(err)
            res.status(500).send("Internal server error")
        }
    }

    async deleteProfession(req: Request, res: Response) {
        log.http("Delete profession")

        const profession: z.infer<typeof AdminProfessionDTOs.updateProfessionDTO> = req.body

        log.silly(profession)

        try {
            const result = await orm.profession.delete({
                where: {
                    Id: profession.id,
                },
                include: {
                    Subjects: true,
                    Assignments: true,
                }
            }).catch((err) => {
                log.error(err)
            });

            log.silly("Deleted profession:", {json: result})

            res.send(profession)
        } catch (err) {
            log.error(err)
            res.status(500).send("Internal server error")
        }
    }
}