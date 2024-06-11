import React from "react";
import ExpressCheckout from "./ExpressCheckout";
import Contact from "./Contact";
import Delivery from "./Delivery";
import Payment from "./Payment";
import BillingAddress from "./BillingAddress";
import RememberMe from "./RememberMe";
import PayPal from "./PayPal";
import PayNowButton from "./PayNowButton";

const Checkout = () => {
  return (
    <div className="max-w-2xl mx-auto bg-white p-8 shadow-md rounded-lg md:flex-1">
      <ExpressCheckout />
      <div className="text-center mb-4">
        <span className="text-gray-500">OR</span>
      </div>
      <Contact />
      <Delivery />
      <Payment />
      <BillingAddress />
      <PayPal />
      <RememberMe />
      <PayNowButton />
    </div>
  );
};

export default Checkout;
