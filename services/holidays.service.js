import { holidayDTO } from "../dto/holidays.dto.js";
import db from "../models/index.models.js";

const holidaysServices = {
    add: async (holidayData) => {
        const holiday = await db.Holidays.create(holidayData);
        return new holidayDTO(holiday);
    },
    getAll: async () => {
        const holidays = await db.Holidays.findAll();
        return holidays.map(holiday => new holidayDTO({ ...holiday.dataValues }));
    },
    getByUserId: async (id) => {
        const holidays = await db.Holidays.findAll({ where: { userid: id }, order: [['startdate', 'DESC']] });
        return holidays.map(holiday => new holidayDTO({ ...holiday.dataValues }));
    },
    getByUserIdANDStartDate: async (userID, startdate) => {
        const holidays = await db.Holidays.findAll({
            where: { userid: userID, startdate: startdate },
            order: [['startdate', 'DESC']]
        });
        return holidays.map(holiday => new holidayDTO({ ...holiday.dataValues }));
    },
    getByHolidayId: async (holidayId) => {
        const holidays = await db.Holidays.findAll({ where: { id: holidayId }});
        return holidays.map(holiday => new holidayDTO({ ...holiday.dataValues }));;
    },
    updateHolidayStatus: async (holidayId, newStatus) => {
        const holidays = await db.Holidays.update({ isaccepted: newStatus }, { where: { id: holidayId } });
        if (holidays[0] === 1) {
            return true;
        } else {
            return false;
        }
    }
}
export default holidaysServices;