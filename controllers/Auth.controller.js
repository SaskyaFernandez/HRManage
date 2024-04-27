import { jwtTokenCrypted } from '../utils/jwt.utils.js';
import usersServices from "../services/users.service.js";
import bcrypt from 'bcryptjs/dist/bcrypt.js';

/**
 * User
 * @typedef {object} userLogin
 * @property {string} email
 * @property {string} password
*/

const authController = {
    /**
       * POST /api/auth/login/
       * @summary login 
       * @tags users
       * @param {userLogin} request.body.required - user - application/json
       * @return 404 - Not found
    -*/
    login: async (req, res) => {
        try {
            const { email, password } = req.body;
            const user = await usersServices.getUserByEmail(email);
            if (!user) {
                res.status(404).json({ error: 'User not found!' });
                return;
            }
            let result = await bcrypt.compare(password, user.password);

            if (!result) {
                return res.status(401).json({ error: 'Wrong password !' });
            }

            res.status(200).json(jwtTokenCrypted(user.id));
        } catch (error) {
            res.status(500).json('Internal Server Error');
            return;
        }
    }
}


export default authController;