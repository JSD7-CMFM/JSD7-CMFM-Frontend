import { useContext } from "react";
import { OrderContext } from "../features/Adminfeatures/contexts/OrdersContext";

export default function useOrders() {
  return useContext(OrderContext);

}
