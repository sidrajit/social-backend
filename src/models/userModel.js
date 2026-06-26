import mongoose from "mongoose";
import { ROLE } from "../common/constants.js";

const userSchema = new mongoose.Schema(
    {
        firstName: {
            type: String,
            required: true,
            trim: true
        },
        lastName: {
            type: String,
            required: true,
            trim: true
        },
        email: {
            type: String,
            unique: true,
            required: true,
            trim: true
        },
        password: {
            type: String,
            required: true,
            trim: true
        },
        role: {
            type: Number,
            enum: Object.values(ROLE),
            default: ROLE.USER
        },
        totalPostCount: {
            type: Number,
            default: 0
        },
        isEmailVerified: {
            type: Boolean,
            default: false
        },
        isApproved: {
            type: Boolean,
            default: false
        },
        isBlocked: {
            type: Boolean,
            default: false
        },
        isDeleted: {
            type: Boolean,
            default: false
        }
    },
    {
        timestamps: true
    }
);

const User = mongoose.model("User", userSchema);

export default User;