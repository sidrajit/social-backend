import { ResponseMessage } from "../common/responseMessage.js";
import { signUpValidation, loginValidation } from "../validations/userValidation.js";
import User from "../models/userModel.js";
import { ROLE } from "../common/constants.js";

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
        next(error)
    }
}

export const login = async (req, res, next) => {
    try {
        const reqEmail = (req.body.email);
        const reqPassword = req.body.password;


        if (!reqEmail) {
            throw ResponseMessage.VALIDATION.EMAIL_REQUIRED;
        }

        if (!reqPassword) {
            throw ResponseMessage.VALIDATION.PASSWORD_REQUIRED;
        }

        await loginValidation.validateAsync(req.body);

        // check email is already valid or not
        const user = await User.findOne({ email: reqEmail, role: ROLE.USER, isEmailVerified: true, isDeleted: false }).lean();

        if (!user) {
            throw ResponseMessage.USER_ERROR.USER_NOT_FOUND;
        }

        if (user.email === reqEmail && user.password === req.body.password) {
            res.success(ResponseMessage.USER.LOGIN_SUCCESS, user);
        } else {
            throw ResponseMessage.USER_ERROR.INVALID_LOGIN_DETAILS;
        }
    } catch (error) {
        next(error)
    }
}