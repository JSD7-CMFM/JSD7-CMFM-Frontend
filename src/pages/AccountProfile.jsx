import React, { useState } from "react";
import AccountDetails from "../features/accountprofile/components/AccountDetails";
import OrderHistory from "../features/accountprofile/components/OrderHistory";
import Addresses from "../features/accountprofile/components/Addresses";
import Editdata from "../features/accountprofile/components/EditData.jsx";
import { useNavigate } from "react-router-dom";
import EditAddress from "../features/accountprofile/components/EditAddress.jsx";
import { GoogleLogout } from "react-google-login";
import { toast } from "react-toastify";

const AccountPageContainer = () => {
  const [activeSection, setActiveSection] = useState("acc-info");
  const [user, setUser] = useState(null);
  const navigate = useNavigate();

  const handleSignout = () => {
    localStorage.clear();
    toast.info("Signed Out Successfully");
    navigate("/");
  };
  const showSection = (sectionId) => {
    setActiveSection(sectionId);
  };

  const clientId = import.meta.env.VITE_GOOGLE_CLIENT_ID;

  return (
    <section id="my-acc" className="bg-[#dbd1f4] px-3 pb-4 h-screen pt-[100px]">
      <div
        id="acc-container"
        className="md:pb-12 md:pt-[90px] md:flex md:justify-center md:px-9 border-4 border-white rounded-xl bg-[#c5f5d6]"
      >
        <div
          id="acc-nav"
          className="md:pr-20 md: md:flex md:flex-col md:justify-between"
        >
          <div className="flex flex-col h-full">
            <h1 className="pt-10 md:pt-0 mb-8 text-2xl md:text-4xl whitespace-nowrap text-center">
              My Account
            </h1>
            <div className="flex justify-around md:justify-start md:flex-col md:h-full ">
              <p
                className="mb-4 hover:underline hover:cursor-pointer"
                onClick={() => showSection("acc-info")}
              >
                ACCOUNT DETAILS
              </p>
              <p
                className="mb-4 hover:underline hover:cursor-pointer"
                onClick={() => showSection("acc-order")}
              >
                ORDER HISTORY
              </p>
              <p
                className="mb-4 hover:underline hover:cursor-pointer"
                onClick={() => showSection("acc-address")}
              >
                ADDRESSES
              </p>
              <GoogleLogout
                icon={false}
                clientId={clientId}
                onLogoutSuccess={handleSignout}
                render={(renderProps) => (
                  <button
                    className="text-left hover:underline hover:cursor-pointer"
                    onClick={renderProps.onClick}
                  >
                    Sign Out
                  </button>
                )}
              ></GoogleLogout>
              {/* <p className="mb-2 hover:underline hover:text-red-500 hover:cursor-pointer md:mt-11">
                  SIGN OUT
                </p> */}
              {/* <GoogleLogout clientId={clientId} onLogoutSuccess={handleSignout}>
                GOOGLE SIGN OUT
              </GoogleLogout> */}
            </div>
          </div>
        </div>
        <div
          id="acc-display"
          className="bg-blue-100 border border-black rounded-xl min-h-[400px] md:h-[450px] p-8 md:w-[638px] overflow-y-scroll"
        >
          {activeSection === "acc-info" && (
            <AccountDetails
              setActiveSection={setActiveSection}
              setUserGlobal={setUser}
            />
          )}
          {activeSection === "acc-order" && (
            <OrderHistory orderHistory={user.userOrderHistory} />
          )}
          {activeSection === "acc-address" && (
            <Addresses user={user.data} setActiveSection={setActiveSection} />
          )}
          {activeSection === "acc-edit" && (
            <Editdata setActiveSection={setActiveSection} user={user} />
          )}
          {activeSection === "acc-edit-address" && (
            <EditAddress setActiveSection={setActiveSection} user={user.data} />
          )}
        </div>
      </div>
    </section>
  );
};

export default AccountPageContainer;
