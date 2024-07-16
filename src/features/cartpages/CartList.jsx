import React, { useState, useEffect } from "react";
import { FaStar } from "react-icons/fa";
import { getCartState, setCartQuantity } from "../../utils/localStorage.js";
import { RiDeleteBack2Fill } from "react-icons/ri";
import CircularProgress from "@mui/material/CircularProgress";
import { updateOrder } from "../../apis/orders.js";
import { RiShoppingBag4Fill } from "react-icons/ri";
import { Link } from "react-router-dom";
import { toast } from "react-toastify";

const CartList = ({ cart, UpdateAmount, loading, fetchCart }) => {
  const handleDelete = async (id) => {
    try {
      const cartId = getCartState();
      const updatedCart = cart.filter((product) => product.product_id === id);
      const response = await updateOrder(cartId, updatedCart, "delete");
      fetchCart();
      setCartQuantity(updatedCart.length);
      if (response) {
        toast.success("Product deleted from cart");
      }
    } catch (error) {
      toast.error("Error deleting product from cart");
      toast.error(error.response.data.message);
    }
  };
  const handleInput = (id, value, stock) => {
    if (value > stock) {
      value = stock;
    } else if (value < 1) {
      value = 1;
    }
    UpdateAmount(id, value);
  };
  const incrementQuantity = (id, currentQuantity, stock) => {
    if (currentQuantity < stock) {
      UpdateAmount(id, currentQuantity + 1);
    }
  };

  const decrementQuantity = (id, currentQuantity) => {
    if (currentQuantity > 1) {
      UpdateAmount(id, currentQuantity - 1);
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
      {cart.length === 0 || getCartState() === "No_cart" ? (
        <div className="pt-5 p-4 ">
          <div className="flex items-center">
            <h1 className="text-[20px] item center">
              Add something to make me happy !!
            </h1>
            <Link to="/productList">
              <button className="ml-4 p-3 font-semibold rounded-xl border shadow-sm bg-gray-200">
                <div className="flex text-black text-[22px] items-center w-auto h-auto ">
                  <h1>Buy Now</h1>
                  <RiShoppingBag4Fill size="40" style={{ color: "skyblue" }} />
                </div>
              </button>
            </Link>
          </div>
          <div className="flex justify-center ">
            <img src="/Empty_cart.png" className="flex justify-center w-full" />
          </div>
        </div>
      ) : (
        cart.map((product) => (
          <div key={product._id}>
            <div className="w-full rounded-md relative">
              <div className="border-gray-200 border rounded-xl bg-white m-2 p-2  flex shadow-2xl">
                <button onClick={() => handleDelete(product.product_id)}>
                  {" "}
                  <RiDeleteBack2Fill
                    className="absolute top-2 right-5 "
                    style={{ fontSize: "2rem", color: "pink" }}
                  />
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
                  <button className="badge mt-2 ml-2 md:p-3 text-[14px]  bg-pink-300">
                    {product.type} Type
                  </button>
                  <button className="badge mt-2 ml-2 md:p-3 text-[14px]  bg-green-300">
                    {product.category}
                  </button>
                  <div>
                    <div className="flex-start">
                      <div className="flex justify-start text-left pl-5 py-5">
                        <h2 className="text-left flex items-center mr-5">
                          Quantity :{" "}
                        </h2>
                        <button
                          type="button"
                          onClick={() =>
                            decrementQuantity(
                              product.product_id,
                              product.amount
                            )
                          }
                          className="decrement-btn p-2 bg-red-200 font-bold text-xl border border-black rounded"
                        >
                          -
                        </button>
                        <input
                          className="text-black text-center w-[50px] border-y-2 border-slate-500 bg-white"
                          type="text"
                          value={product.amount || ""}
                          onChange={(e) =>
                            handleInput(
                              product.product_id,
                              Number(e.target.value),
                              product.stock
                            )
                          }
                          onBlur={(e) =>
                            handleInput(
                              product.product_id,
                              Number(e.target.value),
                              product.stock
                            )
                          }
                        />
                        <button
                          type="button"
                          onClick={() =>
                            incrementQuantity(
                              product.product_id,
                              product.amount,
                              product.stock
                            )
                          }
                          className="increment-btn p-2 bg-green-200 font-bold text-xl border border-black rounded"
                        >
                          +
                        </button>
                      </div>
                      <button className="ml-5 text-center">
                        Stock: {product.stock - product.amount}
                      </button>
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
