import React, { useState } from "react";
import { FaStar, FaTrash } from "react-icons/fa";
import { Link } from "react-router-dom";

const ProductList = [
  {
    id: 1,
    name: "DIMOO",
    price: 15,
    description: "DIMOO By Your Side Series Figures",
    imageUrl:
      "https://prod-eurasian-res.popmart.com/default/20240612_102205_085361____4_____1200x1200.jpg",
    imageUrl2:
      "https://prod-eurasian-res.popmart.com/default/20240612_102205_584771____9_____1200x1200.jpg",
  },
  {
    id: 2,
    name: "SpongeBob",
    price: 25,
    description: "SpongeBob SquarePants Daily Quirks Series Figures",
    imageUrl:
      "https://prod-eurasian-res.popmart.com/default/20240612_102623_477916____2_____1200x1200.jpg",
    imageUrl2:
      "https://prod-eurasian-res.popmart.com/default/20240612_102623_236417____6_____1200x1200.jpg",
  },
  {
    id: 3,
    name: "CRYBABY",
    price: 45,
    description: "CRYBABY x PONYMART ",
    imageUrl: "/ProductPhotos/CRYBABY1.jpeg",
    imageUrl2: "/ProductPhotos/CRYBABY2.jpeg",
  },
  {
    id: 4,
    name: "DIMOO x Dumbo",
    price: 35,
    description: "DIMOO x Dumbo Action Figure",
    imageUrl:
      "https://prod-eurasian-res.popmart.com/default/20240612_103708_211187____7_____1200x1200.jpg",
    imageUrl2:
      "https://prod-eurasian-res.popmart.com/default/20240612_103708_563109____5_____1200x1200.jpg",
  }
];

const ProductCard = () => {
  const [quantities, setQuantities] = useState(
    Array(ProductList.length).fill(0)
  );

  const handleAddToCart = (index) => {
    const newQuantities = [...quantities];
    newQuantities[index]++;
    setQuantities(newQuantities);
  };

  return (
    <>
      <Link to="/productlist">
        <div className="grid grid-cols-4 gap-4 m-5">
          {ProductList.map((product, index) => (
            <div
              key={product._id}
              className="border border-gray-200 rounded-xl overflow-hidden relative group mb-4 pb-10 bg-white shadow-2xl w-[300px] h-[450px]"
            >
              <div className="relative group">
                <img
                  src={product.imageUrl}
                  className="absolute inset-0 rounded-2xl w-auto object-cover transition-opacity duration-300 opacity-100 group-hover:opacity-0"
                  alt={product.name}
                />
                <img
                  src={product.imageUrl2}
                  className="inset-0 rounded-xl w-auto object-cover transition-opacity duration-300 opacity-100 group-hover:opacity-100"
                  alt={product.name}
                />
              </div>
              <div className="p-4 bg-white">
                <h3 className="text-[16px] font-semibold text-gray-900 mb-2 ">
                  {product.name}
                </h3>
                <p className="text-[14px] text-gray-700 mb-2">
                  {product.description}
                </p>
                <div className="flex items-center mb-2 absolute left-4 bottom-5">
                  <FaStar style={{ color: "#74C0FC" }} />
                  <FaStar style={{ color: "#74C0FC" }} />
                  <FaStar style={{ color: "#74C0FC" }} />
                  <FaStar style={{ color: "#74C0FC" }} />
                  <FaStar style={{ color: "#74C0FC" }} />
                  <span className="text-xs ml-1">(99)</span>
                </div>
              </div>
              <Link
                to="/productlist"
                className="bg-blue-500 text-white text-[12px] font-semibold py-2 px-4 rounded-lg hover:bg-blue-600 uppercase absolute right-2 bottom-0 mb-4 ml-4"
              >
                More Detail
              </Link>
            </div>
          ))}
        </div>
      </Link>
    </>
  );
};

export default ProductCard;
