import logger from "@logger";
import {Request, Response} from "express";

const log = logger("admin:topic")

export default class AdminTopicController {

    async createTopic(req: Request, res: Response)  {
        log.debug("I exist")
        res.send('test')
    }

    async getTopics(req: Request, res: Response)  {
        log.debug("I exist")
        res.send('test')
    }

    async updateTopics(req: Request, res: Response)  {
        log.debug("I exist")
        res.send('test')
    }
    async deleteTopic(req: Request, res: Response)  {
        log.debug("I exist")
        res.send('test')
    }
}