import React from 'react';

const DetailItem = ({ imgSrc, description, size }) => (
  <div className="flex pb-4 md:text-xl">
    <div className="w-24 border-black border md:w-32 rounded-2xl">
      <img className="w-full h-full object-cover rounded-2xl" src={imgSrc} alt="Detail" />
    </div>
    <div className="ml-4 mt-2">
      <h3>{description}</h3>
      <p className="text-xs text-black md:text-xs">{size}</p>
      <div className="badge mt-2  md:p-2">POP MART</div>
    </div>
  </div>
);

export default DetailItem;
