import { holidayRequestDTO } from "../dto/holidaysRequest.dto.js";
import holidaysServices from "../services/holidays.service.js";
import { jwtTokenDecrypted } from "../utils/jwt.utils.js";
const holidaysController = {
    /**
     * GET /api/holidays/all
     * @summary Get information about all holidays
    * @tags holidays
    * @return {holidayDTO} 200 - holidays - application/json
     * @return 404 - Not found
     */
    allHolidays: async (req, res) => {
        try {
            const holidaysData = {
                holidays: await holidaysServices.getAll()
            };
            res.json(holidaysData);
        } catch (error) {
            res.status(500).json({ error: error });
        }
    },
    /**
    * GET /api/holidays
    * @summary Get information about all holidays by id
   * @tags holidays
   * @return {holidayDTO} 200 - holidays - application/json
    * @return 404 - Not found
    */
    getById: async (req, res) => {
        try {
            const authHeader = req.headers.authorization;

            const token = authHeader && authHeader.split(' ')[1];
            const payload = jwtTokenDecrypted(token);
            console.log(payload);
            const holidaysData = {
                holidays: await holidaysServices.getById(payload.userId)
            };
          
            res.json(holidaysData);
        } catch (error) {
            res.status(500).json({ error: "error" });
        }
    },
    /**
    * POST /api/holidays/
    * @summary Register an holiday
    * @tags holidays
    * @param {holidayRequestDTO} request.body.required - user - application/json
    * @return 404 - User not found
    */
    createHoliday: async (req, res) => {
        try {
            const holidayDTO = new holidayRequestDTO({ ...req.body });

            const authHeader = req.headers.authorization;

            const token = authHeader && authHeader.split(' ')[1];
            const payload = jwtTokenDecrypted(token);
            holidayDTO.userid = payload.userId;

            const hollidayExist = await holidaysServices.getByUserIdANDStartDate(holidayDTO.userid, holidayDTO.startdate)
            console.log(!!hollidayExist);
            if (hollidayExist.length > 0) {
                return res.status(400).json({ error: "holiday already used" });
            };
            const user = await holidaysServices.add(holidayDTO);
            if (!user) {
                return res.status(500).json({ error: `User informations not complet` });
            };
            return res.status(200).json({ message: `The vacation request was successfully registered.` });

        } catch (error) {
            return res.status(500).json({ error: error.message });
        };
    }
    
};

export default holidaysController;
