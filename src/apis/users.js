import axiosInstance from "../config/myAPIs.js";
import { setToken, setInfo, getToken } from "../utils/localStorage.js";

const Login = async (user) => {
  try {
    const response = await axiosInstance.post("/users/login", user);

    const { token, id, firstName, email } = response.data;
    if (response.data && token) {
      setToken(token);
      setInfo(id, firstName, email);
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
    const { token, id, firstName, email } = response.data;
    console.log("response: ", response);
    console.log("data: ", response.data);
    console.log("token: ", token);

    if (response.data && token) {
      setToken(token);
      setInfo(id, firstName, email);
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

const editUser = async (id, data) => {
  const config = {
    headers: { Authorization: `Bearer ${getToken()}` },
  };
  return await axiosInstance.patch(`/users/${id}`, data, config);
};

const getAllUsers = async () => await axiosInstance.get("/users");

const deleteUser = async (id) => await axiosInstance.delete(`/users/${id}`);

const banUser = async (id, currentStatus) => {
  const config = {
    headers: { Authorization: `Bearer ${getToken()}` },
  };
  const newStatus = currentStatus === "active" ? "banned" : "active";
  // const response = await axiosInstance.patch(`/users/${id}`, { status: newStatus }, config)
  // const { message } = response.data
  // console.log("response: ", message);
  return await axiosInstance.patch(`/users/${id}`, { status: newStatus }, config)
};

export default { Login, Register, getUser, getAllUsers, deleteUser, editUser, banUser };
