import React from "react";

const DetailItem = ({ imgSrc, type, description, category, price }) => {
  if (!imgSrc) {
    return <div>Product not found</div>;
  }

  return (
    <div className="w-full flex pb-4 md:text-xl  p-2 rounded-2xl bg-[rgb(45,204,240)] bg-opacity-30 border-2 drop-shadow-lg">
      <div className="w-50 md:w-32 rounded-2xl pl-4">
        <img
          className="w-full h-full object-cover rounded-2xl "
          src={imgSrc}
          alt="Detail"
        />
      </div>
      <div className="ml-4 mt-2">
        <h3 className="text-[16px] font-semibold">{description}</h3>
        <div className="text-xs text-black md:text-[16px] badge mt-2 md:p-3 bg-pink-300">
          {type} Type
        </div>
        <div className="badge text-black mt-2 ml-2 md:p-3 text-[16px] font  bg-green-300">
          {category}
        </div>
        <div className="flex justify-between">
          <div className="text-xl font-bold text-black md:text-[16px] mt-5 md:p-4 rounded-xl bg-slate-50">
            ฿ {price} / box
          </div>
        </div>
      </div>
    </div>
  );
};

export default DetailItem;
