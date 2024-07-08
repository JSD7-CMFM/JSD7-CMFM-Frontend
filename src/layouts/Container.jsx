import React from "react";
import { Outlet } from "react-router-dom";
import Navbar from "./Navbar";
import Footer from "./Footer";

export default function Container() {
  return (
    <>
        <Navbar />
        <Outlet />
        <Footer />
    </>
  );
}
