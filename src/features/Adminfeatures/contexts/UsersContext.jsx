import React, { createContext, useState, useEffect } from "react";
import usersAPI from "../../../apis/users";

const UserContext = createContext();

export default function UsersContextProvider({ children }) {
  const [users, setUsers] = useState([]);
  // const navigate = useNavigate();

  const handleLoading = async() => {
    const response = await usersAPI.getAllUsers()
    setUsers(response.data.data);
    
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
   
  return (
    <UserContext.Provider value={{ users, deleteUser }}>
      {children}
    </UserContext.Provider>
  );
}

export { UserContext };