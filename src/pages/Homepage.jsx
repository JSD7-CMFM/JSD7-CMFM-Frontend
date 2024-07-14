import React from "react";
import Hero from "../features/homepage/components/hero.jsx";
import ShowProduct from "../features/homepage/components/ShowProduct.jsx";
import ProductCard from "../features/homepage/components/ProductCard.jsx";


const Homepage = () => {
  return (
    <>
      <ProductCard />
      <Hero />
      <ShowProduct />
    </>
  );
};

export default Homepage;
