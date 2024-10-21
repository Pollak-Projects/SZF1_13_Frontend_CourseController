import devLogger, {serviceLogger} from '@/loggers/DevLogger.ts';
import uatLogger from '@/loggers/UatLogger.ts';
import productionLogger from '@/loggers/ProductionLogger.ts';
import {Logger} from "winston";

let logger: Logger = devLogger

function setLogger(serviceName: string): Logger {
    return serviceLogger(serviceName)
}

if (process.env.NODE_ENV === 'production') {
    logger = productionLogger();
}

if (process.env.NODE_ENV === 'uat') {
    logger = uatLogger();
}

if (process.env.NODE_ENV === 'dev') {
    logger = devLogger;
}

export default setLogger;