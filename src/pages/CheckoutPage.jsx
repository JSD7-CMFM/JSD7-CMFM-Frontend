import React, { useEffect, useState } from "react";
import OrderSummary from "../features/checkout/components/OrderSummary";
import Checkout from "../features/checkout/components/Checkout ";
import userApi from "../apis/users.js";
import { getOrderById, updateOrder } from "../apis/orders.js";
import { getCartState, getId, setCartState } from "../utils/localStorage.js";
import { useNavigate } from "react-router-dom";
import ConfirmLeaveModal from "../features/checkout/components/ConfirmLeave.jsx";
import CircularProgress from "@mui/material/CircularProgress";

const CheckoutPage = () => {
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
        const responseUser = await userApi.getUser(userId);
        const responseOrder = await getOrderById(orderId);
        const products = responseOrder.data;
        const fetchedUser = responseUser.data;

        setUser(fetchedUser);
        setCheckout(products);

        setAddress({
          address: fetchedUser.address?.address || "",
          province: fetchedUser.address?.province || "",
          country: fetchedUser.address?.country || "",
          zipcode: fetchedUser.address?.zipcode || "",
        });
        setLoading(true);
        console.log(responseUser.data);
      } catch (error) {
        console.error("Error fetching user:", error);
      }
    };

    fetchData();
  }, [orderId, userId]);

  if (!checkout || !user) {
    return <div>Loading...</div>;
  }

  const onClickPayNow = async () => {
    try {
      console.log(address);
      console.log(typeof address);
      const responseOrder = await updateOrder(orderId, address, "success");
      if (rememberAddress) {
        try {
          const responseUser = await userApi.editUser(
            userId,
            { address: address },
            "update_address"
          );
        } catch (error) {
          throw error;
        }
      }
      if (responseOrder) {
        setCartState("No_cart");
        navigate("/cart");
      }
    } catch (error) {
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
