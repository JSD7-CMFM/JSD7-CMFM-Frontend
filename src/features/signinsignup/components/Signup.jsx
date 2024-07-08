import React, { useState } from "react";
import { Link } from "react-router-dom";
import usersAPI from "../../../apis/users";
import { useNavigate } from "react-router-dom";

const SignupForm = () => {
  const [firstName, setFirstName] = useState("");
  const [lastName, setLastName] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [isFirstNameValid, setIsFirstNameValid] = useState(true);
  const [isLastNameValid, setIsLastNameValid] = useState(true);
  const [isEmailValid, setIsEmailValid] = useState(true);
  const [isPasswordValid, setIsPasswordValid] = useState(true);
  const [dataObject, setDataObject] = useState({});
  const navigate = useNavigate();

  const handleFirstNameChange = (event) => {
    const value = event.target.value;
    setFirstName(value);
    setIsFirstNameValid(/^[A-Za-z]*$/.test(value));
  };

  const handleLastNameChange = (event) => {
    const value = event.target.value;
    setLastName(value);
    setIsLastNameValid(/^[A-Za-z]*$/.test(value));
  };

  const handleEmailChange = (event) => {
    const value = event.target.value;
    setEmail(value);
    const emailPattern = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    setIsEmailValid(emailPattern.test(value));
  };

  const handlePasswordChange = (event) => {
    const value = event.target.value;
    setPassword(value);
    setIsPasswordValid(value.length > 8);
  };
  const handleSubmit = async () => {
    // if (
    //   isFirstNameValid &&
    //   isLastNameValid &&
    //   isEmailValid &&
    //   isPasswordValid
    // ) {
    setDataObject({
      firstName,
      lastName,
      email,
      password,
    });
    // console.log(dataObject);
    await usersAPI.Register(dataObject);
    navigate("/");
    // console.log(response.data);
    // } else {
    //   alert("Please fill out the form correctly");
    // }
  };

  return (
    <div className="flex flex-col md:items-center bg-[#F0EB76] p-10 min-h-[500px] justify-center">
      <h2 className="text-center text-4xl md:text-2xl">
        You're new around here
      </h2>
      <form
        className="pt-12 flex flex-col md:w-[473px] md:pt-6"
        onSubmit={(e) => e.preventDefault()}
      >
        <input
          type="text"
          placeholder="First name*"
          className={`mt-5 p-1 pl-4 rounded border ${
            isFirstNameValid ? "border-gray-300" : "border-red-500"
          }`}
          value={firstName}
          onChange={handleFirstNameChange}
        />
        {!isFirstNameValid && (
          <h4 className="text-red-500 text-[12px] text-center">
            Please enter only letters
          </h4>
        )}
        <input
          type="text"
          placeholder="Last name*"
          className={`mt-5 p-1 pl-4 rounded border ${
            isLastNameValid ? "border-gray-300" : "border-red-500"
          }`}
          value={lastName}
          onChange={handleLastNameChange}
        />
        {!isLastNameValid && (
          <h4 className="text-red-500 text-[12px] text-center">
            Please enter only letters
          </h4>
        )}
        <input
          type="email"
          placeholder="Email address*"
          className={`mt-5 p-1 pl-4 rounded border ${
            isEmailValid ? "border-gray-300" : "border-red-500"
          }`}
          value={email}
          onChange={handleEmailChange}
        />
        {!isEmailValid && (
          <h4 className="text-red-500 text-[12px] text-center">
            Please enter a valid email address
          </h4>
        )}
        <input
          type="password"
          placeholder="Password*"
          className={`mt-5 p-1 pl-4 rounded border ${
            isPasswordValid ? "border-gray-300" : "border-red-500"
          }`}
          value={password}
          onChange={handlePasswordChange}
        />
        {!isPasswordValid && (
          <h4 className="text-red-500 text-[12px] text-center">
            Password must be more than 8 characters
          </h4>
        )}
        <div className="mt-14 text-center">
          <button
            onClick={handleSubmit}
            className="py-[8px] px-6 bg-white hover:border-black rounded-lg border border-gray-300 mr-5"
          >
            SIGN UP
          </button>
          <Link
            to="/login"
            className="py-[8px] px-6 bg-white hover:border-black rounded-lg border border-gray-300"
          >
            LOGIN
          </Link>
        </div>
      </form>
    </div>
  );
};

export default SignupForm;
