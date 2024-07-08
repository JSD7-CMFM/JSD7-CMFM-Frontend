import React, { useState } from "react";
import AccountDetails from "../features/accountprofile/components/AccountDetails";
import OrderHistory from "../features/accountprofile/components/OrderHistory";
import Addresses from "../features/accountprofile/components/Addresses";
import Editdata from "../features/accountprofile/components/EditData.jsx";

const AccountPageContainer = () => {
  const [activeSection, setActiveSection] = useState("acc-info");
  const [user, setUser] = useState(null);

  const showSection = (sectionId) => {
    setActiveSection(sectionId);
  };

  return (
    <section id="my-acc" className="bg-[#F0EB76] px-3 pb-4 h-screen pt-[90px]">
      <div
        id="acc-container"
        className="md:pb-12 md:pt-[90px] md:flex md:justify-center md:px-9"
      >
        <div
          id="acc-nav"
          className="md:pr-20 md: md:flex md:flex-col md:justify-between"
        >
          <div className="flex flex-col h-full">
            <h1 className="pt-10 md:pt-0 mb-8 text-2xl md:text-4xl whitespace-nowrap text-center">
              My Account
            </h1>
            <div className="flex justify-around md:justify-start md:flex-col md:h-full">
              <p
                className="mb-4 hover:underline cursor-pointer"
                onClick={() => showSection("acc-info")}
              >
                ACCOUNT DETAILS
              </p>
              <p
                className="mb-4 hover:underline cursor-pointer"
                onClick={() => showSection("acc-order")}
              >
                ORDER HISTORY
              </p>
              <p
                className="mb-4 hover:underline cursor-pointer"
                onClick={() => showSection("acc-address")}
              >
                ADDRESSES
              </p>
              <p className="mb-2 hover:underline hover:text-red-500 cursor-pointer md:mt-11">
                LOGOUT
              </p>
            </div>
          </div>
        </div>
        <div
          id="acc-display"
          className="bg-white border border-black rounded min-h-[450px] md:min-h-[510px] pt-8 md:w-[638px]"
        >
          {activeSection === "acc-info" && (
            <AccountDetails
              setActiveSection={setActiveSection}
              setUserGlobal={setUser}
            />
          )}
          {activeSection === "acc-order" && <OrderHistory />}
          {activeSection === "acc-address" && <Addresses />}
          {activeSection === "acc-edit" && (
            <Editdata setActiveSection={setActiveSection} user={user} />
          )}
        </div>
      </div>
    </section>
  );
};

export default AccountPageContainer;
