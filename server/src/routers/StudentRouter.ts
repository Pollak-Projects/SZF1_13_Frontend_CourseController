import express, {Request, Response} from "express";
import StudentAccessController from "@controllers/StudentAccessController.ts";
import StudentSubjectController from "@controllers/StudentSubjectController.ts";
import StudentTopicController from "@controllers/StudentTopicController.ts";
import logger from "@logger"
import {validateParseBody} from "@middlewares/ValidateParseMiddleware.ts";
import {Prisma} from "@prisma/client";

const studentAccessController = new StudentAccessController()
const studentSubjectController = new StudentSubjectController()
const studentTopicController = new StudentTopicController()

const log = logger('admin:router')

const studentRouter = express.Router()

const studentAccessRouter = express.Router()
studentAccessRouter.get('/', StudentAccessController.getAccesses)


const studentSubjectRouter = express.Router()
studentSubjectRouter.get('/', StudentSubjectController.getSubjects)


const studentTopicRouter = express.Router()
studentTopicRouter.get('/', StudentTopicController.getTopics)


studentRouter.use('/subject', studentSubjectRouter)
studentRouter.use('/topic', studentTopicRouter)

export default studentRouter