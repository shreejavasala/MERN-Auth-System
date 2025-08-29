import express from 'express';
import { login, logout, signup, verifyEmail, forgotPassword, resetPassword } from '../controllers/auth.controller.js';
const authRouter = express.Router();


authRouter.post("/signup", signup);
authRouter.post("/verify-email", verifyEmail);
authRouter.post("/login", login);
authRouter.post("/logout", logout);
authRouter.post("/forgot-password", forgotPassword);
authRouter.post("/reset-password/:token", resetPassword);


export default authRouter;