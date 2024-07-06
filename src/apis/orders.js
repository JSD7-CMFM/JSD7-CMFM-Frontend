import axiosInstance from "../config/myAPIs";

export const getOrders = () => axiosInstance.get(`/orders/`);
export const getOrderById = (orderId) => axiosInstance.get(`/orders/${orderId}`);
export const updateOrder = (orderId) => axiosInstance.patch(`/orders/${orderId}`);
export const createOrder = (data) => axiosInstance.post(`/orders/`, data);