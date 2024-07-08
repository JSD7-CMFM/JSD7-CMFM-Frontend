// src/pages/DashboardPage.js
import React from "react";
import Sidebar from "../../features/Adminfeatures/SideBar";
import Dashboard from "../../features/Adminfeatures/Dashboard/Dashboard";
import Users from "../../features/Adminfeatures/Users/User";
import Products from "../../features/Adminfeatures/Products/Products";
import { useState, useContext } from "react";


const DashboardPage = () => {
  const [currentPage, setCurrentPage] = useState("dashboard");
  return (
    <>
      <div className="min-h-screen flex bg-gray-100">
        <Sidebar setCurrentPage={setCurrentPage} />
        <div className="flex-1 p-10">
          {currentPage === "dashboard" && <Dashboard />}
          {currentPage === "users" && <Users />}
          {currentPage === "products" && <Products />}
        </div>
      </div>
    </>
  );
};

export default DashboardPage;
