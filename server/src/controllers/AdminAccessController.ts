import logger from "@logger";
import {Request, Response} from "express";

const log = logger("admin:admin")

// TODO ask feke what should this do exactly, like what tables should it update
export default class AdminAccessController {

    async createAccess(req: Request, res: Response)  {
        log.debug("I exist")
        res.send('test')
    }

    async getAccesses(req: Request, res: Response)  {
        log.debug("I exist")
        res.send('test')
    }

    async updateAccess(req: Request, res: Response)  {
        log.debug("I exist")
        res.send('test')
    }
    async deleteAccess(req: Request, res: Response)  {
        log.debug("I exist")
        res.send('test')
    }
}