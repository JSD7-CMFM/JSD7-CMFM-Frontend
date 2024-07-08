import React, { createContext, useState, useEffect } from "react";
import usersAPI from "../../../apis/users";

const UserContext = createContext();

export default function UsersContextProvider({ children }) {
  const [users, setUsers] = useState([]);

  const handleLoading = async () => {
    try {
      const response = await usersAPI.getAllUsers();
      setUsers(response.data.data);
    } catch (error) {
      console.log(error);
    }
  };

  useEffect(() => {
    handleLoading();
  }, []);

  const deleteUser = async (id) => {
    try {
      await usersAPI.deleteUser(id);
      handleLoading();
    } catch (error) {
      console.log(error);
    }
  };

  const banUser = async (id, currentStatus) => {
    try {
      await usersAPI.banUser(id, currentStatus);
      handleLoading();
    } catch (error) {
      console.log(error);
    }
  };

  return (
    <UserContext.Provider value={{ users, deleteUser, banUser }}>
      {children}
    </UserContext.Provider>
  );
}

export { UserContext };
