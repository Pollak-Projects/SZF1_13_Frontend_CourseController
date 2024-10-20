import express, {Request, Response} from "express";
import AdminUserController from "@controllers/AdminUserController.ts";
import AdminAccessController from "@controllers/AdminAccessController.ts";
import AdminSubjectController from "@controllers/AdminSubjectController.ts";
import AdminTopicController from "@controllers/AdminTopicController.ts";
import logger from "@logger"
import {validateParseBody} from "@middlewares/ValidateParseMiddleware.ts";
import {Prisma} from "@prisma/client";
import AdminUserDTOs from "@/dtos/AdminUserDTOs.ts";
import AdminSubjectDTOs from "@/dtos/AdminSubjectDTOs.ts";

const adminUserController = new AdminUserController()
const adminAccessController = new AdminAccessController()
const adminSubjectController = new AdminSubjectController()
const adminTopicController = new AdminTopicController()

const log = logger('admin:router')

const adminRouter = express.Router()

const adminUserRouter = express.Router()
adminUserRouter.post('/', validateParseBody(AdminUserDTOs.createUserDTO), adminUserController.createUser)
adminUserRouter.get('/', adminUserController.getUsers)
adminUserRouter.put('/', validateParseBody(AdminUserDTOs.updateUserDTO), adminUserController.updateUser)
adminUserRouter.delete('/', validateParseBody(AdminUserDTOs.createUserDTO), adminUserController.deleteUser)

const adminAccessRouter = express.Router()
adminAccessRouter.post('/', adminAccessController.createAccess)
adminAccessRouter.get('/', adminAccessController.getAccesses)
adminAccessRouter.put('/', adminAccessController.updateAccess)
adminAccessRouter.delete('/', adminAccessController.deleteAccess)

const adminSubjectRouter = express.Router()
adminSubjectRouter.post('/', validateParseBody(AdminSubjectDTOs.createSubjectDTO), adminSubjectController.createSubject)
adminSubjectRouter.get('/', adminSubjectController.getSubjects)
adminSubjectRouter.put('/', validateParseBody(AdminSubjectDTOs.updateSubjectDTO), adminSubjectController.updateSubject)
adminSubjectRouter.delete('/', validateParseBody(AdminSubjectDTOs.updateSubjectDTO), adminSubjectController.deleteSubject)

const adminTopicRouter = express.Router()
adminTopicRouter.post('/', adminTopicController.createTopic)
adminTopicRouter.get('/', adminTopicController.getTopics)
adminTopicRouter.put('/', adminTopicController.updateTopics)
adminTopicRouter.delete('/', adminTopicController.deleteTopic)

adminRouter.use('/user', adminUserRouter)
adminRouter.use('/access', adminAccessRouter)
adminRouter.use('/subject', adminSubjectRouter)
adminRouter.use('/topic', adminTopicRouter)

export default adminRouter