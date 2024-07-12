import React from "react";
import { RiFireLine } from "react-icons/ri";

const MovingSection = () => {
  const MovingContent = () => {
    return (
      <div className="flex">
        <div className="py-[10px] px-[12.5px] whitespace-nowrap md:pt-[17px] md:pb-5 md:px-12 md:text-[20px] flex  text-white">
          HOT DEALS
          <div className="flex p-1">
            <RiFireLine />
            <RiFireLine />
            <RiFireLine />
          </div>
        </div>
        <div className="py-[10px] px-[12.5px] whitespace-nowrap md:pt-[17px] md:pb-5 md:px-12 md:text-[20px] flex text-white">
          HOT DEALS
          <div className="flex p-1">
            <RiFireLine />
            <RiFireLine />
            <RiFireLine />
          </div>
        </div>
        <div className="py-[10px] px-[12.5px] whitespace-nowrap md:pt-[17px] md:pb-5 md:px-12 md:text-[20px] flex  text-white">
          HOT DEALS
          <div className="flex p-1">
            <RiFireLine />
            <RiFireLine />
            <RiFireLine />
          </div>
        </div>
        <div className="py-[10px] px-[12.5px] whitespace-nowrap md:pt-[17px] md:pb-5 md:px-12 md:text-[20px] flex  text-white">
          HOT DEALS
          <div className="flex p-1">
            <RiFireLine />
            <RiFireLine />
            <RiFireLine />
          </div>
        </div>
      </div>
    );
  };
  return (
    <div
      id="moving-container"
      className="bg-[#e71111] overflow-hidden border-black border"
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
