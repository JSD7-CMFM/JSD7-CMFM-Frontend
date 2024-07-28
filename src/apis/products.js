import { getToken } from "../utils/localStorage.js";
import axiosInstance from "../config/myAPIs.js";

const fetchProducts2 = async () => {
  try {
    const response = await axiosInstance.get("/products");
    return response.data;
  } catch (error) {
    throw error;
  }
};
const fetchProducts = async (filters) => {
  try {
    const response = await axiosInstance.get("/products", {
      params: {
        ...filters,
      },
    });
    return response;
  } catch (error) {
    throw error;
  }
};

const getAllProducts = async () =>
  await axiosInstance.get("/products", {
    params: {
      search: "",
      page: 1,
      limit: 36,
    },
  });

const addProduct = async (data) => {
  const config = {
    headers: { Authorization: `Bearer ${getToken()}` },
  };
  return await axiosInstance.post("/products", data, config);
};

const deleteProduct = async (id) =>
  await axiosInstance.delete(`/products/${id}`);

const editProduct = async (id, data, source) => {
  const config = {
    headers: { Source: source },
  };
  await axiosInstance.patch(`/products/${id}`, data, config);
};

export default {
  fetchProducts,
  getAllProducts,
  addProduct,
  deleteProduct,
  editProduct,
};
