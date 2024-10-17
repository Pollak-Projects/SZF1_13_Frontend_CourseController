import devLogger from '@/loggers/Dev.logger.ts';
import uatLogger from '@/loggers/Uat.logger.ts';
import productionLogger from '@/loggers/Production.logger.ts';
import {Logger} from "winston";

let logger: Logger = devLogger();

if (process.env.NODE_ENV === 'production') {
    logger = productionLogger();
}

if (process.env.NODE_ENV === 'uat') {
    logger = uatLogger();
}

if (process.env.NODE_ENV === 'dev') {
    logger = devLogger();
}

export default logger;