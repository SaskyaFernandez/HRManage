import { Router } from 'express';
import authController from '../controllers/Auth.controller.js';

const authRouter = Router();

authRouter.post('/login', authController.login);

export default authRouter;