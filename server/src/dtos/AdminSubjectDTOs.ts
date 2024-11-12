import {z} from "zod";

export default class AdminSubjectDTOs {
    static createSubjectDTO = z.object({
        Name: z.string(),
        Content: z.string(),
        Grade: z.string(),
        Description: z.string(),
        Category: z.string(),
        Profession: z.string(),
        TeacherId: z.string(),
    })

    static updateSubjectDTO = z.object({
        Id: z.string(),
        Name: z.string(),
        Content: z.string(),
        Grade: z.string(),
        Description: z.string(),
        Category: z.string(),
        Profession: z.string(),
        TeacherId: z.string(),
        NewTeacherId: z.string().optional(),
    })
}