import { jwtTokenDecrypted } from "../utils/jwt.utils.js";

const middlewareAuthentification = async (req, res, next) => {
    try {
        const authHeader = req.headers.authorization;
        console.log(req);
        const token = authHeader && authHeader.split(' ')[1];
        if (!token) {
            return res.status(403).send("Access denied.");
        }
        req.token = await jwtTokenDecrypted(token);

        console.log("aah",req.token);
        next();

    } catch (error) {
        console.log(error);
    }
};

export { middlewareAuthentification };
