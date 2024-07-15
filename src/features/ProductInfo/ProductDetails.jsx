import { useState } from "react";
import React from "react";
import DetailItem from "./DetailItem";
import { useParams } from "react-router-dom";
import axiosInstance from "../../config/myAPIs"; // Ensure axiosInstance is imported
import { getCartState, getId } from "../../utils/localStorage.js";
import { createOrder, updateOrder } from "../../apis/orders.js";
import { Link } from "react-router-dom";
import { FaTimes } from "react-icons/fa";
import { FaPlusCircle } from "react-icons/fa";
import { MdGames } from "react-icons/md";
import { FaMinusCircle } from "react-icons/fa";
import ModalAddToCart from "./ModalAddToCart.jsx";

const ProductDetails = ({ products }) => {
  const [loading, setLoading] = useState(true);
  const [quantity2, setQuantity2] = useState(1);
  const [open, setOpen] = useState(false);

  const handleOpen = () => setOpen(true);
  const handleClose = () => setOpen(false);

  const handleSubmit = async (event) => {
    event.preventDefault();
    if (!products) {
      console.error("product is null");
      setLoading(false);
      return;
    }

    try {
      const userId = getId();
      // Create the new cart product object
      const newCartProduct = {
        product_id: products._id,
        amount: quantity2,
        name: products.name,
        category: products.category,
        description: products.description,
        price: products.price,
        product_img: products.product_img,
        type: products.type,
        stock: products.quantity,
      };

      const orderId = getCartState();
      console.log("orderId:", orderId);
      if (orderId === "No_cart") {
        const response = await createOrder({
          user_id: userId,
          cart_products: [newCartProduct],
        });
        console.log("Order created successfully:", response.data);
      } else {
        const response = await updateOrder(
          orderId,
          newCartProduct,
          "addProduct"
        );
        console.log("Order update successfully:", response.data);
      }
    } catch (error) {
      console.error("Error updating order:", error);
      if (error.response) {
        console.error("Server responded with:", error.response.data);
      }
    }
  };

  const incrementQuantity2 = () => {
    setQuantity2((prevQuantity) => prevQuantity + 1);
  };

  const decrementQuantity2 = () => {
    setQuantity2((prevQuantity) => (prevQuantity > 1 ? prevQuantity - 1 : 1));
  };

  if (!products) {
    if (!loading) {
      return (
        <div className="flex items-center justify-center h-screen">
          <CircularProgress />
        </div>
      );
    }
  }

  const totalPrice2 = (quantity2 * products.price).toFixed(2);

  return (
    <div className="flex justify-center items-center md:w-[700px] md:h-auto md:m-4  bg-white py-5 mr--10 rounded-3xl border  border-gray-400 shadow-xl">
      <div className=" w-1/2 h-auto m-10  md:w-full">
        <div className=" text-3xl md:text-xl md:font-bold pb-3 ">
          <h1 className="text-[24px] font-semibold">{products.name}</h1>
        </div>
        <div className="pb-4">
          <h1 className="text-[20px]">{products.description}</h1>
        </div>

        <div className="pb-2 text-[20px] font-medium justify-center">
          {/* <h2>SINGLE</h2> */}
        </div>
        <DetailItem
          imgSrc={products.product_img}
          type={products.type}
          description={products.description}
          category={products.category}
        />
        <div className="mt-6 mb-6 p-1 flex justify-between items-center w-full">
          <div className="flex items-center">
            <button
              onClick={decrementQuantity2}
              className="hover:shadow-xl rounded-full"
            >
              <FaMinusCircle
                size="40"
                style={{ color: "rgb(251, 100, 100) " }}
              />
            </button>
            <span className="mx-4 text-[30px]">{quantity2}</span>
            <button
              onClick={incrementQuantity2}
              className="hover:shadow-xl rounded-full"
            >
              <FaPlusCircle size="40" style={{ color: "rgb(77, 184, 88)" }} />
            </button>
          </div>
          <div className="font-semibold text-[24px]">Total: ฿{totalPrice2}</div>
        </div>
        <div className="flex justify-center">
          <form onSubmit={handleSubmit}>
            <button
              className="btn btn-l rounded-xl btn-outline bg-blue-200 hover:shadow-md hover:bg-blue-200 text-[18px]  text-center text-black p-3 space-x-20 shadow-xl"
              onClick={handleOpen} // Open modal on button click
            >
              Add to cart
            </button>
            <ModalAddToCart open={open} handleClose={handleClose} />
          </form>
        </div>
      </div>
    </div>
  );
};

export default ProductDetails;
