import logger from "@logger";
import {Request, Response} from "express";

const log = logger("admin:subject")

export default class AdminSubjectController {

    async createSubject(req: Request, res: Response)  {
        log.debug("I exist")
        res.send('test')
    }

    async getSubjects(req: Request, res: Response)  {
        log.debug("I exist")
        res.send('test')
    }

    async updateSubject(req: Request, res: Response)  {
        log.debug("I exist")
        res.send('test')
    }
    async deleteSubject(req: Request, res: Response)  {
        log.debug("I exist")
        res.send('test')
    }
}