import { Router } from 'express';
import holidaysController from '../controllers/holidays.controller.js';
import { middlewareAuthorisation } from '../middleware/index.middleware.js';

const holidaysRouter = Router();

holidaysRouter.get('/all/', middlewareAuthorisation, holidaysController.allHolidays);
holidaysRouter.get('/:id', holidaysController.getByUserId);
holidaysRouter.post('/', middlewareAuthorisation, holidaysController.createHoliday);
holidaysRouter.patch('/', middlewareAuthorisation, holidaysController.changeHoliday);

export default holidaysRouter;