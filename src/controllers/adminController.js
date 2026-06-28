import { ResponseMessage } from "../common/responseMessage.js";

export const dashboard = async (req, res) => {
    try {
        setTimeout(() => {
            return res.success(ResponseMessage.ADMIN.DASHBOARD_SUCCESS, {});
        }, 10000);
    } catch (error) {
        return res.error(500, ResponseMessage.COMMON_ERROR.SERVER_ERROR);
    }
}