import React from "react";
import { Link } from "react-router-dom";
import { getToken } from "../../../utils/localStorage.js";

const NavLinks = () => {
  const token = getToken();
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
          LUCKY DRAW
        </Link>
      </li>
      <li>
        <Link to="AboutUs" className="btn btn-ghost text-xl">
          ABOUT US
        </Link>
      </li>
      {token ? (
        <li>
          <Link to="AboutUs" className="btn btn-ghost text-xl">
            MY ACCOUNT
          </Link>
        </li>
      ) : null}
    </ul>
  );
};

export default NavLinks;
