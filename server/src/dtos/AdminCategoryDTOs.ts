import {z} from "zod";

export default class AdminCategoryDTOs {
    static createCategoryDTO = z.object({
        categoryName: z.string(),
        subjects: z.string().array().optional(),
        assignments: z.string().array().optional(),
    })

    static updateCategoryDTO = z.object({
        id: z.string(),
        categoryName: z.string(),
        subjects: z.string().array(),
        assignments: z.string().array(),
    })
}