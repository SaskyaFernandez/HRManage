import { Router } from 'express';
import rolesController from '../controllers/roles.controller.js';
import { middlewareAuthorisation } from '../middleware/index.middleware.js';
const rolesRouter = Router();

rolesRouter.get('/', middlewareAuthorisation, rolesController.getAll);
rolesRouter.get('/:id([0-9]+)', middlewareAuthorisation, rolesController.roleById);
rolesRouter.get('/users/:id([0-9]+)', rolesController.getRoleByUserId);
// rolesRouter.post('/', rolesController.createUser);

export default rolesRouter;