import express from 'express';
import dotenv from 'dotenv';
dotenv.config();
import cookieParser from 'cookie-parser';
import cors from 'cors';
import { connectDB } from './db/connectDB.js';
import authRouter from './routes/auth.route.js';
import { allowedOrigins } from './utils/allowedOrigins.js';
import path from 'path'

const app = express();
const PORT = process.env.PORT || 3000;
const __dirname = path.resolve();

app.use(cors({ origin: allowedOrigins, credentials: true }));

app.use(express.json())
app.use(cookieParser());

// app.get("/", (req, res) => {
//   res.send("Hello world!")
// });

app.use("/api/auth", authRouter);

if(process.env.NODE_ENV === "production") {
  app.use(express.static(path.join(__dirname, "/frontend/dist")));

  app.get("*", (req, res) => {
    res.sendFile(path.resolve(__dirname, "/frontend/dist/index.html"));
  });
} 

app.listen(PORT, () => {
  connectDB();
  console.log(`Server is running of PORT: ${PORT}`) 
});

export default app;