import jwt from 'jsonwebtoken';

const JWTCrypting = async (userId) => {
    const token = await jwtTokenCrypted(userId)
    return await jwtTokenDecrypted(token);
}

// ? token generation method
const jwtTokenCrypted = async (userId) => {
    try {
        let payload = {
            userId: userId
        }

        const token = await jwt.sign(
            payload,
            process.env.ACCESS_TOKEN_SECRET);
        return token;

    } catch (error) {
        console.log(error);
    }


};
// ? method for decrypting the token

const jwtTokenDecrypted = async (token) => {
    try {
        const payload = await jwt.verify(
            token.toString(),
            process.env.ACCESS_TOKEN_SECRET);
        return payload;
    } catch (error) {
        console.log(error);
    }

}
export { JWTCrypting, jwtTokenCrypted, jwtTokenDecrypted };