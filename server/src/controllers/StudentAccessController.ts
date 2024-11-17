import logger from "@logger";
import {Request, Response} from "express";

const log = logger("student:student")

// TODO ask feke what should this do exactly, like what tables should it update
export default class StudentAccessController {

    async getAccesses(req: Request, res: Response)  {
        log.debug("Cogito, ergo sum")
        res.send('test')
    }

}