import { jwtTokenCrypted } from '../utils/jwt.utils.js';
import usersServices from "../services/users.service.js";

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
                res.status(404).send({ error: 'User not found!' });
                return;
            }

            if (user.password !== password) {
                res.status(401).send({ error: 'Wrong password !' });
                return;
            }

            res.status(200).json(await jwtTokenCrypted(user.id));
        } catch (error) {
            res.status(500).send('Internal Server Error');
            return;
        }
    }
}


export default authController;