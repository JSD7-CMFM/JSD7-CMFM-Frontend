import React from "react";

const MovingSection = () => {
  const MovingContent = () => {
    return (
      <div className="flex">
        <p className="py-[10px] px-[12.5px] whitespace-nowrap md:pt-[17px] md:pb-5 md:px-12 md:text-[20px]">
          Something moving
        </p>
        <p className="py-[10px] px-[12.5px] whitespace-nowrap md:pt-[17px] md:pb-5 md:px-12 md:text-[20px]">
          Something moving
        </p>
        <p className="py-[10px] px-[12.5px] whitespace-nowrap md:pt-[17px] md:pb-5 md:px-12 md:text-[20px]">
          Something moving
        </p>
        <p className="py-[10px] px-[12.5px] whitespace-nowrap md:pt-[17px] md:pb-5 md:px-12 md:text-[20px]">
          Something moving
        </p>
      </div>
    );
  };
  return (
    <div
      id="moving-container"
      className="bg-[#f0eb76] overflow-hidden border-black border"
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
