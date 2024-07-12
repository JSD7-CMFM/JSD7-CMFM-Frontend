import React from "react";

const PayNowButton = ({ onClickPayNow }) => {
  return (
    <button
      className="w-full bg-blue-600 text-white px-4 py-2 rounded"
      onClick={onClickPayNow}
    >
      Pay now
    </button>
  );
};

export default PayNowButton;
