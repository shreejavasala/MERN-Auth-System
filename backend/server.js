import express from 'express';
import dotenv from 'dotenv';
dotenv.config();
import cookieParser from 'cookie-parser';

import { connectDB } from './db/connectDB.js';
import authRouter from './routes/auth.route.js';

const app = express();
const PORT = process.env.PORT || 3000;
app.use(express.json())
app.use(cookieParser());

app.get("/", (req, res) => {
  res.send("Hello world!")
});

app.use("/api/auth", authRouter);

app.listen(PORT, () => {
  connectDB();
  console.log(`Server is running of PORT: ${PORT}`) 
});