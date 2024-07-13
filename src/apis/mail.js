import axiosInstance from "../config/myAPIs";

const sendMail = async (orderId) => {
    await axiosInstance.post("/mail", orderId);
};
export default { sendMail }