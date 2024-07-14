import React, { useState } from "react";
import users from "../../../apis/users.js";
import { useNavigate } from "react-router-dom";

const EditAddress = ({ setActiveSection, user }) => {
  const [address, setAddress] = useState(user.address.address);
  const [province, setProvince] = useState(user.address.province);
  const [country, setCountry] = useState(user.address.country);
  const [zipcode, setZipcode] = useState(user.address.zipcode);
  const navigate = useNavigate();
  const handleSubmit = async (e) => {
    e.preventDefault();
    const dataObject = { address: { address, province, country, zipcode } };
    console.log(dataObject);
    try {
      const response = await users.editUser(
        user._id,
        dataObject,
        "update_address"
      );
      console.log(response);

      if (response.data.message === "Update successful") {
        navigate("/Account");
        setActiveSection("acc-address");
        window.location.reload();
      }
    } catch (error) {
      console.error("Error updating address:", error);
    }
  };

  return (
    <div>
      <div>
        <button
          className="pb-5 font-bold text-[30px] text-yellow-800"
          onClick={() => setActiveSection("acc-address")}
        >
          &lt;
        </button>
        <h1 className="text-xl">Edit Your Address</h1>
      </div>
      <form className="flex flex-col w-full md:pt-6" onSubmit={handleSubmit}>
        <div className="flex">
          <label className="min-w-[120px] font">Address :</label>
          <input
            type="text"
            placeholder="Address*"
            className="p-1 pl-4 rounded border w-full"
            value={address}
            onChange={(e) => setAddress(e.target.value)}
          />
        </div>
        <div className="flex mt-5">
          <label className="min-w-[120px]">Province :</label>
          <input
            type="text"
            placeholder="Province*"
            className="p-1 pl-4 rounded border w-full"
            value={province}
            onChange={(e) => setProvince(e.target.value)}
          />
        </div>
        <div className="flex mt-5">
          <label className="min-w-[120px]">Country :</label>
          <input
            type="text"
            placeholder="Country*"
            className="p-1 pl-4 rounded border w-full"
            value={country}
            onChange={(e) => setCountry(e.target.value)}
          />
        </div>
        <div className="flex mt-5">
          <label className="min-w-[120px]">Zipcode :</label>
          <input
            type="text"
            placeholder="Zipcode*"
            className="p-1 pl-4 rounded border w-full"
            value={zipcode}
            onChange={(e) => setZipcode(e.target.value)}
          />
        </div>
        <button
          type="submit"
          className="w-full mt-5 py-[8px] px-6 bg-white hover:border-black hover:bg-blue-200 rounded-lg border border-gray-300 mr-5"
        >
          Make Change
        </button>
      </form>
    </div>
  );
};

export default EditAddress;
