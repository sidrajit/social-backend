export const ResponseMessage = {
    ADMIN: {
        DASHBOARD_SUCCESS : "Dashboard fetch successfully"
    },
    ADMIN_ERROR: {

    },

    USER: {
        LOGIN_SUCCESS : "User login successfully"
    },
    USER_ERROR: {
        EMAIL_ALREADY_EXIST: "User email already exist", 
        INVALID_LOGIN_DETAILS: "Invalid login credentials",
        USER_NOT_FOUND: "User details not found"
    },

    VALIDATION: {
        INVALID_EMAIL: "Plase enter valid email",
        MIN_LENGTH_PASSWORD: "Password must be at least 8 characters",
        PASSWORD_PATTERN: "Password must contain at least one uppercase letter and one special character",
        EMAIL_REQUIRED: "Email required",
        PASSWORD_REQUIRED: "Password required"
    },

    COMMON: {
    },
    COMMON_ERROR: {
        SERVER_ERROR : "Internal server error",
        ACCESS_DENIED: "Access denied. No authentication token provided.",
        AUTHENTICATION_FAILED: "Authentication failed. Invalid or expired token.",
    },
}