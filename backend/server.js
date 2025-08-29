import express from 'express';
import dotenv from 'dotenv';
dotenv.config()

import { connectDB } from './db/connectDB.js';
import authRouter from './routes/auth.route.js';

const app = express();
const PORT = 3000;

app.get("/", (req, res) => {
  res.send("Hello world!")
});

app.use("/api/auth", authRouter);

app.listen(PORT, () => {
  connectDB();
  console.log(`Server is running of PORT: ${PORT}`) 
});