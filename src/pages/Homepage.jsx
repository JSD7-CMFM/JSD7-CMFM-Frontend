import React from "react";
import VideoCarousel from "../features/carousel/components/VideoCarousel";

const Homepage = () => {
  return (
    <>
      <div>Homepage</div>
      <div className=" mx-auto w-[1200px] min-h-56 flex flex-col gap-6 py-4 px-8 bg-gray-100">
        <VideoCarousel />
      </div>
    </>
  );
};

export default Homepage;
