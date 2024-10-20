import express from 'express';
import {config} from "dotenv";
import logger from "@logger";
import adminRouter from "@routers/Admin.router";

const debug = logger('server:express')

const app = express();

config(); // Dotenv init

app.use('/admin', adminRouter)

app.get('/', (req, res) => {
  res.send('Hello World!')
})

app.listen(process.env.PORT || 3000, () => {
  debug.debug(`Server listening on port ${process.env.PORT || 3000}`)
})
