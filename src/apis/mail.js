import axiosInstance from "../config/myAPIs";

const sendMail = async (orderId, userEmail, cartProducts) => {
    try {
        await axiosInstance.post(`/mails/${orderId}`, {
            userEmail,
            cartProducts,
        }, {
            headers: {
                'Content-Type': 'application/json'
            }
        });
    } catch (error) {
        console.error('Error sending email:', error);
    }
};

export default sendMail;