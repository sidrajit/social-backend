import Joi from "joi";
import { ResponseMessage } from "../common/responseMessage.js";

const signUpValidation = Joi.object(
    {
        email: Joi.string().email().required().error(new Error(ResponseMessage.VALIDATION.INVALID_EMAIL)),
        password: Joi.string().min(8)
            .regex(/^(?=.*[A-Z])(?=.*[!@#$%^&*])/)
            .required()
            .messages({
                'string.pattern.base': ResponseMessage.VALIDATION.PASSWORD_PATTERN,
                'string.min': ResponseMessage.VALIDATION.MIN_LENGTH_PASSWORD
            })
    }
);

export { signUpValidation };