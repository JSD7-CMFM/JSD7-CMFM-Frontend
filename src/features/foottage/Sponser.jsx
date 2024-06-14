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
      <div className="bg-[rgb(200,178,242)] p-10 border border-black">
        <h1 className="text-black text-[30px] text-center justify-center py-6">
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
          <button className="btn btn-s rounded btn-outline hover:bg-yellow-300 text-[12px] space-y-2 text-black bg-slate-200 p-3">
            FIND US IN STORES
          </button>
        </div>
      </div>
    </>
  );
};

export default Sponser;
