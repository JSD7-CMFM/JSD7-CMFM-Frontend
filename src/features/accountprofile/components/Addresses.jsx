import React from "react";

const Addresses = ({ user, setActiveSection }) => {
  return (
    <div id="acc-address" className="px-7">
      <div id="top-box" className="mb-3 border-b-2 pb-10 flex justify-between">
        <div id="address-section">
          <h3 className="mb-3 font-medium uppercase">Address</h3>
          <p>
            {user.firstName} {user.lastName}
          </p>
          <p className="mb-4">
            {user.address.address} {user.address.province}
            {user.address.country} {user.address.zipcode}
          </p>
        </div>
      </div>
      <div className="mt-7 mb-4 flex justify-end">
        <a
          className="py-[10px] px-6 bg-white hover:bg-[#F0EB76] rounded-lg border border-black hover:cursor-pointer"
          onClick={() => {
            setActiveSection("acc-edit-address");
          }}
        >
          Edit
        </a>
      </div>
    </div>
  );
};

export default Addresses;
