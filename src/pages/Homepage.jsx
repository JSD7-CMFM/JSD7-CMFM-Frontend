import React from "react";
import Hero from "../features/homepage/components/hero.jsx";
import ShowProduct from "../features/homepage/components/ShowProduct.jsx";
import ProductCard from "../features/homepage/components/ProductCard.jsx";
import VideoPlayer from "../features/carousel/components/VideoCarousel.jsx";

const Homepage = () => {
  return (
    <>
      {/* <VideoPlayer /> */}
      <ProductCard />
      <Hero />
      <ShowProduct />
    </>
  );
};

export default Homepage;
