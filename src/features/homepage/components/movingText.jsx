import React from "react";
import { PiFireFill } from "react-icons/pi";

const MovingSection = () => {
  const MovingContent = () => {
    return (
      <div className="flex">
        <div className="py-[10px] px-[12.5px] whitespace-nowrap md:pt-[17px] md:pb-5 md:px-12 md:text-[20px] flex  text-white">
          HOT DEALS
          <div className="flex p-1">
            <PiFireFill />
            <PiFireFill />
            <PiFireFill />
          </div>
        </div>
        <div className="py-[10px] px-[12.5px] whitespace-nowrap md:pt-[17px] md:pb-5 md:px-12 md:text-[20px] flex text-white">
          HOT DEALS
          <div className="flex p-1">
            <PiFireFill />
            <PiFireFill />
            <PiFireFill />
          </div>
        </div>
        <div className="py-[10px] px-[12.5px] whitespace-nowrap md:pt-[17px] md:pb-5 md:px-12 md:text-[20px] flex  text-white">
          HOT DEALS
          <div className="flex p-1">
            <PiFireFill />
            <PiFireFill />
            <PiFireFill />
          </div>
        </div>
        <div className="py-[10px] px-[12.5px] whitespace-nowrap md:pt-[17px] md:pb-5 md:px-12 md:text-[20px] flex  text-white">
          HOT DEALS
          <div className="flex p-1">
           <PiFireFill />
            <PiFireFill />
            <PiFireFill />
          </div>
        </div>
      </div>
    );
  };
  return (
    <div
      id="moving-container"
      className="bg-[#f7b7ed] overflow-hidden border-white border"
    >
      <div
        id="moving-section"
        className="flex justify-start animate-rightToLeft"
      >
        <MovingContent />
        <MovingContent />
        <MovingContent />
        <MovingContent />
        <MovingContent />
        <MovingContent />
      </div>
    </div>
  );
};

export default MovingSection;
