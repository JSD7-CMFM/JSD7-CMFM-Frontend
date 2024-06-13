import React, { useState } from "react";
import AccountDetails from "../features/accountprofile/components/AccountDetails";
import OrderHistory from "../features/accountprofile/components/OrderHistory";
import Addresses from "../features/accountprofile/components/Addresses";

const AccountPageContainer = () => {
  const [activeSection, setActiveSection] = useState("acc-info");

  const showSection = (sectionId) => {
    setActiveSection(sectionId);
  };

  return (
    <section id="my-acc" className="bg-[#F0EB76] pt-8 px-3 pb-4">
      <div
        id="acc-container"
        className="md:pb-12 md:pt-[140px] md:flex md:justify-between md:px-9"
      >
        <div
          id="acc-nav"
          className="md:pr-9 md:flex md:flex-col md:justify-between"
        >
          <div>
            <h1 className="mb-8 text-2xl md:text-4xl whitespace-nowrap">
              My Account
            </h1>
            <p
              className="mb-2 hover:underline cursor-pointer"
              onClick={() => showSection("acc-info")}
            >
              ACCOUNT DETAILS
            </p>
            <p
              className="mb-2 hover:underline cursor-pointer"
              onClick={() => showSection("acc-order")}
            >
              ORDER HISTORY
            </p>
            <p
              className="mb-2 hover:underline cursor-pointer"
              onClick={() => showSection("acc-address")}
            >
              ADDRESSES
            </p>
          </div>
          <p className="mb-2 hover:underline cursor-pointer">LOGOUT</p>
        </div>
        <div
          id="acc-display"
          className="bg-white border border-black rounded min-h-[510px] pt-8 md:w-[638px]"
        >
          {activeSection === "acc-info" && <AccountDetails />}
          {activeSection === "acc-order" && <OrderHistory />}
          {activeSection === "acc-address" && <Addresses />}
        </div>
      </div>
    </section>
  );
};

export default AccountPageContainer;
