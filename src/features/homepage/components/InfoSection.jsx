import React from "react";
import { Link } from "react-router-dom";

const InfoSection = () => {
  return (
    <div className="px-6 py-28 bg-[#FDF4EB] border-2 border-black md:px-48 lg:px-96">
      <div className="text-3xl md:text-4xl lg:text-6xl text-center font-light pb-6">
        <h3>ABOUT PONY MART</h3>
      </div>
      <div className="text-center pb-8 text-base md:text-xl">
        <p>
          Pony Mart is a premier online destination for Art Toy enthusiasts and
          collectors. We take pride in offering a diverse array of high-quality,
          unique Art Toys sourced from around the globe. Our mission is to
          provide our customers with exceptional and distinctive pieces while
          supporting creative artists and designers.
        </p>
      </div>
      <Link to="productList" className="flex justify-center">
        <button
          to="productList"
          className="border-2 border-black w-full md:w-1/2 lg:w-1/4 rounded-md py-4 bg-white font-semibold text-lg md:text-xl hover:bg-[#F0EB76]"
        >
          LEARN MORE
        </button>
      </Link>
    </div>
  );
};

export default InfoSection;
