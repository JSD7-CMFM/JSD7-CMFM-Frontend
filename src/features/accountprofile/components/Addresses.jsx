import React from "react";

const Addresses = ({ user }) => {
  return (
    <div id="acc-address" className="px-7">
      <div id="top-box" className="mb-3 border-b-2 pb-10 flex justify-between">
        <div id="address-section">
          <h3 className="mb-3 font-medium uppercase">Address</h3>
          <p>
            {user.firstName} {user.lastName}
          </p>
          <p className="mb-4"></p>
          <a href="#" className="underline">
            Delete
          </a>
        </div>
        <div id="edit-button">
          <a href="#" className="underline">
            Edit
          </a>
        </div>
      </div>
      <div className="mt-7 mb-4">
        <a
          href="#"
          className="py-[10px] px-6 bg-white hover:bg-[#F0EB76] rounded-lg border border-black"
        >
          Add New
        </a>
      </div>
    </div>
  );
};

export default Addresses;
