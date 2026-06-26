import { ResponseMessage } from "../common/responseMessage.js";
import { signUpValidation } from "../validations/userValidation.js";
import User from "../models/userModel.js";
import ApiResponse from "../common/apiResponse.js";

export const signUp = async (req, res, next) => {
    try {
        await signUpValidation.validateAsync(req.body);
        console.log(req.body.email);
        // check email is already exist or not
        if (req.body.email) {
            const emailExist = User.findOne({ email: (req.body.email).toLowerCase(), isEmailVerified: true, isDeleted: false });
            if (emailExist) {
                throw ResponseMessage.USER_ERROR.EMAIL_ALREADY_EXIST;
            }
        }
    } catch (error) {
        return new ApiResponse(400, null, error).send(res);
    }
}