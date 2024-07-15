import React from "react";
import "react-responsive-carousel/lib/styles/carousel.min.css";
import { Link } from "react-router-dom";
import { TbHorseToy } from "react-icons/tb";

const images = [
  "https://prod-thailand-res.popmart.com/default/20240710_104247_360649____5_____1200x1200.jpg",
  "https://prod-thailand-res.popmart.com/default/20240710_104247_704359____4_____1200x1200.jpg",
  "https://prod-thailand-res.popmart.com/default/20240710_104247_563249____6_____1200x1200.jpg",
];

const ProductCard = () => {
  return (
    <>
      <div className="relative pt-[120px] overflow-hidden">
        <Link to="/productlist">
          <div className="flex items-center">
            <h1 className="pl-5 text-6xl font-bold text-[#F07287]">
              NEW ARRIVALS
            </h1>
            <TbHorseToy
              size={80}
              style={{ color: "#F07287" }}
              className="animate-bounce ml-5"
            />
          </div>
        </Link>
        <div className="w-full overflow-hidden">
          <div className="flex w-[200%] animate-rightToLeft">
            {images.map((src, index) => (
              <div key={index} className="w-1/5 h-[720px] flex-shrink-0">
                <img
                  src={src}
                  alt={`Slide ${index + 1}`}
                  className="object-cover h-full w-full"
                />
              </div>
            ))}
            {images.map((src, index) => (
              <div
                key={index + images.length}
                className="w-1/5 h-[720px] flex-shrink-0"
              >
                <img
                  src={src}
                  alt={`Slide ${index + 1}`}
                  className="object-cover h-full w-full"
                />
              </div>
            ))}
          </div>
        </div>
      </div>
    </>
  );
};

export default ProductCard;
