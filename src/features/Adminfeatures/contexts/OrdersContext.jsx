import React, { createContext, useState, useEffect } from "react";
import ordersAPI from "../../../apis/orders";

const OrderContext = createContext();

export default function OrdersContextProvider({ children }) {
  const [orders, setOrders] = useState([]);

  const handleLoading = async () => {
    try {
      const response = await ordersAPI.getAllOrders();
      setOrders(response.data);
    } catch (error) {
      console.error("Error loading orders:", error);
    }
  };

  useEffect(() => {
    handleLoading();
  }, []);

  const editOrder = async (id, data) => {
    try {
      await ordersAPI.editOrder(id, data);
      handleLoading();
    } catch (error) {
      throw error;
    }
  };

  return (
    <OrderContext.Provider value={{ orders, setOrders, editOrder }}>
      {children}
    </OrderContext.Provider>
  );
}

export { OrderContext };
