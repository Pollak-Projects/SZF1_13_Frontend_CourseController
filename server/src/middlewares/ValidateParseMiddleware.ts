import logger from "@logger"
import {NextFunction, Request, Response} from "express";
import {ZodObject} from "zod";

const log = logger("middleware:prismaParse")

export const validateParseBody = (customDTO: ZodObject<any, any, any, any, any>) => {
    return async (req: Request, res: Response, next: NextFunction) => {
        try {
            req.body = customDTO.parse(req.body);
        } catch (e) {
            log.error("Failed to parse body", e)
            res.status(400).send(e);
            next('Failed to parse body');
        }
        next();
    }
}

