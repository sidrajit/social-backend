import ApiResponse from "../common/apiResponse.js";
import { ResponseMessage } from "../common/responseMessage.js";

export const dashboard = async (req, res) => {
    try {
        setTimeout(() => {
            return new ApiResponse(200, {}, ResponseMessage.ADMIN.DASHBOARD_SUCCESS).send(res);
        }, 10000);
    } catch (error) {
        return new ApiResponse(500, null, ResponseMessage.COMMON_ERROR.SERVER_ERROR).send(res);
    }
}