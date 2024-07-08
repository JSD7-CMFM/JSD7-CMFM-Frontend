import axiosInstance from "../config/myAPIs.js";
import { setToken, getToken } from "../utils/localStorage.js";

const Login = async (user) => {
  try {
    const response = await axiosInstance.post("/users/login", user);
    console.log("Login response:", response.data);
    const { token } = response.data;
    if (response.data && token) {
      setToken(token);
    }
    return response;
  } catch (error) {
    console.error("Login error:", error);
    throw error;
  }
};

const Register = async (data) => {
  console.log(data);
  try {
    const response = await axiosInstance.post("/users/register", data);
    const { token } = response.data;
    console.log("response: ", response);
    console.log("data: ", response.data);
    console.log("token: ", token);

    if (response.data && token) {
      setToken(token);
      return response;
    }
  } catch (error) {
    console.error("Registration error:", error);
    throw error;
  }
};

const getUser = async (id) => {
  const config = {
    headers: { Authorization: `Bearer ${getToken()}` },
  };
  return await axiosInstance.get(`/users/${id}`, config);
};

const editUser = async (id) => {
  const config = {
    headers: { Authorization: `Bearer ${getToken()}` },
  };
  return await axiosInstance.patch(`/users/${id}`, config);
};

const getAllUsers = async () => await axiosInstance.get("/users");

const deleteUser = async (id) => {
  const config = {
    headers: { Authorization: `Bearer ${getToken()}` },
  };
  return await axiosInstance.delete(`/users/${id}`, config);
};

export default { Login, Register, getUser, getAllUsers, deleteUser, editUser };
