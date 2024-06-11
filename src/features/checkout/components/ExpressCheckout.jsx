import React from "react";

const ExpressCheckout = () => {
  return (
    <div className="flex justify-between mb-4">
      <button className="bg-purple-600 text-white px-4 py-2 rounded flex-1 mr-2">
        shop <span className="font-bold">Pay</span>
      </button>
      <button className="bg-yellow-400 text-black px-4 py-2 rounded flex-1 ml-2">
        PayPal
      </button>
    </div>
  );
};

export default ExpressCheckout;
