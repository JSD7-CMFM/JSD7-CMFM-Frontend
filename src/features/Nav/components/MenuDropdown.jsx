import React from 'react';

const MenuDropdown = () => {
  return (
    <div className="dropdown">
      <button tabIndex="0" className="btn btn-ghost border-slate-400">
        <svg
          xmlns="http://www.w3.org/2000/svg"
          className="h-5 w-5"
          fill="none"
          viewBox="0 0 24 24"
          stroke="currentColor"
        >
          <path
            strokeLinecap="round"
            strokeLinejoin="round"
            strokeWidth="2"
            d="M4 6h16M4 12h16M4 18h7"
          />
        </svg>
      </button>
      <ul
        tabIndex="0"
        className="menu menu-sm dropdown-content mt-3 z-[1] p-2 shadow bg-base-100 rounded-box w-52"
      >
        <li><a href="#">Homepage</a></li>
        <li><a href="#">Portfolio</a></li>
        <li><a href="#">About</a></li>
      </ul>
    </div>
  );
};

export default MenuDropdown;
