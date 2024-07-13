import axiosInstance from "../config/myAPIs";

const sendMail = async (orderId, userEmail, cartProducts) => {
    await axiosInstance.post(`/mails/${orderId}`, {
        userEmail,
        cartProducts,
    }, {
        headers: {
            'Content-Type': 'application/json'
        }
    });
};

export default sendMail;