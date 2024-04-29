import { Router } from 'express';
import holidaysController from '../controllers/holidays.controller.js';

const holidaysRouter = Router();

holidaysRouter.get('/all/', holidaysController.allHolidays);
holidaysRouter.get('/', holidaysController.getById);
holidaysRouter.post('/', holidaysController.createHoliday);

export default holidaysRouter;