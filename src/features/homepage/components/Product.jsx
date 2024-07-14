import React, { useState } from 'react';

const Product = ({ imageUrl, hoverImageUrl, name, isRounded }) => {
  const [isHovered, setIsHovered] = useState(false);

  return (
    <div 
      className="product-container"
      onMouseEnter={() => setIsHovered(true)} 
      onMouseLeave={() => setIsHovered(false)}
    >
      <img 
        src={isHovered ? hoverImageUrl : imageUrl} 
        alt={name} 
        className={`w-full h-auto border-2 border-white ${isRounded ? 'rounded-full' : 'rounded-full'}`} 
      />
      <h2 className='text-center p-5 text-[20px] text-black'>{name}</h2>
    </div>
  );
};

export default Product;
