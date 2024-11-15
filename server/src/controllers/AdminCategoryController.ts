import logger from "@logger";
import {Request, Response} from "express";
import {PrismaClient} from "@prisma/client";
import {z} from "zod";
import AdminCategoryDTOs from "@/dtos/AdminCategoryDTOs.ts";

const log = logger("admin:category")

const orm = new PrismaClient()

export default class AdminCategoryController {

    async createCategory(req: Request, res: Response) {
        log.http("Creating new category")

        const category: z.infer<typeof AdminCategoryDTOs.createCategoryDTO> = req.body

        try {
            const resultCategory = await orm.category.create({
                data: {
                    CategoryName: category.categoryName,
                    Subjects: {
                        connectOrCreate: category.subjects?.map((sub) => ({
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
                        connectOrCreate: category.assignments?.map((sub) => ({
                            where: {
                                Id: sub,
                            },
                            create: {
                                Id: sub,
                                Name: "",
                            },
                        })),
                    },
                },
                include: {
                    Subjects: true,
                    Assignments: true,
                }
            })

            log.silly("Created new category", {json: resultCategory})

            res.send(category)

        } catch (e) {
            log.error(e)
            res.status(500).send("Internal server error")
        }
    }

    async getCategories(req: Request, res: Response) {
        log.http("Getting all categories")

        try {
            const allCategories = await orm.category.findMany({
                include: {
                    Subjects: true,
                    Assignments: true,
                },
            })

            log.silly("All categories", {json: allCategories})

            res.send(allCategories)

        } catch (e) {
            log.error(e)
            res.status(500).send("Internal server error")
        }
    }

    async getCategoryById(req: Request, res: Response) {
        log.http("Getting category by id")

        const id = req.params.id

        try {
            const category = await orm.category.findFirst({
                where: {
                    Id: id,
                },
                include: {
                    Subjects: true,
                    Assignments: true,
                },
            })

            log.silly("Category", {json: category})

            res.send(category)

        } catch (e) {
            log.error(e)
            res.status(500).send("Internal server error")
        }
    }

    async updateCategory(req: Request, res: Response) {
        log.http("Updating category")

        const category: z.infer<typeof AdminCategoryDTOs.updateCategoryDTO> = req.body

        try {
            const updatedCategory = await orm.category.update({
                where: {
                    Id: category.id,
                },
                data: {
                    CategoryName: category.categoryName,
                    Subjects: {
                        upsert: category.subjects?.map((sub) => ({
                            where: {
                                Id: sub,
                            },
                            update: {
                                Id: sub,
                            },
                            create: {
                                id: sub,
                                Name: "",
                            },
                        }))
                    },
                    Assignments: {
                        upsert: category.assignments?.map((sub) => ({
                            where: {
                                Id: sub,
                            },
                            update: {
                                Id: sub,
                            },
                            create: {
                                id: sub,
                                Name: "",
                            },
                        }))
                    }
                },
                include: {
                    Subjects: true,
                    Assignments: true,
                },
            })

            log.silly("Updated category", {json: updatedCategory})
            res.send(category)

        } catch (e) {
            log.error(e)
            res.status(500).send("Internal server error")
        }

    }

    async deleteCategory(req: Request, res: Response) {
        log.http("Deleted category")

        const category: z.infer<typeof AdminCategoryDTOs.updateCategoryDTO> = req.body

        try {
            const deletedCategory = await orm.category.delete({
                where: {
                    Id: category.id,
                },
                include: {
                    Subjects: true,
                    Assignments: true,
                },
            })

            log.silly("Deleted category", {json: deletedCategory})

            res.send(category)

        } catch (e) {
            log.error(e)
            res.status(500).send("Internal server error")
        }
    }
}