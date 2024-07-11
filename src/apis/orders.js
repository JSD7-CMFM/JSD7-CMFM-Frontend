import axiosInstance from "../config/myAPIs";
import { setCartState } from "../utils/localStorage.js";

export const getOrders = () => axiosInstance.get(`/orders/`);
export const getOrderById = (orderId) =>
  axiosInstance.get(`/orders/${orderId}`);

export const updateOrder = async (orderId, data, source) => {
  const config = {
    headers: { Source: source },
  };
  try {
    const response = await axiosInstance.patch(
      `/orders/${orderId}`,
      data,
      config
    );
    return response;
  } catch (error) {
    console.error("Add to cart Error:", error);
    throw error;
  }
};

export const createOrder = async (data) => {
  try {
    const response = await axiosInstance.post(`/orders`, data);
    console.log(response.data);
    const { cart } = response.data;
    if (cart && response.data) {
      setCartState(cart);
      return response;
    }
  } catch (error) {
    console.error("Add to cart Error:", error);
    throw error;
  }
};
