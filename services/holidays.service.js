import { holidayDTO } from "../dto/holidays.dto.js";
import db from "../models/index.models.js";

const holidaysServices = {
    add: async (holidayData) => {
        const holiday = await db.Holidays.create(holidayData);
        return new holidayDTO(holiday);
    },
    getAll: async () => {
        const holidays = await db.Holidays.findAll();
        return holidays.map(holiday => holiday)
    },
    getById: async (id) => {
        const holidays = await db.Holidays.findAll({ where: { userid: id }, order: [['startdate', 'DESC']] });
        return holidays;
    },
    getByUserIdANDStartDate: async (userID, startdate) => {
        const holidays = await db.Holidays.findAll({
            where: { userid: userID, startdate: startdate },
            order: [['startdate', 'DESC']]
        });
        return holidays.map(holiday => new holidayDTO({ ...holiday.dataValues }));
    }
}
export default holidaysServices;