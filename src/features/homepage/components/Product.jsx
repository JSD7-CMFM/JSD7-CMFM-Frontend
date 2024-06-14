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
        className={`w-full h-auto border-2 border-black ${isRounded ? 'rounded-full' : 'rounded-md'}`} 
      />
      <h2 className='text-center'>{name}</h2>
    </div>
  );
};

export default Product;
