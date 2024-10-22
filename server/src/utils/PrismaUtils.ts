import {Prisma} from "@prisma/client";
import logger from "@logger"
import {Request, Response} from "express";
import {ZodObject} from "zod";

const log = logger("utils:prismautils")

export const parseInputTo = async <T>(
    req: Request, res: Response, customDTO: ZodObject<any, any, any, any, any>
) => {
    const resultDTO: T | void = await customDTO.parseAsync(req.body)
        .catch((e) => {
            log.error("Failed to parse body", e)
            res.status(400).send('Failed to parse body')
        });

    return resultDTO
}

