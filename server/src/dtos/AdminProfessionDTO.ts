import {z} from "zod";

export class AdminProfessionDTO {
    static createProfessionDTO = z.object({
        professionName: z.string(),
        subjects: z.string().array().optional(),
    });

    static updateProfessionDTO = z.object({
        id: z.string(),
        professionName: z.string(),
        subjects: z.string().array(),
    });
}