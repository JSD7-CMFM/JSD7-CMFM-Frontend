import React, { useEffect } from "react";
import { FaUser } from "react-icons/fa";
import { Link, useNavigate } from "react-router-dom";
import { getInitials } from "../../../utils/helper.js";
import {
  getFirstName,
  getToken,
  removeToken,
} from "../../../utils/localStorage.js";

const User = () => {
  useEffect(() => {}, []);
  const firstName = getFirstName();

  const onLogout = () => {
    removeToken();
    window.location.reload();
    useNavigate("/");
  };

  return (
    <div className="dropdown dropdown-end">
      {getToken() ? (
        <div
          tabIndex="0"
          role="button"
          className="btn btn-ghost avatar btn-circle border border-gray-800 bg-[#fffb7f]"
        >
          <div className="indicator">
            {getToken() ? (
              getInitials(firstName)
            ) : (
              <FaUser className="text-xl" />
            )}
          </div>
        </div>
      ) : (
        <div
          tabIndex="0"
          role="button"
          className="btn btn-ghost avatar btn-circle border border-gray-800 bg-[#fffb7f]"
        >
          <div className="indicator">
            <FaUser className="text-xl" />
          </div>
        </div>
      )}

      <ul
        tabIndex="0"
        className="menu menu-sm dropdown-content mt-3 z-[1] p-2 shadow bg-base-100 rounded-box w-52"
      >
        <li>
          {getToken() ? (
            <>
              <Link to="/account" className="justify-center">
                My Account
              </Link>
              <button className="justify-center" onClick={onLogout}>
                Sign out
              </button>
            </>
          ) : (
            <>
              <Link to="/login" className="justify-center">
                Sign in
              </Link>
              <Link to="/register" className="justify-center">
                Sign up
              </Link>
            </>
          )}
        </li>
      </ul>
    </div>
  );
};

export default User;
