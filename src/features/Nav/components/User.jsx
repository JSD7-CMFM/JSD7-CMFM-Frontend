import React from 'react';
import { FaUser } from "react-icons/fa";

const User = () => {
  return (
    <div className="dropdown dropdown-end">
      <div tabIndex="0" role="button" className="btn btn-ghost avatar btn-circle">
        <div className="indicator">
          <FaUser className='text-xl' />
        </div>
      </div>
      <ul
        tabIndex="0"
        className="menu menu-sm dropdown-content mt-3 z-[1] p-2 shadow bg-base-100 rounded-box w-52"
      >
        <li>
          <a href="#" className="justify-between">
            Sign in / Register
          </a>
        </li>
      </ul>
    </div>
  );
};

export default User;
