import {z} from "zod";

export default class AdminSubjectDTOs {
    static createSubjectDTO = z.object({
        name: z.string(),
        category: z.string(),
        evf: z.string(),
        gyakorlat: z.string(),
        content: z.string(),
        tanarId: z.string(),
    })

    static updateSubjectDTO = z.object({
        id: z.string(),
        name: z.string(),
        category: z.string(),
        evf: z.string(),
        gyakorlat: z.string(),
        content: z.string(),
        tanarId: z.string(),
        newTanarId: z.string(),
    })
}