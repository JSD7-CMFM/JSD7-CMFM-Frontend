import React, { useEffect, useState } from "react";
import { FaCartShopping } from "react-icons/fa6";


const TopCart = ({ cart }) => {

  return (
    <div>
      <div className="w-full bg-white p-2 border-b border-black pt-[90px]">
        <div className="pl-5 w-full flex justify-between">
          <h1 className="font-sans font-bold text-[40px] text-black p-5 uppercase">
            {" "}
            My Cart
          </h1>
          <div className="p-5 mt-2 space-x-10 pr-4 relative">
            <FaCartShopping size={50} style={{ color: "#0d0a01" }} />
            <h3 className="bg-red-500 rounded-full border-spacing-1 p-1 text-white text-[12px] text-center font-semibold absolute right-2 top-3 w-6 h-6 ">{cart.length}</h3>
          </div>
        </div>
      </div>
    </div>
  );
};

export default TopCart;

