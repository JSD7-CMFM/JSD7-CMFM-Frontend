import React from "react";

const OrderSummary = () => {
  return (
    <div className="max-w-2xl mx-auto bg-white p-8 mt-8 shadow-md rounded-lg md:mt-0 md:flex-1 h-auto md:h-full md:sticky top-0">
      <h2 className="font-semibold mb-4">Order Summary</h2>
      <div className="flex items-center mb-4">
        <img
          src="path/to/product1.png"
          alt="Product 1"
          className="w-12 h-12 rounded mr-4"
        />
        <div className="flex-1">
          <h3 className="font-semibold">Normal Feminine Wipes</h3>
          <p className="text-gray-600 text-sm">Regular 30 ct</p>
        </div>
        <p className="text-gray-800">$10.99</p>
      </div>
      <div className="flex items-center mb-4">
        <img
          src="path/to/product2.png"
          alt="Product 2"
          className="w-12 h-12 rounded mr-4"
        />
        <div className="flex-1">
          <h3 className="font-semibold">Route Package Protection</h3>
        </div>
        <p className="text-gray-800">$1.55</p>
      </div>
      <div className="border-t border-gray-300 pt-4">
        <p className="text-sm text-gray-600 mb-4">
          <i className="fas fa-info-circle mr-1"></i>
          Don't miss out!{" "}
          <a href="#" className="text-blue-600">
            Log in
          </a>{" "}
          to earn and redeem rewards
        </p>
        <div className="flex mb-4">
          <input
            type="text"
            placeholder="Discount code or gift card"
            className="w-full border border-gray-300 px-4 py-2 rounded-l"
          />
          <button className="bg-gray-300 text-gray-700 px-4 py-2 rounded-r">
            Apply
          </button>
        </div>
        <div className="flex justify-between text-gray-800 mb-2">
          <p>Subtotal</p>
          <p>$12.54</p>
        </div>
        <div className="flex justify-between text-gray-800 mb-4">
          <p>Shipping</p>
          <p>Enter shipping address</p>
        </div>
        <div className="flex justify-between text-lg font-semibold text-gray-900">
          <p>Total</p>
          <p>USD $12.54</p>
        </div>
      </div>
    </div>
  );
};

export default OrderSummary;
