import express, {Request, Response} from "express";
import TeacherSubjectController from "@controllers/TeacherSubjectController.ts"; // AdminSubjectController helyett
import logger from "@logger";
import {validateParseBody} from "@middlewares/ValidateParseMiddleware.ts";
import {Prisma} from "@prisma/client";
import TeacherUserDTOs from "@/dtos/TeacherUserDTOs.ts"; // AdminUserDTOs helyett
import TeacherSubjectDTOs from "@/dtos/TeacherSubjectDTOs.ts"; // AdminSubjectDTOs helyett
import TeacherTopicDTOs from "@/dtos/TeacherTopicDTOs.ts"; // AdminTopicDTOs helyett

const teacherSubjectController = new TeacherSubjectController(); // AdminSubjectController helyett

const log = logger('teacher:router'); // admin helyett

const teacherRouter = express.Router(); // adminRouter helyett

const teacherSubjectRouter = express.Router(); 
teacherSubjectRouter.post('/', validateParseBody(TeacherSubjectDTOs.createSubjectDTO), teacherSubjectController.createSubject);
teacherSubjectRouter.get('/', teacherSubjectController.getSubjects);
teacherSubjectRouter.put('/', validateParseBody(TeacherSubjectDTOs.updateSubjectDTO), teacherSubjectController.updateSubject);
teacherSubjectRouter.delete('/', validateParseBody(TeacherSubjectDTOs.updateSubjectDTO), teacherSubjectController.deleteSubject);

teacherRouter.use('/subject', teacherSubjectRouter); // adminRouter.use helyett

export default teacherRouter; // adminRouter exportálása helyett
