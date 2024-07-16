import React, { useEffect } from "react";
import { FaUser } from "react-icons/fa";
import { Link, useNavigate } from "react-router-dom";
import { getInitials } from "../../../utils/helper.js";
import {
  getFirstName,
  getToken,
  removeToken,
} from "../../../utils/localStorage.js";
import { toast } from "react-toastify";
import { GoogleLogout } from "react-google-login";
import { gapi } from "gapi-script";

const User = () => {
  useEffect(() => {}, []);
  const firstName = getFirstName();

  const navigate = useNavigate();
  const handleSignout = () => {
    localStorage.clear();
    toast.info("Signed Out Successfully");
    navigate("/");
  };

  const clientId = import.meta.env.VITE_GOOGLE_CLIENT_ID;

  return (
    <div className="dropdown dropdown-end">
      {getToken() ? (
        <div
          tabIndex="0"
          role="button"
          className="btn btn-ghost avatar btn-circle border border-gray-800 bg-[#5edfa3]"
        >
          <div className="indicator text-xl w-[1.5rem]">
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
          className="btn btn-ghost avatar btn-circle border-2 border-white bg-[#ece0b7]"
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
              <GoogleLogout
                icon={false}
                clientId={clientId}
                onLogoutSuccess={handleSignout}
                render={(renderProps) => (
                  <button
                    className="justify-center"
                    onClick={renderProps.onClick}
                  >
                    Sign Out
                  </button>
                )}
              ></GoogleLogout>
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
