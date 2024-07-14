import React from "react";
import {
  FaShopify,
  FaAlipay,
  FaAmazon,
  FaFortAwesome,
  FaGlide,
} from "react-icons/fa";

const shop = () => {
  return (
    <>
      <div className="bg-[rgb(240,233,209)] p-10 border-2 border-white border ">
        <h1 className="text-black text-[48px] text-center justify-center py-6 uppercase">
          We're out here!
        </h1>
        <div className="flex flex-wrap justify-center py-4 md:grid-cols-3 gap-x-10 md:gap-10 cursor-pointer">
            <a href="https://shopify.com" target="_blank" rel="noopener noreferrer">
                <FaShopify size={70} style={{ color: "#fd9300" }} />
              </a>
              <a href="https://alipay.com" target="_blank" rel="noopener noreferrer">
                <FaAlipay size={70} style={{ color: "#0089f9" }} />
              </a>
              <a href="https://amazon.com" target="_blank" rel="noopener noreferrer">
                <FaAmazon size={70} style={{ color: "#ace3e6" }} />
              </a>
              <a href="https://fortawesome.com" target="_blank" rel="noopener noreferrer">
                <FaFortAwesome size={70} style={{ color: "#bd783b" }} />
              </a>
              <a href="/" target="_blank" rel="noopener noreferrer">
                <img src="/ponylogo.svg" style={{ width: '70px', height: 'auto' }} alt="Pony Logo" />
              </a>
              <a href="https://glide.com" target="_blank" rel="noopener noreferrer">
                <FaGlide size={70} style={{ color: "#ffa9f9" }} />
              </a>
        </div>
        <div className="flex justify-center py-6">
          <button className="py-[10px] px-6 mt-5 bg-[#ffe53d] hover:bg-[#eedc67] rounded-xl border-2 border-white w-[160px] font-semibold text-[18px]">
            FIND US IN STORES
          </button>
        </div>
      </div>
    </>
  );
};

export default shop;
