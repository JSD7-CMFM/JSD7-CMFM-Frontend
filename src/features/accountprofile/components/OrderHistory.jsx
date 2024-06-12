import React from "react";

const OrderHistory = () => {
  return (
    <div id="acc-order">
      <h2 className="mb-8 px-7 text-[19px]">
        Looks like you haven’t placed any orders yet.
      </h2>
      <div className="bg-[#AAD8EE]">
        <img src="images/Learn_More_1.jpg" alt="Learn More" />
        <div className="p-14 text-center">
          <h2 className="text-[22px] mb-5">Find your item</h2>
          <a
            href="#"
            className="py-[10px] px-6 bg-white hover:bg-[#F0EB76] rounded-lg border border-black"
          >
            Button
          </a>
        </div>
      </div>
    </div>
  );
};

export default OrderHistory;
