import React, { createContext, useContext, useState, useEffect } from "react";
import { getCartState, getToken } from "../utils/localStorage";
import { getOrderById } from "../apis/orders";

const CartContext = createContext();

export const CartProvider = ({ children }) => {
  const [cart, setCart] = useState([]);
  const [loading, setLoading] = useState(true);
  const orderId = getCartState();
  const token = getToken();

  useEffect(() => {
    const fetchCart = async () => {
      if (orderId === "No_cart" || !token) {
        setLoading(false);
        return;
      }
      try {
        const response = await getOrderById(orderId);
        const products = response.data.cart_products;
        setCart(products);
        setLoading(false);
      } catch (error) {
        console.error("Error fetching cart:", error);
        setLoading(false);
      }
    };
    fetchCart();
  }, [orderId, token]);

  const updateCart = (newCart) => {
    setCart(newCart);
  };

  return (
    <CartContext.Provider value={{ cart, setCart: updateCart, loading }}>
      {children}
    </CartContext.Provider>
  );
};

export const useCart = () => {
  return useContext(CartContext);
};
