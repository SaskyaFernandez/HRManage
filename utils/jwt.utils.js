import jwt from 'jsonwebtoken';

const jwtTokenCrypted = (userId, userRole) => {
    let payload = {
        userId: userId,
        userRole: userRole
    }

    const token = jwt.sign(
        payload,
        process.env.ACCESS_TOKEN_SECRET);
    
    return token;
};

const jwtTokenDecrypted = (token) => {
    const payload = jwt.verify(
        token.toString(),
        process.env.ACCESS_TOKEN_SECRET);
    
    return payload;
}

export { jwtTokenCrypted, jwtTokenDecrypted };