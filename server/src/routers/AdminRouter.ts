import express from "express";
import AdminUserController from "@controllers/AdminUserController.ts";
import AdminAccessController from "@controllers/AdminAccessController.ts";
import AdminSubjectController from "@controllers/AdminSubjectController.ts";
import AdminCategoryController from "@controllers/AdminCategoryController.ts";
import logger from "@logger"
import {validateParseBody} from "@middlewares/ValidateParseMiddleware.ts";
import AdminUserDTOs from "@/dtos/AdminUserDTOs.ts";
import AdminSubjectDTOs from "@/dtos/AdminSubjectDTOs.ts";
import AdminCategoryDTOs from "@/dtos/AdminCategoryDTOs.ts";
import AdminProfessionController from "@controllers/AdminProfessionController.ts";
import {AdminProfessionDTO} from "@/dtos/AdminProfessionDTO.ts";

const adminUserController = new AdminUserController()
const adminAccessController = new AdminAccessController()
const adminSubjectController = new AdminSubjectController()
const adminCategoryController = new AdminCategoryController()
const adminProfessionController = new AdminProfessionController()

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
adminSubjectRouter.get('/:id', adminSubjectController.getSubjectById)
adminSubjectRouter.put('/', validateParseBody(AdminSubjectDTOs.updateSubjectDTO), adminSubjectController.updateSubject)
adminSubjectRouter.delete('/', validateParseBody(AdminSubjectDTOs.updateSubjectDTO), adminSubjectController.deleteSubject)

const adminCategoryRouter = express.Router()
adminCategoryRouter.post('/', validateParseBody(AdminCategoryDTOs.createCategoryDTO), adminCategoryController.createCategory)
adminCategoryRouter.get('/', adminCategoryController.getCategories)
adminCategoryRouter.put('/', validateParseBody(AdminCategoryDTOs.updateCategoryDTO), adminCategoryController.updateCategory)
adminCategoryRouter.delete('/', validateParseBody(AdminCategoryDTOs.updateCategoryDTO), adminCategoryController.deleteCategory)

const adminProfessionRouter = express.Router()
adminProfessionRouter.post('/', validateParseBody(AdminProfessionDTO.createProfessionDTO), adminProfessionController.createProfession)
adminProfessionRouter.get('/', adminProfessionController.getProfessions)
adminProfessionRouter.put('/', validateParseBody(AdminProfessionDTO.updateProfessionDTO), adminProfessionController.updateProfession)
adminProfessionRouter.delete('/', validateParseBody(AdminProfessionDTO.updateProfessionDTO), adminProfessionController.deleteProfession)

adminRouter.use('/user', adminUserRouter)
adminRouter.use('/access', adminAccessRouter)
adminRouter.use('/subject', adminSubjectRouter)
adminRouter.use('/category', adminCategoryRouter)
adminRouter.use('/profession', adminProfessionRouter)

export default adminRouter