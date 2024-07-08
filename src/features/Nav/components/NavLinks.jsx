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
        <Link to="/register" className="btn btn-ghost text-xl">
          REGISTER
        </Link>
      </li>
      <li>
        <Link to="Account" className="btn btn-ghost text-xl">
          ACCOUNT
        </Link>
      </li>
      <li>
        <Link to="checkout" className="btn btn-ghost text-xl">
          CHECKOUT
        </Link>
      </li>
    </ul>
  );
};

export default NavLinks;
