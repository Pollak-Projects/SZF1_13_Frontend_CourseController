import logger from "@logger";
import {Request, Response} from "express";
import {PrismaClient} from "@prisma/client";
import AdminUserDTOs from "@/dtos/AdminUserDTOs.ts";
import {z} from "zod";

const log = logger("admin:user")

const orm = new PrismaClient()

export default class AdminUserController {

    async createUser(req: Request, res: Response)  {
        log.http("Adding new user")

        const user: z.infer<typeof AdminUserDTOs.createUserDTO> = req.body

        log.silly(user)

        try{
            const result = await orm.user.create({
                data: {
                    Username: user.username,
                    HashedPwd: user.hashedPwd,
                    DisplayName: user.displayName,
                    UserData: {
                        create: {
                            Email: user.email,
                            BirthDate: user.birthDate,
                        },
                    },
                    TeacherUser: {
                        create: {
                            Teacher: {
                                create: {
                                    Name: user.username
                                }
                            }
                        }
                    }
                },
            }).catch((err) => {
                log.error(err)
            });

            log.silly("Added user:", {json: result})


            res.send(result)
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
                    TeacherUser: true,
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

    async getUserById(req: Request, res: Response) {
        log.http("Getting user by id")

        const id = req.params.id

        try {
            const user = await orm.user.findFirst({
                where: {
                    Id: id,
                },
                include: {
                    UserData: true,
                    TeacherUser: true,
                }
            }).catch((err) => {
                log.error(err)
            });

            log.silly("All users", {json: user})

            res.send(user)

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
                    Id: user.id,
                },
                data: {
                    Username: user.username,
                    HashedPwd: user.hashedPwd,
                    DisplayName: user.displayName,
                    UserData: {
                        connectOrCreate: {
                            where: {
                                UserId: user.id,
                                Email: user.email,
                                BirthDate: user.birthDate,
                            },
                            create: {
                                Email: user.email,
                                BirthDate: user.birthDate,
                            }
                        },
                    },
                    TeacherUser: {
                        upsert: {
                            where: {
                                UserId_TeacherId: {
                                    UserId: user.id,
                                    TeacherId: user.teacherId,
                                }
                            },
                            update: {
                                TeacherId: user.teacherId,
                            },
                            create: {
                                Teacher: {
                                    connectOrCreate: {
                                        where: {
                                            Id: user.teacherId,
                                        },
                                        create: {
                                            Id: user.teacherId,
                                            Name: user.teacherName!
                                        }
                                    }
                                }
                            },
                        }
                    }
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
                Id: user.id,
            },
            include: {
                UserData: true,
                TeacherUser: true,
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