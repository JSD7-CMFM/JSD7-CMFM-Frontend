import React, { useEffect, useState } from "react";
import OrderSummary from "../features/checkout/components/OrderSummary";
import Checkout from "../features/checkout/components/Checkout ";
import appUserAPI from "../apis/users.js";
import { getOrderById, updateOrder } from "../apis/orders.js";
import sendMail from "../apis/mail.js";
import { getCartState, getId, setCartState } from "../utils/localStorage.js";
import { useNavigate } from "react-router-dom";
import ConfirmLeaveModal from "../features/checkout/components/ConfirmLeave.jsx";
import CircularProgress from "@mui/material/CircularProgress";
import appProductAPI from "../apis/products.js";
import { toast } from "react-toastify";
import { useCart } from "../hooks/CartContext.jsx";

const CheckoutPage = () => {
  const { fetchCart } = useCart();
  const [checkout, setCheckout] = useState(false);
  const navigate = useNavigate();
  const [user, setUser] = useState(null);
  const [rememberAddress, setRememberAddress] = useState(false);
  const [showModal, setShowModal] = useState(false);
  const [loading, setLoading] = useState(false);
  const [address, setAddress] = useState({
    address: "",
    province: "",
    country: "",
    zipcode: "",
  });
  const orderId = getCartState();
  const userId = getId();

  useEffect(() => {
    const fetchData = async () => {
      if (orderId === "No_cart") {
        return;
      }
      try {
        setLoading(false);
        const responseUser = await appUserAPI.getUser(userId);
        const responseOrder = await getOrderById(orderId);
        const products = responseOrder.data;
        const fetchedUser = responseUser.data;
        setUser(fetchedUser);
        setCheckout(products);
        setAddress({
          address: fetchedUser.data.address?.address || "",
          province: fetchedUser.data.address?.province || "",
          country: fetchedUser.data.address?.country || "",
          zipcode: fetchedUser.data.address?.zipcode || "",
        });
        setLoading(true);
      } catch (error) {
        toast.error("Error fetching user:", error);
      }
    };

    fetchData();
  }, [orderId, userId]);

  if (!checkout || !user) {
    return (
      <div className="flex items-center justify-center h-screen">
        <CircularProgress />
      </div>
    );
  }

  const onClickPayNow = async () => {
    if (
      address.address === "" ||
      address.province === "" ||
      address.country === "" ||
      address.zipcode === ""
    ) {
      toast.error("Please add address before checkout!");
      return;
    }
    try {
      const responseOrder = await updateOrder(orderId, address, "success");
      await Promise.all(
        checkout.cart_products.map(async (product) => {
          const quantity = { quantity: product.stock - product.amount };
          await appProductAPI.editProduct(
            product.product_id,
            quantity,
            "checkOut"
          );
        })
      );
      await sendMail(orderId);
      if (rememberAddress) {
        try {
          const responseUser = await appUserAPI.editUser(
            userId,
            { address: address },
            "update_address"
          );
        } catch (error) {
          toast.error("Error updating address:", error);
          throw error;
        }
      }
      if (responseOrder) {
        toast.success("Order created successfully");
        setCartState("No_cart");
        fetchCart();
        navigate("/cart");
      }
    } catch (error) {
      toast.error("Error creating order:", error);
      throw error;
    }
  };
  const handleBackClick = () => {
    setShowModal(true);
  };

  const handleConfirmLeave = () => {
    setShowModal(false);
    navigate("/cart");
  };

  const handleCloseModal = () => {
    setShowModal(false);
  };

  if (!loading) {
    return (
      <div className="flex items-center justify-center h-screen">
        <CircularProgress />
      </div>
    );
  }
  return (
    <div className="bg-gray-100 py-10 pt-[150px]">
      <div className="max-w-6xl mx-auto px-4 md:flex md:space-x-8">
        <button
          onClick={handleBackClick}
          className="absolute top-[85px] left-0 m-4 p-2 bg-blue-500 text-white rounded"
        >
          Back to Cart
        </button>
        <OrderSummary checkout={checkout} />
        <Checkout
          user={user}
          setAddress={setAddress}
          address={address}
          onClickPayNow={onClickPayNow}
          setRememberAddress={setRememberAddress}
          rememberAddress={rememberAddress}
        />
      </div>
      <ConfirmLeaveModal
        show={showModal}
        onClose={handleCloseModal}
        onConfirm={handleConfirmLeave}
      />
    </div>
  );
};

export default CheckoutPage;
