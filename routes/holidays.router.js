import { Router } from 'express';
import holidaysController from '../controllers/holidays.controller.js';

const holidaysRouter = Router();

holidaysRouter.get('/all/', holidaysController.allHolidays);
holidaysRouter.get('/:id', holidaysController.getByUserId);
holidaysRouter.post('/', holidaysController.createHoliday);
holidaysRouter.patch('/', holidaysController.changeHoliday);

export default holidaysRouter;