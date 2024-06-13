// src/components/Users.jsx
import React, { useState } from "react";
// import { users as mockUsers } from "../../data/๊UserData";
import { users as mockUsers } from "../../../data/UserData";

const Users = () => {
  const [users, setUsers] = useState(mockUsers);

  const handleBan = (id) => {
    setUsers((prevUsers) =>
      prevUsers.map((user) =>
        user.id === id
          ? {
              ...user,
              status: user.status === "available" ? "banned" : "available",
            }
          : user
      )
    );
  };

  const handleDelete = (id) => {
    setUsers((prevUsers) => prevUsers.filter((user) => user.id !== id));
  };

  return (
    <div className="p-10">
      <h1 className="text-black text-3xl font-bold mb-6">Users</h1>
      <div className="overflow-x-auto">
        <table className="min-w-full bg-white">
          <thead>
            <tr>
              <th className="text-black py-2 px-4 border-b">ID</th>
              <th className="text-black py-2 px-4 border-b">First Name</th>
              <th className="text-black py-2 px-4 border-b">Last Name</th>
              <th className="text-black py-2 px-4 border-b">Email</th>
              <th className="text-black py-2 px-4 border-b">Phone</th>
              <th className="text-black py-2 px-4 border-b">Address</th>
              <th className="text-black py-2 px-4 border-b">Status</th>
              <th className="text-black py-2 px-4 border-b">Actions</th>
            </tr>
          </thead>
          <tbody>
            {users.map((user) => (
              <tr key={user.id}>
                <td className="text-black py-2 px-4 border-b">{user.id}</td>
                <td className="text-black py-2 px-4 border-b">{user.firstName}</td>
                <td className="text-black py-2 px-4 border-b">{user.lastName}</td>
                <td className="text-black py-2 px-4 border-b">{user.email}</td>
                <td className="text-black py-2 px-4 border-b">{user.phone}</td>
                <td className="text-black py-2 px-4 border-b">{user.address}</td>
                <td
                  className={`py-2 px-4 border-b ${
                    user.status === "available"
                      ? "text-green-500"
                      : "text-red-500"
                  }`}
                >
                  {user.status}
                </td>
                <td className="py-2 px-4 border-b flex space-x-2">
                  <button
                    className="bg-yellow-500 text-white px-2 py-1 rounded w-20"
                    onClick={() => handleBan(user.id)}
                  >
                    {user.status === "available" ? "Ban" : "Unban"}
                  </button>
                  <button
                    className="bg-red-500 text-white px-2 py-1 rounded w-20"
                    onClick={() => handleDelete(user.id)}
                  >
                    Delete
                  </button>
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </div>
  );
};

export default Users;
