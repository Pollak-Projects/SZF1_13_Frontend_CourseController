// import logger from "@logger";
import {Request, Response} from "express";
import debugLib from "debug";

const debug = debugLib("admin:admin")

export default class AdminController {

    async getAdmins(req: Request, res: Response)  {
        // logger.debug('I exist')
        debug("asdf")
        res.send('test')
    }
}