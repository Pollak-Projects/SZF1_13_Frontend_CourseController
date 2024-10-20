import express from "express";
import AdminController from "@controllers/Admin.controller";

const adminController = new AdminController
const adminRouter = express.Router()

adminRouter.get('/', adminController.getAdmins)
adminRouter.get('/', (req, res) =>{
    res.send('asdffasd')
})

export default adminRouter