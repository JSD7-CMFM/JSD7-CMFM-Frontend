import React, { useState } from "react";
import { Link } from "react-router-dom";
import usersAPI from "../../../apis/users";
import { useNavigate } from "react-router-dom";
import { toast } from "react-toastify";

const SignupForm = () => {
  const [firstName, setFirstName] = useState("");
  const [lastName, setLastName] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [passwordConfirmation, setPasswordConfirmation] = useState("");
  const [showPassword, setShowPassword] = useState(false);
  const [phoneNumber, setPhoneNumber] = useState("");
  const [isFirstNameValid, setIsFirstNameValid] = useState(true);
  const [isLastNameValid, setIsLastNameValid] = useState(true);
  const [isEmailValid, setIsEmailValid] = useState(true);
  const [isPasswordValid, setIsPasswordValid] = useState(true);
  const [isPasswordConfirmationValid, setIsPasswordConfirmationValid] =
    useState(true);
  const [isPasswordConfirmationTouched, setIsPasswordConfirmationTouched] =
    useState(false);
  const [isPhoneNumberValid, setIsPhoneNumberValid] = useState(true);
  const navigate = useNavigate();

  const handleFirstNameChange = (event) => {
    const value = event.target.value;
    setFirstName(value);
    setIsFirstNameValid(/^[A-Za-z\u0E00-\u0E7F]*$/.test(value));
  };

  const handleLastNameChange = (event) => {
    const value = event.target.value;
    setLastName(value);
    setIsLastNameValid(/^[A-Za-z\u0E00-\u0E7F]*$/.test(value));
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
    setIsPasswordConfirmationValid(value === passwordConfirmation);
  };

  const handlePasswordConfirmationChange = (event) => {
    const value = event.target.value;
    setPasswordConfirmation(value);
    setIsPasswordConfirmationTouched(true);
    setIsPasswordConfirmationValid(value === password);
  };

  const handlePhoneNumberChange = (event) => {
    const value = event.target.value;
    setPhoneNumber(value);
    const phonePattern = /^[0-9]{10}$/;
    setIsPhoneNumberValid(phonePattern.test(value));
  };

  const handleSubmit = async () => {
    if (
      isFirstNameValid &&
      isLastNameValid &&
      isEmailValid &&
      isPasswordValid &&
      isPasswordConfirmationValid &&
      isPhoneNumberValid
    ) {
      const dataObject = {
        firstName,
        lastName,
        email,
        password,
        phoneNumber,
      };
      try {
        const response = await usersAPI.Register(dataObject);
        toast.success("Registration successful");
        navigate("/");
      } catch (error) {
        toast.error(error.response.data.message);
      }
    } else {
      toast.error("An error occurred during registration. Please try again.");
    }
  };

  return (
    <div className="flex flex-col md:items-center bg-[#F0EB76] p-10 min-h-[500px] justify-center pt-[90px] h-screen">
      <h2 className="text-center font-bold text-[42px] md:text-2xl uppercase">
        You're new around here
      </h2>
      <form
        className="pt-12 flex flex-col md:w-[473px] md:pt-6  bg-white rounded-xl p-5 m-5 border border-black"
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
          type="text"
          placeholder="Phone number*"
          className={`mt-5 p-1 pl-4 rounded border ${
            isPhoneNumberValid ? "border-gray-300" : "border-red-500"
          }`}
          value={phoneNumber}
          onChange={handlePhoneNumberChange}
        />
        {!isPhoneNumberValid && (
          <h4 className="text-red-500 text-[12px] text-center">
            Please enter a valid phone number
          </h4>
        )}
        <div className="relative mt-5">
          <input
            type={showPassword ? "text" : "password"}
            placeholder="Password*"
            className={`p-1 pl-4 rounded border w-full ${
              isPasswordValid ? "border-gray-300" : "border-red-500"
            }`}
            value={password}
            onChange={handlePasswordChange}
            autoComplete="new-password"
          />
          <button
            type="button"
            className="absolute right-2 top-2 text-gray-600"
            onClick={() => setShowPassword(!showPassword)}
          >
            {showPassword ? "Hide" : "Show"}
          </button>
        </div>
        {!isPasswordValid && (
          <h4 className="text-red-500 text-[12px] text-center">
            Password must be more than 8 characters
          </h4>
        )}
        <input
          type={showPassword ? "text" : "password"}
          placeholder="Confirm Password*"
          className={`mt-5 p-1 pl-4 rounded border ${
            isPasswordConfirmationTouched && !isPasswordConfirmationValid
              ? "border-red-500"
              : "border-gray-300"
          }`}
          value={passwordConfirmation}
          onChange={handlePasswordConfirmationChange}
          autoComplete="new-password"
        />
        {isPasswordConfirmationTouched && !isPasswordConfirmationValid && (
          <h4 className="text-red-500 text-[12px] text-center">
            Passwords do not match
          </h4>
        )}
        <div className="mt-14 text-center">
          <button
            onClick={handleSubmit}
            className="py-[8px] px-6 bg-white hover:border-black rounded-lg border border-gray-300 mr-5"
            onKeyDown={(event) => {
              if (event.key === "Enter") {
                handleSubmit();
              }
            }}
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
