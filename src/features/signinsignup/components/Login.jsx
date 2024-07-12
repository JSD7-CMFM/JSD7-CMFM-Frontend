import React, { useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import usersAPI from "../../../apis/users";

function LoginForm() {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [isEmailValid, setIsEmailValid] = useState(true);
  const [disable, setDisable] = useState(false);
  const [loginError, setLoginError] = useState("");
  const navigate = useNavigate();

  const handleEmailChange = (event) => {
    const newEmail = event.target.value;
    setEmail(newEmail);
    const emailPattern = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    setIsEmailValid(emailPattern.test(newEmail));
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    setLoginError("");
    const user = { email, password };

    if (!isEmailValid) {
      setLoginError("Please enter a valid email address.");
      return;
    }

    setDisable(true);
    try {
      const response = await usersAPI.Login(user);
      if (response && email === response.data.email) {
        navigate("/");
      } else {
        setLoginError("Invalid email or password.");
      }
    } catch (error) {
      setLoginError("An error occurred during login. Please try again.");
    }
    setDisable(false);
  };

  return (
    <div className="flex flex-col md:items-center bg-[#F0EB76] p-10 min-h-[500px] justify-center h-screen">
      <h2 className="text-center text-4xl md:text-2xl">Welcome Back</h2>
      <form
        className="pt-12 flex flex-col md:w-[473px]"
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
          autoComplete="email"
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
          autoComplete="current-password"
        />
        <a href="/forget" className="underline text-[12px] text-right pt-1">
          Forgot Password?
        </a>
        {loginError && (
          <h4 className="text-red-500 text-[12px] text-center mt-2">
            {loginError}
          </h4>
        )}
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
