import React from "react";
import TopCart from "../features/cartpages/TopCart";
import SelectCart from "../features/cartpages/SelectCart";
import TotalCart from "../features/cartpages/TotalCart";

const CartPage = () => {
  return (
    <div>
      <TopCart />
      <div className="flex flex-col sm:flex-col md:flex-row w-auto">
        <div className="w-full md:w-2/3">
          <SelectCart />
        </div>
        <div className="w-full md:w-1/2 bg-gray-100">
          <TotalCart />
        </div>
      </div>
    </div>
  );
};

export default CartPage;
