import devLogger, {serviceLogger} from '@/loggers/Dev.logger.ts';
import uatLogger from '@/loggers/Uat.logger.ts';
import productionLogger from '@/loggers/Production.logger.ts';
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

// import pretty from "pino-pretty";
// import pino from "pino";
// import debugLib from "debug";
//
// const pinoPretty = pretty({
//     colorize: true,
//     useOnlyCustomProps: true,
//     hideObject: true,
//     // @ts-ignore
//     customPrettifiers: {
//         ns: ns => `${ns}` ,
//         level: (logLevel, key, log, { label, labelColorized, colors}) =>
//             // @ts-ignore
//             `${labelColorized} ${log.ns}`,
//     },
//     ignore: "pid,hostname"
// })
//
//
// const pinoLogger = pino({
//     level: 'trace',
// }, pinoPretty)
//
// const pinoLoggerSTUFF = (name: string) => {
//     return pinoLogger.child({ "ns": name })
// }
//
// const debugMain = debugLib("express:server")
//
//
// export default pinoLoggerSTUFF
// export {pinoPretty, pinoLogger, debugMain, setLogger}