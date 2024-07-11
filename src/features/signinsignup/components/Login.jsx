import React, { useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import usersAPI from "../../../apis/users";

function LoginForm() {
  // const [user, setUser] = useState({});
  // const [input, setInput] = useState({});
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [isEmailValid, setIsEmailValid] = useState(true);
  // const [loginError, setLoginError] = useState(false);
  const [disable, setDisable] = useState(false);
  const navigate = useNavigate();

  const handleEmailChange = (event) => {
    const newEmail = event.target.value;
    setEmail(newEmail);
    const emailPattern = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    setIsEmailValid(emailPattern.test(newEmail));
  };

  // const hdlChangeInput = (e) => {
  //   setInput({ ...input, [e.target.name]: e.target.value });
  // };

  const handleSubmit = async (e) => {
    e.preventDefault();
    const user = { email, password };
    setDisable(true);
    const response = await usersAPI.Login(user);
    console.log("response login: ", response);
    setDisable(false);
    if (response && email === response.data.email) {
      navigate("/");
    } else {
      alert("Please enter a valid email address or password");
    }
  };

  return (
    <div className="flex flex-col md:items-center bg-[#F0EB76] p-10 min-h-[500px] justify-center h-screen ">
      <h2 className="text-center text-[42px] font-bold md:text-2xl uppercase ">
        Welcome Back
      </h2>
      <form
        className="pt-12 flex flex-col md:w-[473px] border border-black m-5 p-20 bg-white rounded-xl"
        onSubmit={handleSubmit}
      >
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
          className="mt-5 p-1 pl-4 rounded border border-gray-300"
          value={password}
          onChange={(e) => setPassword(e.target.value)}
        />
        <a href="/forget" className="underline text-[12px] text-right pt-1">
          Forgot Password?
        </a>
        <div className="mt-14 text-center">
          <button
            className="py-[8px] px-6 bg-white hover:border-black rounded-lg border border-gray-300 mr-5"
            disabled={disable}
          >
            LOGIN
          </button>
          <Link
            to="/register"
            className="py-[8px] px-6 bg-white hover:border-black rounded-lg border border-gray-300"
          >
            SIGN UP
          </Link>
        </div>
      </form>
    </div>
  );
}

export default LoginForm;
