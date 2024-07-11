import React from "react";
import { FaFortAwesome } from "react-icons/fa6";
import EmailInput from "./EmailValidation";

const Subscribe = () => {
  return (
    <div>
      <div className="md:w-full">
        <div className="md:flex w-full">
          <div className="p-10 space-y-1 bg-[rgb(255,255,255)] md:w-1/2 border-r border-black">
            <div className="flex">
                  <img src ="/ponylogo.svg" style={{ width: '50px', height: 'auto' }} alt="Pony Logo"/>
              <h3 className="text-black text-[20px] font-mono pl-4 pt-3 ">
                PICKME OFFICIAL STORE.
              </h3>
            </div>
            <h4 className="text-black font-extralight text-[16px] ">
              Sign up for 15% off and updates straight to your inbox.
            </h4>
            <div className="bg-white w-full flex p-1">
              <div className="flex rounded w-full">
                <EmailInput />
              </div>
            </div>
          </div>
          <div className="md:flex md:w-1/2 md:space-x-4 md:justify-around bg-[rgb(253,244,235)] p-10 w-full border-t hidden">
            <div className="space-y-2 text-center md:text-start">
              <h3 className="text-black text-[20px] font-san text-center ">SHOP</h3>
              <h3 className="text-black font-light text-[16px]">
                All Blind Box
              </h3>
              <h3 className="text-black font-light text-[16px]">All Figures</h3>
              <h3 className="text-black font-light text-[16px]">Accessories</h3>
            </div>
            {/* Other content */}
          </div>
          {/* Other content */}
        </div>
      </div>
      {/* bar */}
    </div>
  );
};

export default Subscribe;
