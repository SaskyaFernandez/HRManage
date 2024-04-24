import memberService from '../services/member.service.js';
import { generateJwt } from '../utils/jwt.utils.js';

const authController = {

    login: async (req, res) => {
        const data = req.body;

        // Validation
        if (!data || !data.email || !data.password) {
            res.status(422)
                .json({
                    errorMessage: 'Invalid data'
                });
            return;
        }

        // Login via le service
        const user = memberService.login(data.email, data.password);

        if (!user) {
            res.status(400)
                .json({
                    errorMessage: 'Invalid credential'
                });
            return;
        }

        // Générer le JWT
        const token = await generateJwt(user);

        // Envoi du token
        res.status(200)
            .json({ token });
    }
}

export default authController;