import React from 'react';
import Product from './Product';

const ProductsList = () => {
  return (
    <div className="md:flex justify-center md:gap-16 lg:gap-32 md:py-20">
      <Product 
        imageUrl="https://prod-eurasian-res.popmart.com/default/20240611_174121_313824____1_____1200x1200.jpg"
        hoverImageUrl="https://prod-eurasian-res.popmart.com/default/20240611_174121_139893____2_____1200x1200.jpg"
        name="CRYBABY Monster Tears Series"
        isRounded={false}
      />
      <Product 
        imageUrl="https://prod-eurasian-res.popmart.com/default/20240513_102228_797207____1_____1200x1200.jpg"
        hoverImageUrl="https://prod-eurasian-res.popmart.com/default/20240513_102228_528177____2_____1200x1200.jpg"
        name="Zsiga Let It Be Series"
        isRounded={true}
      />
      <Product 
        imageUrl="https://prod-eurasian-res.popmart.com/default/20240513_105200_933392____5_____1200x1200.jpg"
        hoverImageUrl="https://prod-eurasian-res.popmart.com/default/20240513_105210_919065____3_____1200x1200.jpg"
        name="Zsiga Guard Figure"
        isRounded={false}
      />
    </div>
  );
};

export default ProductsList;
