import React from "react";

const Payment = () => {
  return (
    <div className="mb-6">
      <h2 className="font-semibold mb-2">Payment</h2>
      <div className="flex items-center mb-2">
        <label htmlFor="creditCard" className="text-sm text-gray-600">
          Credit card
        </label>
      </div>
      <input
        type="text"
        placeholder="Card number"
        className="w-full border border-gray-300 px-4 py-2 mb-2 rounded"
      />
      <div className="flex mb-2">
        <input
          type="text"
          placeholder="Expiration date (MM / YY)"
          className="w-1/2 border border-gray-300 px-4 py-2 mr-2 rounded"
        />
        <input
          type="text"
          placeholder="Security code"
          className="w-1/2 border border-gray-300 px-4 py-2 rounded"
        />
      </div>
      <input
        type="text"
        placeholder="Name on card"
        className="w-full border border-gray-300 px-4 py-2 mb-2 rounded"
      />
    </div>
  );
};

export default Payment;
