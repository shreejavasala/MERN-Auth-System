import express from 'express';
import { login, logout, signup, verifyEmail, forgotPassword } from '../controllers/auth.controller.js';
const authRouter = express.Router();


authRouter.post("/signup", signup);
authRouter.post("/verify-email", verifyEmail);
authRouter.post("/login", login);
authRouter.post("/logout", logout);
authRouter.post("/forgot-password", forgotPassword);


export default authRouter;