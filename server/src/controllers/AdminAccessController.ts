import logger from "@logger";
import {Request, Response} from "express";
import debugLib from "debug";

const log = logger("admin:admin")

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