import { Router } from 'express';
import userController from '../controllers/user.controller.js';
import { middlewareAuthorisation } from '../middleware/index.middleware.js';

const userRouter = Router();

userRouter.get('/',middlewareAuthorisation, userController.allUsers);
userRouter.get('/:id([0-9]+)', userController.usersById);
userRouter.get('/:email', userController.userByEmail);
userRouter.post('/',middlewareAuthorisation, userController.createUser);

export default userRouter;