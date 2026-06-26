export default class ApiResponse {
    constructor(statusCode, data = null, message = "Success") {
        this.statusCode = statusCode,
            this.data = data,
            this.message = message
    }

    send(res) {
        return res.status(this.statusCode).json({
            statusCode: this.statusCode,
            message: this.message,
            data: this.data
        })
    }
}