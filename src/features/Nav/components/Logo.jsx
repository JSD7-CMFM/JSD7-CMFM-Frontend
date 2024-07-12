import React from "react";
import logo from "../../../assets/logo.svg";
import { Link } from "react-router-dom";

const Logo = () => {
  return (
    <div className="flex items-center md:ml-4">
      <Link to="/" className="cursor-pointer">
        <img src={logo} alt="Logo" className="h-10 w-10" />{" "}
      </Link>
    </div>
  );
};

export default Logo;
