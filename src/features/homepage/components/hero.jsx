import React from "react";
import MovingSection from "./movingText";

const Hero = () => {
  return (
    <section id="hero">
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
      className="px-4 py-12 flex flex-col items-center justify-center md:w-1/2 md:px-[98px] md:py-[120px] md:items-start"
      style={{ backgroundColor: "#b5e3d8", color: "#252222" }}
    >
      <h2 className="text-[36px]">Header</h2>
      <p className="text-center mt-4 md:text-left">
        Lorem ipsum dolor sit amet consectetur adipisicing elit. Totam esse
        labore
      </p>
      <p className="text-center md:text-left">Lorem ipsum dolor sit amet</p>
      <a
        href="#"
        className="py-[10px] px-6 mt-5 bg-white hover:bg-[#F0EB76] rounded-lg border border-black"
      >
        Button
      </a>
    </div>
  );
};

const PictureSection = () => {
  return (
    <div
      id="picture-section"
      className="md:w-1/2 border-r border-black h-[55vh] md:h-auto"
    >
      <picture>
        <source media="(min-width: 768px)" srcSet="images/hero_mock.png" />
        <img
          src="images/hero_mock_mobile.png"
          className="block md:hidden object-cover object-top h-full w-full overflow-hidden"
          alt="Hero"
        />
      </picture>
    </div>
  );
};

export default Hero;
