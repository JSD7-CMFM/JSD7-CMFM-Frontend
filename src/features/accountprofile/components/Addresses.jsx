import React from "react";

const Addresses = ({ user, setActiveSection }) => {
  return (
    <div id="acc-address" className="">
      <div
        id="top-box"
        className="mb-3 border-b-2 pb-10 flex justify-between  bg-white rounded-xl p-5"
      >
        <div id="address-section" className="w-full">
          <div className="mt-2 flex justify-end relative">
            <a
              className="py-[10px] px-6 bg-white hover:bg-[#F0EB76] rounded-lg border border-black hover:cursor-pointer absolute "
              onClick={() => {
                setActiveSection("acc-edit-address");
              }}
            >
              Edit
            </a>
          </div>
          <h3 className="mb-3 font-semibold text-[20px] uppercase pt-10">
            Address
          </h3>
          <p className="mb-4 pl-5">
            TO: {user.firstName} {user.lastName}
          </p>
          <p className="mb-4  pl-5">
            {user.address.address} Provice:{user.address.province}
          </p>
          <p className="mb-4 pl-5">
            Country:{user.address.country} Zipcode:{user.address.zipcode}
          </p>
        </div>
      </div>
    </div>
  );
};

export default Addresses;
