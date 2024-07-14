import React from "react";
import {
  FaFacebook,
  FaPinterest,
  FaTwitter,
  FaCcAmex,
  FaCcJcb,
  FaCcPaypal,
} from "react-icons/fa";
import EmailInput from "./EmailValidation.jsx";

const Credit = () => {
  return (
    <div className="flex">
      <div className="bg-gradient-to-br from-pink-200 to-purple-200 bg-[rgb(251,192,242)] border-t-2 border-white w-1/4 border-r-4 flex-col items-center p-20">
        <div className="flex-col bg-white rounded-full items-center">
          <img src="/ponylogo.svg" style={{ width: '400px', height: 'auto' }} alt="Pony Logo" />
        </div>
         <h3 className="text-white text-shadow-xl text-center text-[30px] font-bold pl-5 w-auto">
            PONYMART OFFICIAL STORE.
         </h3>
      </div>
      <div className="bg-gradient-to-br from-pink-200 to-purple-200 bg-[rgb(251,192,242)] border-t-2 border-white  flex p-[64px] justify-center w-3/4">
        <div className="md:flex  md:space-x-4 md:justify-around hidden  ">
          <div className="justifly-center">
            <h3 className="text-white text-[30px] font-bold font-san text-center p-2 uppercase">Contact Us</h3>
            <div className=" bg-white  opacity-80 flex p-10">
            <div className="w-[200px] h-auto">
              <h3 className="text-left font-light"> contact us about...</h3>
              <h1 className="font-light"> JSD7 25_Modtanoy</h1>
              <img src ="/1.jpeg" className="rounded-full p-5 " />
            </div>
            <div className="w-[200px] h-auto">
              <h3 className="text-left font-light"> contact us about...</h3>
              <h1 className="font-light"> JSD7 11_Namfah</h1>
              <img src ="/3.jpeg" className="rounded-full p-5" />
            </div>
            <div className="w-[200px] h-auto">
              <h3 className="text-left font-light"> contact us about...</h3>
              <h1 className="font-light"> JSD7 05_Fear</h1>
              <img src ="/2.jpeg" className="rounded-full p-5" />
            </div>
               <div className="w-[200px] h-auto">
              <h3 className="text-left font-light"> contact us about...</h3>
              <h1 className="font-light"> JSD7 28_Sun</h1>
              <img src ="/4.jpeg" className="rounded-full p-5" />
            </div>
            </div>
          </div>
          </div>
        {/* <div>
          <div className="space-x-2 inline flex ">
          <FaFacebook color="#0e4fbe" className="w-[30px] h-[30px] " />
          <img src="../src/features/foottage/icons/ig.png" className="w-[30px] h-[30px]"/>
          <img src="../src/features/foottage/icons/tiktok.png" className="w-[30px] h-[30px]" />
          <FaPinterest color="#dc1010" className="w-[30px] h-[30px]" />
          <FaTwitter color="#12b6bf" className="w-[30px] h-[30px]" />
        </div>
        <div className="flex justifly-between">
          <div className="flex space-x-2 ">
            <img src="../src/features/foottage/icons/visa.png" className="w-[40px] h-[30px] rounded" />
            <img src="../src/features/foottage/icons/mastercard.png" className="w-[40px] h-[30px] rounded" />
            <FaCcAmex color="#0e4fbe" className="w-[40px] h-[30px]" />
            <img src="../src/features/foottage/icons/discover.png" className="w-[40px] h-[30px] rounded" />
            <FaCcJcb color="#0e4fbe" className="w-[40px] h-[32px]" />
            <FaCcPaypal color="#0b3b8c" className="w-[40px] h-[32px]" />
          </div>
        </div>
        </div> */}
      </div>
    </div>
  );
};

export default Credit;
