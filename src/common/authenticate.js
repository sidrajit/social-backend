import jsonWebToken from "jsonwebtoken";
import { ResponseMessage } from "./responseMessage.js";


export const verifyJWT = (req, res, next) => {
    try {
        const authHeader = req.header("Authorization");
        const token = authHeader?.replace("Bearer ", "");
        if (!token) {
            throw ResponseMessage.COMMON_ERROR.ACCESS_DENIED;
        }
        const decodedClaims = jsonWebToken.verify(token, process.env.JWT_SECRET);
        req.user = decodedClaims; 
        next();
    } catch (error) {
        return res.error(401,ResponseMessage.COMMON_ERROR.AUTHENTICATION_FAILED);
    }
};