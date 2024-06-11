import React from "react";
import {
  FaShopify,
  FaAlipay,
  FaAmazon,
  FaFortAwesome,
  FaGlide,
  FaCcVisa,
  FaCcAmex,
  FaCcJcb,
  FaCcMastercard,
  FaCcDiscover,
  FaCcPaypal,
} from "react-icons/fa";

import {
  FaFacebook,
  FaInstagram,
  FaTiktok,
  FaPinterest,
  FaTwitter,
} from "react-icons/fa";

const Footer = () => {
  return (
    <section className="">
      {/* column1 */}
      <div className="bg-[rgb(200,178,242)] p-10 border border-black">
        <h1 className="text-black font-mono text-[16px] text-center justify-center py-6">
          We're out here!
        </h1>
        <div className="flex justify-center py-7 space-x-10 cursor: pointer;">
          <FaShopify size={70} style={{ color: "#fd9300" }} />
          <FaAlipay size={70} style={{ color: "#0089f9" }} />
          <FaAmazon size={70} style={{ color: "#b98800" }} />
          <FaFortAwesome size={70} style={{ color: "#fcd434" }} />
          <FaGlide size={70} style={{ color: "#e97b7b" }} />
        </div>
        <div className="flex justify-center py-6">
          <button className="btn btn-xs rounded btn-outline hover:bg-yellow-300 text-[8px] font-mono text-black bg-slate-200 p-3">
            {" "}
            FIND US IN STORES{" "}
          </button>
        </div>
      </div>
      <div className="md:w-full">
        <div className="md:flex w-full">
          <div className="p-10 space-y-1 bg-[rgb(255,255,255)] md:w-1/2 border-r border-black">
            <div className="flex">
              <FaFortAwesome size={40} style={{ color: "#fcd434" }} />
              <h3 className="text-black text-[12px] font-mono w-1/2 pl-3 pb-3">
                PICKME OFFICIAL STORE.
              </h3>
            </div>
            <h4 className="text-black font-extralight text-[10px] ">
              Sign up for 15% off and updates straight to your inbox.
            </h4>
            <div className="bg-white w-3/4 flex p-1 border border-black rounded">
              <div className="flex rounded w-3/4">
                <input
                  type="text"
                  placeholder="enter email"
                  className="bg-white text-[10px] text-center"
                />
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
              <h3 className="text-black text-[10px] font-mono">SHOP</h3>
              <h3 className="text-black font-light text-[8px]">
                All Blind Box
              </h3>
              <h3 className="text-black font-light text-[8px]">All Figures</h3>
              <h3 className="text-black font-light text-[8px]">Accessories</h3>
            </div>
            {/* Other content */}
          </div>
          {/* Other content */}
        </div>
      </div>
      {/* bar */}
      <div className="bg-[rgb(240,235,118)] border-t border-t-[rgb(52,52,52)] p-4 flex justify-between">
        <div className="space-x-2 inline flex">
          <FaFacebook />
          <FaInstagram />
          <FaTiktok />
          <FaPinterest />
          <FaTwitter />
        </div>
        <div className="flex justify-end">
          <div className="flex space-x-2 justify-between">
            <FaCcVisa />
            <FaCcMastercard />
            <FaCcAmex />
            <FaCcDiscover />
            <FaCcJcb />
            <FaCcPaypal />
          </div>
        </div>
      </div>
    </section>
  );
};

export default Footer;
