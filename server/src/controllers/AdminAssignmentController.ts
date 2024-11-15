import logger from "@logger";
import {Request, Response} from "express";
import {PrismaClient} from "@prisma/client";
import {z} from "zod";
import AdminAssignmentDTOs from "@/dtos/AdminAssignmentDTOs.ts";

const log = logger("admin:assignment")

const orm = new PrismaClient()

export default class AdminAssignmentController {

    async createAssignment(req: Request, res: Response) {
        log.http("Creating new assignment")

        const assignment: z.infer<typeof AdminAssignmentDTOs.createAssignmentDTO> = req.body

        log.silly("Creating new assignment", {json: assignment})

        try {
            const createdAssignment = await orm.assignment.create({
                data: {
                    Name: assignment.Name,
                    Grade: assignment.Grade,
                    Description: assignment.Description,
                    Category: {
                        connectOrCreate: {
                            where: {
                                CategoryName: assignment.Category,
                            },
                            create: {
                                CategoryName: assignment.Category,
                            },
                        },
                    },
                    Profession: {
                        connectOrCreate: {
                            where: {
                                ProfessionName: assignment.Profession,
                            },
                            create: {
                                ProfessionName: assignment.Profession,
                            },
                        },
                    },
                    TeacherAssignment: {
                        create: {
                            TeacherId: assignment.TeacherId,
                        }
                    },
                },
            })

            log.silly("Created new assignment", {json: createdAssignment})

            res.send(createdAssignment);

        } catch (e) {
            log.error(e)
            res.status(500).send("Internal server error")
        }

    }

    async getAssignments(req: Request, res: Response) {
        log.http("Getting all assignments")

        try {
            const assignments = await orm.assignment.findMany({
                include: {
                    Category: true,
                    Profession: true,
                    TeacherAssignment: true
                }
            })

            log.silly("All assignments", assignments)

            res.send(assignments)

        } catch (e) {
            log.error(e)
            res.status(500).send("Internal server error")
        }
    }

    async getAssignmentById(req: Request, res: Response) {
        log.http("Getting assignment by id")

        const id = req.params.id

        log.silly("Getting assignment by id", {id})

        try {
            const assignment = await orm.assignment.findUnique({
                where: {
                    Id: id
                },
                include: {
                    Category: true,
                    Profession: true,
                    TeacherAssignment: true
                }
            })

            log.silly("Assignment", assignment)

            res.send(assignment)

        } catch (e) {
            log.error(e)
            res.status(500).send("Internal server error")
        }

    }

    async updateAssignment(req: Request, res: Response) {
        log.http("Updating assignment")

        const assignment: z.infer<typeof AdminAssignmentDTOs.updateAssignmentDTO> = req.body

        log.silly("Updating assignment", {json: assignment})

        try {
            const updated = await orm.assignment.update({
                where: {
                    Id: assignment.Id,
                },
                data: {
                    Name: assignment.Name,
                    Grade: assignment.Grade,
                    Description: assignment.Description,
                    Category: {
                        upsert: {
                            where: {
                                CategoryName: assignment.Category,
                            },
                            update: {
                                CategoryName: assignment.Category,
                            },
                            create: {
                                CategoryName: assignment.Category,
                            },
                        },
                    },
                    Profession: {
                        upsert: {
                            where: {
                                ProfessionName: assignment.Profession,
                            },
                            update: {
                                ProfessionName: assignment.Profession,
                            },
                            create: {
                                ProfessionName: assignment.Profession,
                            },
                        },
                    },
                    TeacherAssignment: {
                        upsert: {
                            where: {
                                TeacherId_AssignmentId: {
                                    AssignmentId: assignment.Id,
                                    TeacherId: assignment.TeacherId,
                                }
                            },
                            update: {
                                TeacherId: assignment.NewTeacherId,
                            },
                            create: {
                                TeacherId: assignment.TeacherId,
                            },
                        },
                    },
                },
                include: {
                    Category: true,
                    Profession: true,
                    TeacherAssignment: true
                },
            })

            log.silly("Updated", updated)

            res.send(assignment)

        } catch (e) {
            log.error(e)
            res.status(500).send("Internal server error")
        }
    }

    async deleteAssignment(req: Request, res: Response) {
        log.http("Deleting assignment")

        const id = req.params.id

        log.silly("Deleting assignment", id);

        try {
            const deletedAssignment = await orm.assignment.delete({
                where: {
                    Id: id
                },
                include: {
                    Category: true,
                    Profession: true,
                    TeacherAssignment: true
                },
            })

            log.silly("Deleted assignment", deletedAssignment)

            res.send(deletedAssignment)

        } catch (e) {
            log.error(e)
            res.status(500).send("Internal server error")
        }
    }

}