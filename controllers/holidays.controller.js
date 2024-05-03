import {
    holidayRequestDTO
} from "../dto/holidaysRequest.dto.js";
import holidaysServices from "../services/holidays.service.js";
import {
    jwtTokenDecrypted
} from "../utils/jwt.utils.js";
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
            res.status(500).json({
                error: error
            });
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
            const holidaysData = {
                holidays: await holidaysServices.getByUserId(payload.userId)
            };

            res.json(holidaysData);
        } catch (error) {
            res.status(500).json({
                error: "error"
            });
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
            const holidayDTO = new holidayRequestDTO({
                ...req.body
            });

            const authHeader = req.headers.authorization;

            const token = authHeader && authHeader.split(' ')[1];
            const payload = jwtTokenDecrypted(token);
            holidayDTO.userid = payload.userId;

            const hollidayExist = await holidaysServices.getByUserIdANDStartDate(holidayDTO.userid, holidayDTO.startdate)
            if (hollidayExist.length > 0) {
                return res.status(400).json({
                    error: "holiday already used"
                });
            };
            const user = await holidaysServices.add(holidayDTO);
            if (!user) {
                return res.status(500).json({
                    error: `User informations not complet`
                });
            };
            return res.status(200).json({
                message: `The vacation request was successfully registered.`
            });

        } catch (error) {
            return res.status(500).json({
                error: error.message
            });
        }
    },
    /**
     * PATCH /api/holidays/
     * @summary accept or not a Holiday Request
     * @tags holidays
     * @param {holidayRequestDTO} request.body.required - user - application/json
     * @return 404 - User not found
     */
    changeHoliday: async (req, res) => {
        try {
            const HolidayRequest = {
                NEUTRAL: 'Pending',
                ACCEPT: 'Approved',
                REJECT: 'Rejected'
            };

            const holidayId = req.body.id
            const isaccepted = req.body.isaccepted;
            if (!Object.values(HolidayRequest).includes(isaccepted)) {
                return res.status(400).json({ error: "Invalid parameters" });
            }

            const holiday = await holidaysServices.getByHolidayId(holidayId);
            if (holiday.length == 0) {
                return res.status(404).json({ error: "Holiday not found" });
            }
            switch (isaccepted) {
                case HolidayRequest.NEUTRAL:
                    const holidayNeutralStatus = await holidaysServices.updateHolidayStatus(holidayId, HolidayRequest.NEUTRAL);
                    if (holidayNeutralStatus) {
                        return res.status(200).json({ message: "Holiday request status remains neutral" });
                    } else {
                        return res.status(400).json({ message: "Failed to maintain holiday request status as neutral" });
                    }
                case HolidayRequest.ACCEPT:
                    const holidayAcceptStatus = await holidaysServices.updateHolidayStatus(holidayId, HolidayRequest.ACCEPT);
                    if (holidayAcceptStatus) {
                        return res.status(200).json({ message: "Holiday request accepted successfully" });
                    } else {
                        return res.status(400).json({ message: "Holiday request rejection failed" });
                    }
                case HolidayRequest.REJECT:
                    const holidayRejectStatus = await holidaysServices.updateHolidayStatus(holidayId, HolidayRequest.REJECT);
                    if (holidayRejectStatus) {
                        return res.status(200).json({ message: "Holiday request rejected successfully" });
                    } else {
                        return res.status(400).json({ message: "Holiday request rejection failed" });
                    }
                default:
                    return res.status(400).json({ error: "Invalid action" });
            }
        } catch (error) {
            return res.status(500).json({ error: error.message });
        }
    }


};

export default holidaysController;