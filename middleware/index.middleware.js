import { jwtTokenDecrypted } from "../utils/jwt.utils.js";


const middlewareAuthentification = async (req, res, next) => {
    const authHeader = req.headers.authorization;

    const token = authHeader && authHeader.split(' ')[1];
    if (!token) {
        return res.status(403).json({ error:"Access denied."});
    }
    
    try {
        let payload = jwtTokenDecrypted(token);

        next();
    } catch (error) {

        return res.status(403).json({error:"Token invalid."});
    }
};

export { middlewareAuthentification };


const middlewareAuthorisation = async (req, res, next) => {
    const authHeader = req.headers.authorization;

    const token = authHeader && authHeader.split(' ')[1];
    if (!token) {
        return res.status(403).json({ error: "Access denied." });
    }

    try {
        let payload = jwtTokenDecrypted(token);
        let userRoles = payload.userRole.includes('RH')
        if (!userRoles) {
            return res.status(403).json({ error: "You don't have the necessary rights" });

            }
            next();
    } catch (error) {

        return res.status(403).json({ error: "Token invalid." });
    }
};

export { middlewareAuthorisation };
