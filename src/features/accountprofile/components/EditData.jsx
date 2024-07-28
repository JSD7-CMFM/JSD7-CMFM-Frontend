import React, { useState } from "react";
import users from "../../../apis/users.js";
import { useNavigate } from "react-router-dom";
import { FaPhone } from "react-icons/fa";
import { toast } from "react-toastify";

const Editdata = ({ setActiveSection, user }) => {
  const [firstName, setFirstName] = useState(user.data.firstName);
  const [lastName, setLastName] = useState(user.data.lastName);
  const [phoneNumber, setPhoneNumber] = useState(user.data.phoneNumber);
  const [password, setPassword] = useState("");
  const [isFirstNameValid, setIsFirstNameValid] = useState(true);
  const [isLastNameValid, setIsLastNameValid] = useState(true);
  const [isPasswordValid, setIsPasswordValid] = useState(true);
  const [isPhoneNumberValid, setIsPhoneNumberValid] = useState(true);

  const handleFirstNameChange = (event) => {
    const value = event.target.value;
    setFirstName(value);
    setIsFirstNameValid(/^[A-Za-z]*$/.test(value));
  };

  const navigate = useNavigate();

  const handleLastNameChange = (event) => {
    const value = event.target.value;
    setLastName(value);
    setIsLastNameValid(/^[A-Za-z]*$/.test(value));
  };

  const handlePhoneNumberChange = (event) => {
    const value = event.target.value;
    setPhoneNumber(value);
    const phonePattern = /^[0-9]{10}$/;
    setIsPhoneNumberValid(phonePattern.test(value));
  };

  const handlePasswordChange = (event) => {
    const value = event.target.value;
    setPassword(value);
    setIsPasswordValid(value.length > 0 && value !== "");
  };

  const handleSubmit = async () => {
    if (
      isFirstNameValid &&
      isLastNameValid &&
      isPasswordValid &&
      isPhoneNumberValid
    ) {
      const dataObject = {
        firstName,
        lastName,
        phoneNumber,
        password,
      };

      try {
        const response = await users.editUser(user.data._id, dataObject);
        if (response.data.message === "Update successful") {
          toast.success("Update successfully");
          navigate("/Account");
          window.location.reload();
        }
      } catch (error) {
        toast.error("Error updating data");
        toast.error(error.response.data.message);
      }
    }
  };

  return (
    <div className="px-7">
      <div>
        <button
          className="pb-5 font-bold text-[30px] text-yellow-800 "
          onClick={() => setActiveSection("acc-info")}
        >
          &lt;
        </button>
        <h1 className="text-xl">Edit Your Info</h1>
      </div>
      <form
        className="flex flex-col w-full md:pt-6"
        onSubmit={(e) => e.preventDefault()}
      >
        <div className="flex">
          <label htmlFor="firstName" className="min-w-[120px] font">
            First Name :
          </label>
          <input
            type="text"
            placeholder="First name*"
            className={`p-1 pl-4 rounded border w-full ${
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
        </div>
        <div className="flex mt-5">
          <label htmlFor="lastName" className="min-w-[120px]">
            Last Name :
          </label>
          <input
            type="text"
            placeholder="Last name*"
            className={`p-1 pl-4 rounded border w-full ${
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
        </div>
        <div className="flex mt-5">
          <div className="w-[120px] flex justify-inline mb-4">
            <label htmlFor="phoneNumber" className="min-">
              Phone
            </label>
            <div className="mt-1 mx-2">
              {" "}
              <FaPhone />{" "}
            </div>
            <label htmlFor="phoneNumber" className="min-">
              :
            </label>
          </div>
          <input
            type="text"
            placeholder="Phone number*"
            className={`p-1 pl-4 rounded border w-full ${
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
        </div>
        <label className="mt-5 text-center">
          Please confirm your password to make change
        </label>
        <input
          type="password"
          placeholder="Password*"
          className={`mt-5 p-1 pl-4 rounded border w-full ${
            isPasswordValid ? "border-gray-300" : "border-red-500"
          }`}
          value={password}
          onChange={handlePasswordChange}
        />
        {!isPasswordValid && (
          <h4 className="text-red-500 text-[12px] text-center">
            Password cannot be empty
          </h4>
        )}
        <button
          type="submit"
          onClick={handleSubmit}
          className="w-full mt-5 py-[8px] px-6 bg-white hover:border-black hover:bg-blue-200 rounded-lg border border-gray-300 mr-5"
          disabled={!isPasswordValid}
        >
          Make Change
        </button>
      </form>
    </div>
  );
};

export default Editdata;
