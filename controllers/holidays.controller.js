import usersServices from "../services/users.service.js";

const userController = {
    /**
     * GET /api/holidays
     * @summary Get information about all holidays
    * @tags holidays
    * @return {holidayDTO} 200 - holidays - application/json
     * @return 404 - Not found
     */
    allHolidays: async (req, res) => {
        try {
        
        } catch (error) {
            res.status(500).send('Internal Server Error');
        }
    }
};

export default userController;
