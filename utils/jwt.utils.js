import jwt from 'jsonwebtoken';

// ? token generation method
const jwtTokenCrypted = (userId) => {
    let payload = {
        userId: userId
    }

    const token = jwt.sign(
        payload,
        process.env.ACCESS_TOKEN_SECRET);
    
    return token;
};

// ? method for decrypting the token
const jwtTokenDecrypted = (token) => {
    const payload = jwt.verify(
        token.toString(),
        process.env.ACCESS_TOKEN_SECRET);
    
    return payload;
}

export { jwtTokenCrypted, jwtTokenDecrypted };