import React from "react";
import {
  FaShopify,
  FaAlipay,
  FaAmazon,
  FaFortAwesome,
  FaGlide,
} from "react-icons/fa";

const Sponser = () => {
  return (
    <>
      <div className="bg-[rgb(200,178,242)] p-10 border border-black border-t-0">
        <h1 className="text-black text-[30px] text-center justify-center py-6">
          We're out here!
        </h1>
        <div className="flex justify-center py-7 space-x-10 cursor: pointer;">
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
                <FaFortAwesome size={70} style={{ color: "#ffdd30" }} />
              </a>
              <a href="/" target="_blank" rel="noopener noreferrer">
                <img src="/ponylogo.svg" style={{ width: '70px', height: 'auto' }} alt="Pony Logo" />
              </a>
              <a href="https://glide.com" target="_blank" rel="noopener noreferrer">
                <FaGlide size={70} style={{ color: "#ea37de" }} />
              </a>
        </div>
        <div className="flex justify-center py-6">
          <button className="btn btn-s rounded btn-outline hover:bg-yellow-300 text-[12px] space-y-2 text-black bg-slate-200 p-3">
            FIND US IN STORES
          </button>
        </div>
      </div>
    </>
  );
};

export default Sponser;
