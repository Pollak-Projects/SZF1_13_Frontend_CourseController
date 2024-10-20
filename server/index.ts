import express from 'express';
import {config} from "dotenv";
import logger from "@logger";
import pinoDebug from "pino-debug";
import debugLib from "debug"
import adminRouter from "@routers/Admin.router";
import {serviceLogger} from "@/loggers/Dev.logger.ts";

/*pinoDebug(pinoLogger, {
  auto: true,
  map: {
    'express:server': 'info',
    'express:router': 'debug',
    '*': 'trace'
  }
})*/

const debug = logger('server:express')

const app = express();

config(); // Dotenv init


app.use('/admin', adminRouter)

app.get('/', (req, res) => {
  res.send('Hello World!')
})

app.listen(process.env.PORT || 3000, () => {
  console.log('asdf')
  // mainLogger.debug("sadf")
  debug.debug(`Server listening on port ${process.env.PORT || 3000}`)
})
