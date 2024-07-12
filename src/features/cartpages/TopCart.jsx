import React from "react";
import { FaCartShopping } from "react-icons/fa6";

const TopCart = () => {
  return (
    <div>
      <div className="w-full bg-white p-2 border-b border-black pt-[90px]">
        <div className="pl-5 w-full flex justify-between">
          <h1 className="font-sans font-bold text-[40px] text-black p-5 uppercase">
            {" "}
            My Cart
          </h1>
          <div className="p-5 mt-2 space-x-10 pr-4">
            <FaCartShopping size={30} style={{ color: "#0d0a01" }} />
          </div>
        </div>
      </div>
    </div>
  );
};

export default TopCart;
