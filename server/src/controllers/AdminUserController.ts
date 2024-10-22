import logger from "@logger";
import {Request, Response} from "express";
import {PrismaClient} from "@prisma/client";
import AdminUserDTOs from "@/dtos/AdminUserDTOs.ts";
import {z} from "zod";

const log = logger("admin:user")

const orm = new PrismaClient()

// TODO refactor this to try catch
export default class AdminUserController {

    async createUser(req: Request, res: Response)  {
        log.http("Adding new user")

        const user: z.infer<typeof AdminUserDTOs.createUserDTO> = req.body

        log.silly(user)

        try{
            const result = await orm.user.create({
                data: {
                    username: user.username,
                    hashedPwd: user.hashedPwd,
                    UserData: {
                        create: {
                            email: user.email,
                            birthDate: user.birthDate,
                        },
                    },
                },
            }).catch((err) => {
                log.error(err)
            });

            log.silly("Added user:", {json: result})


            res.send(user)
        }
        catch(err) {
            log.error(err)
            res.status(500).send("Internal server error")
        }

    }

    async getUsers(req: Request, res: Response) {
        log.http("Getting all users")
        try {

            const users = await orm.user.findMany({
                include: {
                    UserData: true,
                    TanarInfo: true,
                }
            }).catch((err) => {
                log.error(err)
            });

            log.silly("All users", {json: users})

            res.send(users)

        } catch (err) {
            log.error(err)
            res.status(500).send("Internal server error")
        }
    }

    // TODO this is probably wrong, will not update values
    async updateUser(req: Request, res: Response) {
        log.http("Updating user")

        const user: z.infer<typeof AdminUserDTOs.updateUserDTO> = req.body

        try {

            const users = await orm.user.update({
                where: {
                    id: user.id,
                },
                data: {
                    username: user.username,
                    hashedPwd: user.hashedPwd,
                    UserData: {
                        connectOrCreate: {
                            where: {
                                userId: user.id,
                                email: user.email,
                                birthDate: user.birthDate,
                            },
                            create: {
                                email: user.email,
                                birthDate: user.birthDate,
                            }
                        },
                    },
                },
            })

            log.silly("Updated user", {json: users})

            res.status(200).send(users)
        }catch (err){
            log.error(err)
            res.status(500).send("Internal server error")
        }
    }


    async deleteUser(req: Request, res: Response)  {
        log.debug("Deleting user")

        const user: z.infer<typeof AdminUserDTOs.updateUserDTO> = req.body

        try{

        const deletedUser = await orm.user.delete({
            where: {
                id: user.id,
            },
            include: {
                UserData: true,
            }
        })

        log.silly(deletedUser)

        res.send(deletedUser)
        }
        catch (err) {
            log.error(err)
            res.status(500).send("Internal server error")

        }
    }


}