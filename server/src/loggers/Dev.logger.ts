import { createLogger, format, transports } from 'winston';

const { combine, timestamp, label, printf } = format;

const myFormat = printf(({ level, message, label, timestamp, service }) => {
    return `${timestamp} ${label} [${level}] [${service}]: ${message}`; // LOG FORMAT
});

const devLogger = () => {
    return createLogger({
        level: 'debug',
        // @ts-ignore this is why i dont like js dependencies
        service: `NOT SET`,
        format: combine(
            format.colorize(),
            label({ label: 'dev' }),
            timestamp({ format: 'YYYY-MM-DD HH:mm:ss' }),
            myFormat
        ),
        transports: [
            new transports.Console() // ONLY PRINTING LOGS IN TERMINAL
        ]
    });
};

const serviceLogger = (serviceName: string) => {
    return devLogger().child({ service: serviceName })
};

export default devLogger();
export {serviceLogger};
