import React, { createContext, useContext, useState, useEffect } from "react";
import { getOrderById } from "../apis/orders.js";
import { getCartState } from "../utils/localStorage.js";
import { toast } from "react-toastify";
import { getToken } from "../utils/localStorage.js";

const CartContext = createContext();
const isTokenValid = (token) => {
  if (!token) return false;
  return true;
};

export const CartProvider = ({ children }) => {
  const [cart, setCart] = useState([]);

  const fetchCart = async () => {
    const token = getToken();
    if (!isTokenValid(token)) {
      toast.error("Invalid token. Please login again.");
      setCart([]);
      return;
    }
    const orderId = getCartState();
    if (orderId === "No_cart") {
      setCart([]);
      return;
    }
    try {
      const response = await getOrderById(orderId);
      const products = response.data.cart_products;
      setCart(products);
    } catch (error) {
      toast.error("fetching data error", error);
    }
  };

  useEffect(() => {
    fetchCart();
  }, []);
  return (
    <CartContext.Provider value={{ cart, setCart, fetchCart }}>
      {children}
    </CartContext.Provider>
  );
};

export const useCart = () => useContext(CartContext);
