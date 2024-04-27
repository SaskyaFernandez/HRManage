import { jwtTokenDecrypted } from "../utils/jwt.utils.js";


const middlewareAuthentification = async (req, res, next) => {
    const authHeader = req.headers.authorization;

    const token = authHeader && authHeader.split(' ')[1];
    if (!token) {
        return res.status(403).send("Access denied.");
    }
    
    try {
        let payload = jwtTokenDecrypted(token);

        next();
    } catch (error) {

        return res.status(403).send("Token invalid.");
    }
};

export { middlewareAuthentification };
