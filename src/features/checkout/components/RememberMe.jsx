import React from "react";

const RememberMe = () => {
  return (
    <div className="flex items-center mb-4">
      <input type="checkbox" id="rememberMe" className="mr-2" />
      <label htmlFor="rememberMe" className="text-sm text-gray-600">
        Save this as my default shipping address
      </label>
    </div>
  );
};

export default RememberMe;
