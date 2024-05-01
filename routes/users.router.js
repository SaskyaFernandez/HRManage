import { Router } from 'express';
import userController from '../controllers/user.controller.js';

const userRouter = Router();

userRouter.get('/', userController.allUsers);
userRouter.get('/:id([0-9]+)', userController.usersById);
userRouter.post('/', userController.createUser);

export default userRouter;