import jwt from 'jsonwebtoken';

export const generateJwt = ({ id, email, role }) => {
    return new Promise((resolve, reject) => {
        // Donnée pour le token
        const data = { id, email, role };
        const secret = process.env.JWT_SECRET
        const options = {
            algorithm: 'HS512',
            expiresIn: '12h', // Format : https://github.com/vercel/ms
            audience: process.env.JWT_AUDIENCE,
            issuer: process.env.JWT_ISSUER
        };

        // Générer le token
        jwt.sign(data, secret, options, (error, token) => {
            // Gestion de l'erreur de génération
            if (error) {
                reject(error);
                return;
            }

            // Envoi du token
            resolve(token);
        })
    });
};

export const decodeJwt = (token) => {

    return new Promise((resolve, reject) => {

        // Donnée pour valider le token
        const secret = process.env.JWT_SECRET;
        const options = {
            audience: process.env.JWT_AUDIENCE,
            issuer: process.env.JWT_ISSUER
        }

        // Valide le token
        jwt.verify(token, secret, options, (error, data) => {
            if (error) {
                reject(error);
                return;
            }

            resolve(data);
        });
    });

}