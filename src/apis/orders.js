import axiosInstance from "../config/myAPIs";
import { setCartState } from "../utils/localStorage.js";

const getAllOrders = async () => await axiosInstance.get(`/orders/`);
const getOrderById = (orderId) => axiosInstance.get(`/orders/${orderId}`);

const updateOrder = async (orderId, data, source) => {
  const config = {
    headers: { Source: source },
  };
  try {
    const response = await axiosInstance.patch(
      `/orders/${orderId}`,
      data,
      config
    );
    return response.data;
  } catch (error) {
    throw error;
  }
};

const editOrder = async (id, data) => {
  const config = {
    headers: { Source: "updateStatus" }
  };
  await axiosInstance.patch(`/orders/${id}`, data, config);
};

const deleteOrder = async (orderId) => {
  try {
    const response = await axiosInstance.delete(`/orders/${orderId}`);
    return response;
  } catch (error) {
    console.error("Add to cart Error:", error);
    throw error;
  }
};

const createOrder = async (data) => {
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

// Use named export for individual functions
export {
  getAllOrders,
  getOrderById,
  updateOrder,
  deleteOrder,
  createOrder,
  editOrder,
};

// If needed, use default export for an object containing all functions
export default {
  getAllOrders,
  getOrderById,
  updateOrder,
  deleteOrder,
  createOrder,
  editOrder,
};
