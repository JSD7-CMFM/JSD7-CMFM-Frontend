import React from "react";
import { Link } from "react-router-dom";
import MovingSectionAlter from "./movingTextAlter";
import MovingSection from "./movingText";

const Hero = () => {
  return (
    <section id="hero" className="bg-[#b5e3d8]">
      <MovingSectionAlter />
      <div id="main-container" className="md:flex md:flex-row-reverse">
        <TextSection />
        <PictureSection />
      </div>
      <MovingSection />
    </section>
  );
};

const TextSection = () => {
  return (
    <div
      id="text-section"
      className="px-4 py-12 flex flex-col items-center justify-center md:w-1/2 md:px-[98px] md:py-[120px] md:items-start bg-[#b5e3d8] text-[#252222]"
    >
      <h2 className="text-[36px]">PONY MART</h2>
      <p className="text-center mt-4 md:text-left">
        At Pony Mart, you'll find carefully curated collections featuring
        products from leading brands and independent artists, including special
        and limited edition collectibles. We stand out for our wide variety of
        styles and price ranges, guaranteed authenticity and quality,
        user-friendly shopping experience, and efficient nationwide shipping.
      </p>
      <div className="flex">
        <Link
          to="productList"
          className="py-[10px] px-6 mt-5 bg-white hover:bg-[#F0EB76] rounded-lg border-2 border-white mr-8"
        >
          More Products
        </Link>
        <Link
          to="random"
          className="py-[10px] px-6 mt-5 bg-white hover:bg-[#F0EB76] rounded-lg border-2 border-white"
        >
          Lucky Draw
        </Link>
      </div>
    </div>
  );
};

const PictureSection = () => {
  return (
    <div
      id="picture-section"
      className="md:w-1/2 border-r border-white h-[55vh] md:h-auto"
    >
      <picture>
        <img
          src="https://prod-eurasian-res.popmart.com/default/20240620_111032_499440_____02_____1200x648.jpg?x-oss-process=image/format,webp"
          className="block md:hidden object-cover object-top h-full w-full overflow-hidden"
          alt="Hero"
        />
        <img
          src="https://prod-eurasian-res.popmart.com/default/20240620_111032_499440_____02_____1200x648.jpg?x-oss-process=image/format,webp"
          className="hidden md:block object-cover object-top h-full w-full overflow-hidden"
          alt="Hero"
        />
      </picture>
    </div>
  );
};

export default Hero;
