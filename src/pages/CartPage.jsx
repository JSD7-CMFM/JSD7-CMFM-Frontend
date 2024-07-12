import React, { useState, useEffect } from "react";
import TopCart from "../features/cartpages/TopCart";
import SelectCart from "../features/cartpages/SelectCart";
import TotalCart from "../features/cartpages/TotalCart";
import { getOrderById } from "../apis/orders.js";
import { getCartState } from "../utils/localStorage.js";
import { updateOrder } from "../apis/orders.js";
import { useNavigate } from "react-router-dom";

const CartPage = () => {
  const [cart, setCart] = useState([]);
  const [loading, setLoading] = useState(false);
  const orderId = getCartState();
  const navigate = useNavigate();

  const fetchCart = async () => {
    if (orderId === "No_cart") {
      return;
    }
    try {
      const response = await getOrderById(orderId);
      const products = response.data.cart_products;
      setCart(products);
      setLoading(true);
    } catch (error) {
      console.error("Error fetching cart:", error);
      setLoading(true);
    }
  };
  useEffect(() => {
    fetchCart();
  }, []);

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
    const response = await updateOrder(orderId, order, "checkout");
    if (response) {
      navigate("/checkout");
    }
    return response;
  };

  return (
    <div className="md:px-[100px]">
      <TopCart />
      <div className="flex flex-col sm:flex-col md:flex-row w-auto">
        <div className="w-full md:w-2/3">
          <SelectCart
            cart={cart}
            UpdateAmount={UpdateAmount}
            loading={loading}
            fetchCart={fetchCart}
          />
        </div>
        <div className="w-full md:w-1/2 bg-gray-100">
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
