import React, { useState } from "react";

const CollapsibleItem = ({ imgSrc, title }) => {
  // State to control the checked status of the checkbox
  const [isChecked, setIsChecked] = useState(true);

  return (
    <div className="collapse bg-[#FDF4EB] w-full md:w-1/2 border-gray-300 shadow-lg border m-2 flex flex-col items-center relative">
      <input
        type="checkbox"
        className="peer absolute"
        checked={isChecked}
        onChange={() => setIsChecked(!isChecked)} // Toggle isChecked state
      />
      <div className="collapse-title text-xl font-medium flex justify-center items-start cursor-pointer pb-10">
        {title}
      </div>
      <div
        className={`collapse-content flex justify-center items-center w-[760px] h-[850px]  ${
          isChecked ? "block" : "hidden" // Conditionally show/hide based on isChecked
        }`}
      >
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
