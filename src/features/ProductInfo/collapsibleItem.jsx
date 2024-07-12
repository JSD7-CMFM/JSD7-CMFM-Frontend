import React from "react";

const CollapsibleItem = ({ imgSrc, title }) => {
  return (
    <div className="collapse bg-[#FDF4EB] w-full md:w-1/2 border-black border">
      <input type="checkbox" className="peer" />
      <div className="collapse-title text-xl font-medium flex justify-center items-center cursor-pointer">
        {title}
      </div>
      <div className="collapse-content flex justify-center items-center">
        <img
          src={imgSrc}
          alt="Collapsible content"
          className="w-full md:w-3/4"
        />
      </div>
    </div>
  );
};

export default CollapsibleItem;
