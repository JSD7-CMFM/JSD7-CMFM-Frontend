import React, { useState, useEffect } from "react";
import TopCart from "../features/cartpages/TopCart";
import SelectCart from "../features/cartpages/SelectCart";
import TotalCart from "../features/cartpages/TotalCart";
import { getOrderById } from "../apis/orders.js";
import { getCartState, getToken } from "../utils/localStorage.js";
import { updateOrder } from "../apis/orders.js";
import { useNavigate } from "react-router-dom";
import CircularProgress from "@mui/material/CircularProgress";
import { toast } from "react-toastify";

const CartPage = () => {
  const [cart, setCart] = useState([]);
  const [loading, setLoading] = useState(false);
  const orderId = getCartState();
  const navigate = useNavigate();
  const token = getToken();

  const fetchCart = async () => {
    if (orderId === "No_cart" || !token) {
      setLoading(true);
      return;
    }
    try {
      setLoading(false);
      const response = await getOrderById(orderId);
      const products = response.data.cart_products;
      setCart(products);
      setLoading(true);
    } catch (error) {
      toast.error("fetching data error", error);
      setLoading(true);
    }
  };

  useEffect(() => {
    fetchCart();
  }, []);

  if (!loading) {
    return (
      <div className="flex items-center justify-center h-screen">
        <CircularProgress />
      </div>
    );
  }
  const UpdateAmount = (id, amount) => {
    if (amount < 1) {
      return;
    }
    const updatedCart = cart.map((product) => {
      if (product.product_id === id) {
        return { ...product, amount: amount };
      }
      return product;
    });
    setCart(updatedCart);
  };
  const totalPrice = cart.reduce((acc, curr) => {
    return acc + curr.price * curr.amount;
  }, 0);

  const checkoutHandler = async () => {
    const order = {
      cart_products: cart,
      total_price: totalPrice,
    };
    try {
      const response = await updateOrder(orderId, order, "checkout");
      if (response) {
        navigate("/checkout");
      }
    } catch (error) {
      toast.error(error.response.data.message);
    }
  };

  return (
    <div className="md:px-[100px]">
      <TopCart cart={cart} UpdateAmount={UpdateAmount} />
      <div className="flex flex-col sm:flex-col md:flex-row w-auto">
        <div className="w-full md:w-2/3 pb-[500px]">
          <SelectCart
            cart={cart}
            UpdateAmount={UpdateAmount}
            loading={loading}
            fetchCart={fetchCart}
          />
        </div>
        <div className="w-full md:w-1/2 bg-gray-100 ">
          <TotalCart
            cart={cart}
            totalPrice={totalPrice}
            checkoutHandler={checkoutHandler}
          />
        </div>
      </div>
    </div>
  );
};

export default CartPage;
