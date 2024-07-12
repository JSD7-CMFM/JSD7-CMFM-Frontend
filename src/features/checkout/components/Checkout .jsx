import React from "react";
import Contact from "./Contact";
import Delivery from "./Delivery";
import Payment from "./Payment";
import PayNowButton from "./PayNowButton";

const Checkout = ({
  user,
  setAddress,
  address,
  onClickPayNow,
  setRememberAddress,
  rememberAddress,
}) => {
  return (
    <div className="max-w-2xl mx-auto bg-white p-8 shadow-md rounded-lg md:flex-1">
      <Contact user={user} />
      <Delivery
        setAddress={setAddress}
        address={address}
        setRememberAddress={setRememberAddress}
      />
      <Payment />
      <PayNowButton
        onClickPayNow={onClickPayNow}
        setRememberAddress={setRememberAddress}
        rememberAddress={rememberAddress}
      />
    </div>
  );
};

export default Checkout;
