import React from "react";

const Delivery = ({
  setAddress,
  address,
  setRememberAddress,
  rememberAddress,
}) => {
  const handleChange = (e) => {
    const { name, value } = e.target;
    setAddress((prevAddress) => ({
      ...prevAddress,
      [name]: value,
    }));
  };
  const handleCheckboxChange = (e) => {
    setRememberAddress(e.target.checked);
  };

  return (
    <div className="mb-6">
      <h2 className="font-semibold mb-2">Shipping Address</h2>
      <input
        type="text"
        name="address"
        placeholder="Address"
        className="w-full border border-gray-300 px-4 py-2 mb-2 rounded"
        value={address.address}
        onChange={handleChange}
      />
      <input
        type="text"
        name="province"
        placeholder="Province"
        className="w-full border border-gray-300 px-4 py-2 mb-2 rounded"
        value={address.province}
        onChange={handleChange}
      />
      <div className="flex mb-2">
        <input
          type="text"
          name="country"
          placeholder="Country"
          className="w-3/4 border border-gray-300 px-4 py-2 mr-2 rounded"
          value={address.country}
          onChange={handleChange}
        />
        <input
          type="text"
          name="zipcode"
          placeholder="ZIP code"
          className="w-1/4 border border-gray-300 px-4 py-2 rounded"
          value={address.zipcode}
          onChange={handleChange}
        />
      </div>
      <div className="flex items-center my-4">
        <input
          type="checkbox"
          id="rememberMe"
          className="mr-2"
          checked={rememberAddress}
          onChange={handleCheckboxChange}
        />
        <label htmlFor="rememberMe" className="text-sm text-gray-600">
          Save this as my default shipping address
        </label>
      </div>
    </div>
  );
};

export default Delivery;
