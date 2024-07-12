import React, { useState, useEffect } from "react";
import axiosInstance from "../../config/myAPIs";
import { FaStar } from "react-icons/fa";
import { getCartState } from "../../utils/localStorage.js";
import { FaTrash } from "react-icons/fa";
import CircularProgress from "@mui/material/CircularProgress";
import { updateOrder } from "../../apis/orders.js";
import { Link } from "react-router-dom";

const CartList = ({ cart, UpdateAmount, loading, fetchCart }) => {
  const handleDelete = async (id) => {
    try {
      const cartId = getCartState();
      const updatedCart = cart.filter((product) => product.product_id === id);
      const response = await updateOrder(cartId, updatedCart, "delete");
      fetchCart();
    } catch (error) {
      console.log("error", error);
    }
  };

  if (!loading) {
    return (
      <div className="flex items-center justify-center h-screen">
        <CircularProgress />;
      </div>
    );
  }

  return (
    <div>
      {cart.length === 0 && getCartState() !== "No_cart" ? (
        <div className="pt-5">
          No product in cart, wanna see our TOYS?!!
          <Link to="/productList">
            <button className="ml-4 p-2 bg-blue-300 text-white rounded">
              Go to Product List
            </button>
          </Link>
        </div>
      ) : (
        cart.map((product) => (
          <div key={product._id}>
<<<<<<< HEAD
            <div className="w-full rounded-md m-3 border border-gray-600">
              <button onClick={() => handleDelete(product.product_id)}>
                {" "}
                <LuTrash2 style={{ fontSize: "2rem", color: "pink" }} />
=======
            <div className="w-full rounded-md relative">
              <div className="border-black border rounded-xl bg-white m-2 flex shadow-2xl">
                <button onClick={() => handleDelete(product.product_id)}>
                {" "}
                <FaTrash className="absolute top-2 right-5 " style={{ fontSize: "2rem", color: "pink" }}   />
>>>>>>> 123e02f8933baf3dcddef1895a8bda6290077a2f
              </button>
                <div className="w-full p-1 flex-col relative group">
                  <img
                    src={product.product_img}
                    alt={product.name}
                    className="absolute inset-0 rounded-2xl p-1 object-cover transition-opacity duration-300 opacity-100 group-hover:opacity-0 w-[300px] h-[300px]"
                  />
                  <img
                    src={product.product_img}
                    alt={product.name}
                    className="inset-0 rounded-xl object-cover transition-opacity duration-300 opacity-100 group-hover:opacity-100 w-[300px] h-[300px]"
                  />
                </div>
                <div className="flex-col w-full">
                  <h3 className="font-mono text-black text-[16px] mt-2 ml-2 w-[300px]">
                    {product.name}
                  </h3>
                  <div className="mx-2 flex">
                    {[...Array(5)].map((_, index) => (
                      <FaStar key={index} style={{ color: "#74C0FC" }} />
                    ))}
                    <h3 className="font-mono text-black text-[10px] px-3 m-1 inline-flex">
                      5.0 (99)
                    </h3>
                  </div>
                  <button className="badge mt-2 ml-2 md:p-3 text-[14px]  bg-green-300">
                    {product.category}
                  </button>
                  <div>
                    <div className="flex justify-center text-left">
                      <h2 className="" >Quaility : </h2>
                      <input
                        className="text-black text-center w-[50px] border border-black rounded bg-blue-100 "
                        type="number"
                        value={product.amount || null}
                        onChange={(e) =>
                          UpdateAmount(product.product_id, e.target.value)
                        }
                      />
                    </div>
                  </div>
                  <div className="m-4 p-1 flex justify-between w-[100px]">
                    <h3 className="text-[16px] text-black font-mono p-1">
                      Price
                    </h3>
                    <h3 className="text-[16px] text-black font-mono p-1 px-5">
                      ฿{product.price}
                    </h3>
                  </div>
                </div>
              </div>
            </div>
          </div>
        ))
      )}
    </div>
  );
};

export default CartList;
