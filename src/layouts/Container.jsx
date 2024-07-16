import React from "react";
import { Outlet } from "react-router-dom";
import Navbar from "./Navbar";
import Footer from "./Footer";
import ChatBot from "../features/chatbot/ChatBot";
import { CartProvider } from "../hooks/CartContext.jsx";

export default function Container() {
  return (
    <>
      <CartProvider>
        <Navbar />
        <Outlet />
        <ChatBot />
        <Footer />
      </CartProvider>
    </>
  );
}
