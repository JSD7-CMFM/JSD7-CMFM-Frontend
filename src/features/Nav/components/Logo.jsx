import React from "react";
import logo from "../../../assets/logo.svg";

const Logo = () => {
  return (
    <div className="flex items-center md:ml-4">
      <img src={logo} alt="Logo" className="h-10 w-10" />{" "}
    </div>
  );
};

export default Logo;
