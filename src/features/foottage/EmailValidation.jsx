import React, { useState } from "react";

const EmailInput = () => {
  const [email, setEmail] = useState("");
  const [isValid, setIsValid] = useState(true);

  const handleInputChange = (event) => {
    const newEmail = event.target.value;
    setEmail(newEmail);

    // Perform validation here
    const emailPattern = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    setIsValid(emailPattern.test(newEmail));
  };

  const handleSubscribe = () => {
    if (isValid) {
      // Perform subscription logic here
      alert(`Subscribing with email: ${email}`);
    } else {
      alert("Please enter a valid email address");
    }
  };

  return (
    <div className="border border-gray-200 space-x-10 flex p-2 rounded-md overflow-x-auto flex-col">
      <div className="flex justify-between">
        <div className="flex-col">
          <input
            type="email"
            placeholder="Enter email"
            className={`bg-white text-[16px] text-center px-16 py-2 ${
              isValid ? "border-green-500" : "border-red-500"
            }`}
            value={email}
            onChange={handleInputChange}
            pattern="^[^\s@]+@[^\s@]+\.[^\s@]+$"
            title="Please enter a valid email address"
          />
          <div>
            {!isValid && (
              <h4 className="text-red-500 text-[12px] text-center">
                Please enter a valid email address
              </h4>
            )}
          </div>
        </div>
      </div>
      <button
        onClick={handleSubscribe}
        className=" bg-yellow-300 text-black px-3 py-1 rounded-md items-center uppercase text-[16px] font-semibold hover:bg-yellow-400"
      >
        Subscribe
      </button>
    </div>
  );
};

export default EmailInput;
