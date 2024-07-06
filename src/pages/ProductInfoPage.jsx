import React from "react";
import MainImage from "../features/ProductInfo/MainImage";
import ProductDetails from "../features/ProductInfo/ProductDetails";
import CollapsibleSection from "../features/ProductInfo/CollapsibleSection";

const ProductInfoPage = ({ setCartItems, cartItems }) => {
  return (
    <section className="bg-[#8BADD3] pt-[90px]">
      <div className="md:flex flex-col md:flex-row items-center pt-4">
        <MainImage />
        <ProductDetails setCartItems={setCartItems} cartItems={cartItems} />
      </div>
      <CollapsibleSection />
    </section>
  );
};

export default ProductInfoPage;
