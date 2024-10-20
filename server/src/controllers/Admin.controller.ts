import logger from "@logger";
import {Request, Response} from "express";
import debugLib from "debug";

const debug = logger("admin:admin")

export default class AdminController {

    async getAdmins(req: Request, res: Response)  {
        debug.debug("I exist")
        res.send('test')
    }
}