import React from "react";
import { Link } from "react-router-dom";

const NavLinks = () => {
  return (
    <ul className="hidden xl:flex space-x-4">
      <li>
        <Link to="/" className="btn btn-ghost text-xl">
          HOME
        </Link>
      </li>
      <li>
        <Link to="productList" className="btn btn-ghost text-xl">
          PRODUCTLIST
        </Link>
      </li>
      <li>
        <Link to="random" className="btn btn-ghost text-xl">
          RANDOM
        </Link>
      </li>
      <li>
        <Link to="AboutUs" className="btn btn-ghost text-xl">
          ABOUT US
        </Link>
      </li>
    </ul>
  );
};

export default NavLinks;
