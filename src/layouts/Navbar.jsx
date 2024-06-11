import React from 'react';
import { FaRegHeart } from "react-icons/fa6";
import { FaUser } from "react-icons/fa";

const NavBar = () => {
  return (
    <header className=''>
      <nav className="w-full navbar border-b-4 border-black-400 bg-[#FEF3C7] md:justify-between justify-evenly">

      <div className="md:hidden">
            <div className="navbar-start">
              <div className="dropdown">
                <div tabIndex="0" role="button" className="btn btn-ghost btn-circle">
                  <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M4 6h16M4 12h16M4 18h7" /></svg>
                </div>
                <ul tabIndex="0" className="menu menu-sm dropdown-content mt-3 z-[1] p-2 shadow bg-base-100 rounded-box w-32">
                  <li><a>Homepage</a></li>
                  <li><a>Portfolio</a></li>
                  <li><a>About</a></li>
                </ul>
              </div>
            </div>
          </div>
        <div className="flex">
          <div className="btn btn-ghost text-xl text-[#F35D3C]">Logo</div>
          <ul className="hidden md:flex">
            <li><a href="#" className="btn btn-ghost text-xl">New & Featured</a></li>
            <li><a href="#" className="btn btn-ghost text-xl">SERIES</a></li>
            <li><a href="#" className="btn btn-ghost text-xl">MEGA</a></li>
            <li><a href="#" className="btn btn-ghost text-xl">TYPES</a></li>
            <li><a href="#" className="btn btn-ghost text-xl">ACCESSORIES</a></li>
            <li><a href="#" className="btn btn-ghost text-xl">EVENT</a></li>
          </ul>
        </div>



        <div className="flex-none md:gap-5 md:justify-between md:w-auto w-3/4 justify-between">
          <div className="form-control w-1/2">
            <input type="text" placeholder="Search" className="input input-bordered w-45 md:w-auto" />
          </div>

          <div className="dropdown dropdown-end">
            <div tabIndex="0" role="button" className="btn btn-ghost btn-circle mt-2">
              <div className="indicator">
                <svg xmlns="http://www.w3.org/2000/svg" className="h-8 w-8" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M3 3h2l.4 2M7 13h10l4-8H5.4M7 13L5.4 5M7 13l-2.293 2.293c-.63.63-.184 1.707.707 1.707H17m0 0a2 2 0 100 4 2 2 0 000-4zm-8 2a2 2 0 11-4 0 2 2 0 014 0z" /></svg>
                <span className="badge badge-sm indicator-item">8</span>
              </div>
            </div>
            <div tabIndex="0" className="mt-5 z-[1] card card-compact dropdown-content w-52 bg-base-100 shadow">
              <div className="card-body">
                <span className="font-bold text-lg">8 Items</span>
                <span className="text-info">Subtotal: $999</span>
                <div className="card-actions">
                  <button className="btn btn-primary btn-block">View cart</button>
                </div>
              </div>
            </div>
          </div>



          <div tabIndex="0" role="button" className="btn btn-ghost btn-circle mt-2">
            <div className="indicator ">
              <FaRegHeart className='text-2xl' />
            </div>
          </div>

          <div className="dropdown dropdown-end">
            <div tabIndex="0" role="button" className="btn btn-ghost avatar btn-circle mx-2 mt-2">
              <div className="w-10">
              <FaUser className='h-10 text-xl'/>
              </div>
            </div>
            <ul tabIndex="0" className="menu menu-sm dropdown-content mt-3 z-[1] p-2 shadow bg-base-100 rounded-box w-52">
              <li>
                <a className="justify-between">
                  Sign in / Register
                </a>
              </li>
            </ul>
          </div>

          
        </div>
      </nav>
    </header>
  );
};

export default NavBar;