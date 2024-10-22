import {z} from "zod";

export default class AdminUserDTOs {
    static createUserDTO = z.object({
        username: z.string(),
        hashedPwd: z.string(),
        email: z.string(),
        birthDate: z.coerce.date(),
    })

    static updateUserDTO = z.object({
        id: z.string(),
        username: z.string(),
        hashedPwd: z.string(),
        email: z.string(),
        birthDate: z.coerce.date(),
    })
}