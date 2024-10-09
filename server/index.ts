import express from 'express';
import {config} from "dotenv";
const app = express();
config(); // Dotenv init

app.get('/', (req, res) => {
  res.send('Hello World!')
})

app.listen(process.env.PORT || 3000, () => {
  console.log(`Server listening on port ${process.env.PORT || 3000}`)
})
