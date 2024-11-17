import {z} from "zod";

export class AdminProfessionDTOs {
    static createProfessionDTO = z.object({
        professionName: z.string(),
        subjects: z.string().array().optional(),
        assignments: z.string().array().optional(),
    });

    static updateProfessionDTO = z.object({
        id: z.string(),
        professionName: z.string(),
        subjects: z.string().array(),
        assignments: z.string().array(),
    });
}