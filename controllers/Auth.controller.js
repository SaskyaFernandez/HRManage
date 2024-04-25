import { jwtTokenCrypted } from '../utils/jwt.utils.js';
import usersServices from "../services/users.service.js";

const authController = {

    login: async (req, res) => {
        try {
            //? 1. recup body
            const { email, password } = req.body;
            //? 2. verif si user extiste
            const user = await usersServices.getUserByEmail(email);
            if (!user) {
                res.status(404).send({ error: 'User not found!' });
                return;
            }
            //? 3. verif pswd

            if (user.password !== password ) {
                res.status(401).send({ error: 'Wrong password !' });
                return;
            }

            //? 4. envoyer token 
            res.send(await jwtTokenCrypted(user.id));
        } catch (error) {
            // res.status(500).send('Internal Server Error');
            return console.log("aled");
        }
    }
}


export default authController;