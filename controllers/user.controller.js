import bcrypt from "bcryptjs/dist/bcrypt.js";
import { userRegisterDTO } from "../dto/userRegister.dto.js";
import usersServices from "../services/users.service.js";
import rolesServices from "../services/roles.service.js";
const userController = {
    /**
     * GET /api/users/
     * @summary Get information about all users
     * @tags users
     * @return {userDTO} 200 - Users - application/json
     * @return 404 - Not found
     */
    allUsers: async (req, res) => {
        try {
            const userData = {
                users: await usersServices.getAll()
            };
            res.json(userData);
        } catch (error) {
            res.status(500).json({error: 'Internal Server Error'});
        }
    },

    /**
     * GET /api/users/{id}
     * @summary Get information about a specific user
     * @tags users
     * @param {number} id.path - User's ID
     * @return {userDTO} 200 - User - application/json
     * @return 404 - User not found
     */
    usersById: async (req, res) => {
        try {
            const userId = parseInt(req.params.id);
            const userData = {
                userById: await usersServices.getUserById(userId)
            };
            if (!userData.userById) {
                res.status(404).json({ error: 'User not found!' });
                return;
            }
            res.json(userData);
        } catch (error) {
            res.status(500).json({ error:error.message });
        }
    },
    /**
    * POST /api/users/
    * @summary Register an employee
    * @tags users
    * @param {userRegisterDTO} request.body.required - user - application/json
    * @return 404 - User not found
    */
    createUser: async (req, res) => {
        try {
            const userDTO = new userRegisterDTO({ ...req.body });

            const userExist = await usersServices.getUserByEmail(userDTO.email);
            if (userExist) {
                return res.status(400).json({ error: "Email already used" });
            };

            const regex = new RegExp('[\\w\\-\\.]+@([\\w-]+\\.)+[\\w-]{2,}');
            const emailFormat = regex.test(userDTO.email);
            if (!emailFormat) {
                return res.status(400).json({ error:`Email don't respect the good format`});
            };

            userDTO.isdeleted = false;
            userDTO.holidaysleft = userDTO.maxholidays;

            userDTO.password = await bcrypt.hash(userDTO.password, 10);

            const user = await usersServices.add(userDTO);
            if (!user) {
                return res.status(500).json({ error:`User informations not complet`});
            };

            return res.status(200).json({message:`The user has been successfully registered `});

        } catch (error) {
            return res.status(500).json({error: error.message});
        };
    }
};

export default userController;
