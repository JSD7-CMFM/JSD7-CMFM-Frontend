import React, { useEffect, useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import usersAPI from "../../../apis/users";
import { GoogleLogin, useGoogleLogin } from "@react-oauth/google";
import { toast } from "react-toastify";

function LoginForm() {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [isEmailValid, setIsEmailValid] = useState(true);
  const [disable, setDisable] = useState(false);
  const [loginError, setLoginError] = useState("");
  const [isEmailTouched, setIsEmailTouched] = useState(false);
  const [isPasswordTouched, setIsPasswordTouched] = useState(false);
  const [showPassword, setShowPassword] = useState(false);
  const navigate = useNavigate();

  const handleEmailChange = (event) => {
    const newEmail = event.target.value;
    setEmail(newEmail);
    setIsEmailTouched(true);
    const emailPattern = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    setIsEmailValid(emailPattern.test(newEmail));
  };

  const handlePasswordChange = (event) => {
    setPassword(event.target.value);
    setIsPasswordTouched(true);
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    setLoginError("");
    const user = { email, password };

    if (!isEmailValid || email === "" || password === "") {
      setLoginError("Please enter a valid email address and password.");
      return;
    }

    setDisable(true);
    try {
      const response = await usersAPI.Login(user);
      if (response && email === response.data.email) {
        toast.success("Sign In Successful!");
        navigate("/");
      } else {
        toast.error("Invalid email or password.");
        setLoginError("Invalid email or password.");
      }
    } catch (error) {
      toast.error("Invalid email or password.");
      setLoginError("An error occurred during login. Please try again.");
    }
    setDisable(false);
  };

  const handleGoogleSuccess = async (response) => {
    const token = response.credential;
    try {
      const result = await usersAPI.googleLogin({ token });
      console.log("Google login success:", result.data);
      navigate("/");
    } catch (error) {
      console.error("Google login failed:", error);
    }
  };

  const handleGoogleFailure = (error) => {
    console.error("Google login failed:", error);
  };

  return (
    <div className="flex flex-col md:items-center bg-[#F0EB76] p-10 min-h-[500px] justify-center h-screen">
      <h2 className="text-center text-[42px] font-bold md:text-2xl uppercase">
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
          autoComplete="email"
        />
        {!isEmailValid && (
          <h4 className="text-red-500 text-[12px] text-center">
            Please enter a valid email address
          </h4>
        )}
        <div className="relative mt-5">
          <input
            type={showPassword ? "text" : "password"}
            placeholder="Password*"
            className="p-1 pl-4 rounded border w-full border-gray-300"
            value={password}
            onChange={handlePasswordChange}
            autoComplete="current-password"
          />
          <button
            type="button"
            className="absolute right-2 top-2 text-gray-600"
            onClick={() => setShowPassword(!showPassword)}
          >
            {showPassword ? "Hide" : "Show"}
          </button>
        </div>
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
            disabled={disable || !isEmailTouched || !isPasswordTouched}
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
        <div className="mt-5 flex justify-center">
          <GoogleLogin
            onSuccess={handleGoogleSuccess}
            onFailure={handleGoogleFailure}
          />
        </div>
      </form>
    </div>
  );
}

export default LoginForm;
