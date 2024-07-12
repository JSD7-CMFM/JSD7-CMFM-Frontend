import React from "react";
import { Outlet } from "react-router-dom";
import Navbar from "./Navbar";
import Footer from "./Footer";
import ChatBot from "../features/chatbot/ChatBot";

export default function Container() {
  return (
    <>
        <Navbar />
        <Outlet />
        <ChatBot />
        <Footer />
    </>
  );
}
