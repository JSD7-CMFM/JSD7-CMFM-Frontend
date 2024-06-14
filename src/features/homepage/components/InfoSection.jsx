import React from 'react';

const InfoSection = () => {
  return (
    <div className="px-6 py-28 bg-[#FDF4EB] border-2 border-black md:px-48 lg:px-96">
      <div className="text-3xl md:text-4xl lg:text-6xl text-center font-light pb-6">
        <h3>Lorem ipsum dolor sit amet consectetur <br /> adipisicing elit. Expedita</h3>
      </div>
      <div className="text-center pb-8 text-base md:text-xl">
        <p>Lorem ipsum dolor sit, amet consectetur adipisicing elit. Sint suscipit quam, corrupti modi molestias, enim cupiditate id sunt autem numquam quia consectetur atque illo! Iusto amet laboriosam rem harum tenetur</p>
      </div>
      <div className="flex justify-center">
        <button className="border-2 border-black w-full md:w-1/2 lg:w-1/4 rounded-md py-4 bg-white font-semibold text-lg md:text-xl hover:bg-[#F0EB76]">LEARN MORE</button>
      </div>
    </div>
  );
};

export default InfoSection;
