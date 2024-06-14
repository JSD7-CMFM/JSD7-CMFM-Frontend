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

  return (
    <div>
      <input
        type="email"
        placeholder="Enter email"
        className={`bg-white text-[14px] text-center px-16 py-2 ${
          isValid ? "border-green-500" : "border-red-500"
        }`}
        value={email}
        onChange={handleInputChange}
        pattern="^[^\s@]+@[^\s@]+\.[^\s@]+$"
        title="Please enter a valid email address"
      />
      {!isValid && (
        <p className="text-red-500 text-[10px]">
          Please enter a valid email address
        </p>
      )}
    </div>
  );
};

export default EmailInput;
