import React, { useContext } from "react";
import useUser from "../../../hooks/useUser";

const Users = ({ id }) => {
  const { users, deleteUser, banUser } = useUser()

  const handleBan = (id, currentStatus) => {
    banUser(id, currentStatus);
  };

  return (
    <div className="p-10">
      <h1 className="text-black text-3xl font-bold mb-6">Users</h1>
      <div className="overflow-x-auto">
        <table className="min-w-full bg-white">
          <thead>
            <tr>
              <th className="text-black py-2 border-b text-start">ID</th>
              <th className="text-black py-2 border-b text-start">
                First Name
              </th>
              <th className="text-black py-2 border-b text-start">Last Name</th>
              <th className="text-black py-2 border-b text-start">Email</th>
              <th className="text-black py-2 border-b text-start">Phone</th>
              <th className="text-black py-2 border-b text-start">Status</th>
              <th className="text-black py-2 border-b text-start">Actions</th>
            </tr>
          </thead>
          <tbody>
            {users.map((users) => (
              <tr key={users._id}>
                <td className="text-black py-2 border-b">{users._id}</td>
                <td className="text-black py-2 border-b">{users.firstName}</td>
                <td className="text-black py-2 border-b">{users.lastName}</td>
                <td className="text-black py-2 border-b">{users.email}</td>
                <td className="text-black py-2 border-b">
                  {users.phoneNumber}
                </td>
                <td
                  className={`py-2 border-b ${
                    users.status === "active"
                      ? "text-green-500"
                      : "text-red-500"
                  }`}
                >
                  {users.status}
                </td>
                <td className="py-2 border-b flex space-x-2">
                  <button
                    className="bg-yellow-500 text-white px-2 py-1 rounded w-20"
                    onClick={() => handleBan(users._id, users.status)}
                  >
                    {users.status === "active" ? "Ban" : "Unban"}
                  </button>
                  <button
                    className="bg-red-500 text-white px-2 py-1 rounded w-20"
                    onClick={() => deleteUser(users._id)}
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
