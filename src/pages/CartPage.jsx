import React, { useState } from "react";
import TopCart from "../features/cartpages/TopCart";
import SelectCart from "../features/cartpages/SelectCart";
import TotalCart from "../features/cartpages/TotalCart";

const CartPage = () => {
  const [price, setPrice] = useState(0)
  
  return (
    <div className="md:px-[100px]">
      <TopCart />
      <div className="flex flex-col sm:flex-col md:flex-row w-auto">
        <div className="w-full md:w-2/3">
          <SelectCart setTotalPrice={setPrice} />
        </div>
        <div className="w-full md:w-1/2 bg-gray-100">
          <TotalCart totalPrice={price} />
        </div>
      </div>
    </div>
  );
};

export default CartPage;
