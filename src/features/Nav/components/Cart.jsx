import React, { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import { getToken, getCartState } from "../../../utils/localStorage.js";
import { useCart } from "../../../hooks/CartContext.jsx";

const Cart = () => {
  const { cart } = useCart();
  const orderId = getCartState();
  const token = getToken();
  return (
    <div className="dropdown dropdown-end  md:flex">
      <Link to="/cart" className="relative">
        <button tabIndex="0" className="btn btn-ghost btn-circle">
          <div className="indicator">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              className="h-8 w-8"
              fill="none"
              viewBox="0 0 24 24"
              stroke="currentColor"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth="2"
                d="M3 3h2l.4 2M7 13h10l4-8H5.4M7 13L5.4 5M7 13l-2.293 2.293c-.63.63-.184 1.707.707 1.707H17m0 0a2 2 0 100 4 2 2 0 000-4zm-8 2a2 2 0 11-4 0 2 2 0 014 0z"
              />
            </svg>
          </div>
        </button>
        {token && orderId && cart.length > 0 ? (
          <h3 className="bg-red-500 rounded-full border-spacing-1 p-1 text-white text-[12px] text-center font-semibold absolute right-0 top-0 w-6 h-6 ">
            {cart.length}
          </h3>
        ) : null}
      </Link>
    </div>
  );
};

export default Cart;
