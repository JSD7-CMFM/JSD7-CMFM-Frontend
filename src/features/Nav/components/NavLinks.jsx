import React from 'react';

const NavLinks = () => {
  return (
    <ul className="hidden md:flex space-x-4">
      <li><a href="#" className="btn btn-ghost text-xl">New & Featured</a></li>
      <li><a href="#" className="btn btn-ghost text-xl">SERIES</a></li>
      <li><a href="#" className="btn btn-ghost text-xl">MEGA</a></li>
      <li><a href="#" className="btn btn-ghost text-xl">TYPES</a></li>
      <li><a href="#" className="btn btn-ghost text-xl">ACCESSORIES</a></li>
      <li><a href="#" className="btn btn-ghost text-xl">EVENT</a></li>
    </ul>
  );
};

export default NavLinks;
