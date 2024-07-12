// src/components/Sidebar.js
import React from "react";

const Sidebar = ({ setCurrentPage }) => {
  return (
    <div className="w-64 bg-gray-800 text-white flex flex-col">
      <div className="p-4 text-2xl font-bold">Admin Dashboard</div>
      <nav className="mt-10 flex flex-col">
        <button
          className="py-2 px-4 hover:bg-gray-700 text-left"
          onClick={() => setCurrentPage("dashboard")}
        >
          Dashboard
        </button>
        <button
          className="py-2 px-4 hover:bg-gray-700 text-left"
          onClick={() => setCurrentPage("users")}
        >
          Users
        </button>
        <button
          className="py-2 px-4 hover:bg-gray-700 text-left"
          onClick={() => setCurrentPage("products")}
        >
          Products Management
        </button>
        <button
          className="py-2 px-4 hover:bg-gray-700 text-left"
          onClick={() => setCurrentPage("orders")}
        >
          Orders Management
        </button>
        <button className="py-2 px-4 hover:bg-gray-700 text-left">
          Settings
        </button>
      </nav>
    </div>
  );
};

export default Sidebar;
