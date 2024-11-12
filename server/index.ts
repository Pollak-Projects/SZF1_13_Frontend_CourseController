import express from 'express';
import {config} from "dotenv";
import logger from "@logger";
import adminRouter from "@routers/AdminRouter.ts";
import teacherRouter from "@routers/TeacherRouter.ts";
import bodyParser from "body-parser";

const debug = logger('server:express')

const app = express();

config(); // Dotenv init

app.use(bodyParser.json())

app.use('/admin', adminRouter)

app.use('/teacher', teacherRouter)

app.get('/', (req, res) => {
  res.send('Hello World!')
})

app.listen(process.env.PORT || 3000, () => {
  debug.info(`Server listening on port ${process.env.PORT || 3000}`)
})
