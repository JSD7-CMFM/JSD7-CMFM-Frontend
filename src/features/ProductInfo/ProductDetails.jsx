import React from 'react';
import DetailItem from './DetailItem';

const ProductDetails = () => (
  <div className="flex justify-center items-center md:w-1/2 md:h-5/6 bg-gray-200  border-black border md:m-4 md:rounded-2xl">
    <div className="px-2 py-3 w-full">
      <div className="pb-5 text-3xl md:text-xl ">
        <h1>PUCKY The Feast Series Figures</h1>
      </div>
      <div className="pb-4">
        <p>
          Lorem ipsum dolor sit amet consectetur, adipisicing elit. Velit fugiat delectus, odio vitae hic enim dolores excepturi
        </p>
      </div>
      <div className="pb-2 text-sm font-medium">
        <h2>INCLUDES</h2>
      </div>

      <DetailItem 
        imgSrc="https://prod-eurasian-res.popmart.com/default/20240520_100549_787871____2_____1200x1200.jpg" 
        description="A whole set contains 12 blind boxes"
        size="Height about 6.9cm-9.3cm"
      />
      <DetailItem 
        imgSrc="https://prod-eurasian-res.popmart.com/default/20240520_100548_164739____3_____1200x1200.jpg" 
        description="A whole set contains 12 blind boxes"
        size="Height about 6.9cm-9.3cm"
      />
      <DetailItem 
        imgSrc="https://prod-eurasian-res.popmart.com/default/20240520_100548_659319____4_____1200x1200.jpg" 
        description="A whole set contains 12 blind boxes"
        size="Height about 6.9cm-9.3cm"
      />

      <div className="border-black border rounded-xl mt-6 mb-6 p-1 flex justify-between w-full bg-[#4BA6DE] text-white text-[12px] font-bold tracking-widest md:text-xl md:py-2 md:px-2">
        <h3 className="font-mono p-1">ADD</h3>
        <h3 className="font-mono p-1">฿380.00</h3>
      </div>
    </div>
  </div>
);

export default ProductDetails;
