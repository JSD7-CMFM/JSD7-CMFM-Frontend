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
              <FaFortAwesome size={40} style={{ color: "#fcd434" }} />
              <h3 className="text-black text-[12px] font-mono w-1/2 pl-3 pb-3">
                PICKME OFFICIAL STORE.
              </h3>
            </div>
            <h4 className="text-black font-extralight text-[12px] ">
              Sign up for 15% off and updates straight to your inbox.
            </h4>
            <div className="bg-white w-3/4 flex p-1 border border-black rounded">
              <div className="flex rounded w-3/4">
                <EmailInput />
              </div>
              <div>
                <div className="text-black text-[10px] justify-end">
                  <a href="#"> SUBSCRIBE</a>
                </div>
              </div>
            </div>
          </div>
          <div className="md:flex md:w-1/2 md:space-x-4 md:justify-around bg-[rgb(253,244,235)] p-10 w-full border-t hidden">
            <div className="space-y-2 text-center md:text-start">
              <h3 className="text-black text-[16px] font-san ">SHOP</h3>
              <h3 className="text-black font-light text-[12px]">
                All Blind Box
              </h3>
              <h3 className="text-black font-light text-[12px]">All Figures</h3>
              <h3 className="text-black font-light text-[12px]">Accessories</h3>
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
