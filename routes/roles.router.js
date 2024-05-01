import { Router } from 'express';
import rolesController from '../controllers/roles.controller.js';
const rolesRouter = Router();

rolesRouter.get('/', rolesController.getAll);
rolesRouter.get('/:id([0-9]+)', rolesController.roleById);
rolesRouter.get('/users/:id([0-9]+)', rolesController.getRoleByUserId);
// rolesRouter.post('/', rolesController.createUser);

export default rolesRouter;