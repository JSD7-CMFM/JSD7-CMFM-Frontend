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
    name: "DIMOO x Dumbo",
    price: 35,
    description: "DIMOO x Dumbo Action Figure",
    imageUrl:
      "https://prod-eurasian-res.popmart.com/default/20240612_103708_211187____7_____1200x1200.jpg",
    imageUrl2:
      "https://prod-eurasian-res.popmart.com/default/20240612_103708_563109____5_____1200x1200.jpg",
  },
  {
    id: 4,
    name: "DIMOO x Dumbo",
    price: 45,
    description: "DIMOO x Dumbo Action Figure",
    imageUrl:
      "https://prod-eurasian-res.popmart.com/default/20240612_103708_211187____7_____1200x1200.jpg",
    imageUrl2:
      "https://prod-eurasian-res.popmart.com/default/20240612_103708_563109____5_____1200x1200.jpg",
  },
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
    <div className="grid grid-cols-4">
      {ProductList.map((product, index) => (
        <div key={product.id} className="flex">
          <div className="flex">
            <div className="border-black border rounded-xl bg-white m-2 flex-col">
              <div className="w-full p-1 flex-col relative group  ">
                <img
                  src={product.imageUrl}
                  alt={product.name}
                  className="absolute inset-0 rounded-2xl w-auto p-1 object-cover transition-opacity duration-300 opacity-100 group-hover:opacity-0"
                />
                <img
                  src={product.imageUrl2}
                  alt={product.name}
                  className="inset-0 rounded-xl w-auto object-cover transition-opacity duration-300 opacity-100 group-hover:opacity-100"
                />
              </div>
              <div className="flex-col w-full">
                <h3 className="font-mono text-black text-[12px] mt-2 ml-2 ">
                  {product.name}
                </h3>
                <h3 className="font-mono text-black text-[12px] ml-2">
                  {product.description}
                </h3>
                <div className="mx-2 flex">
                  <FaStar style={{ color: "#74C0FC" }} />
                  <FaStar style={{ color: "#74C0FC" }} />
                  <FaStar style={{ color: "#74C0FC" }} />
                  <FaStar style={{ color: "#74C0FC" }} />
                  <FaStar style={{ color: "#74C0FC" }} />
                  <h3 className="font-mono text-black text-[8px] inline-flex">
                    5.0 (99)
                  </h3>
                </div>
                <button className="btn btn-info btn-xs m-2 text-m">
                  The Monster
                </button>
                <div>
                  <Link to="productList">
                    <div className="flex items-center justify-around">
                      <div className="border-black border rounded-md m-4 p-1 flex justify-center w-4/5 bg-[#C8B2F2] hover:bg-[#F0EB76]">
                        <h3 className="text-xl text-black font-mono p-1 flex">
                          MORE DETAIL
                        </h3>
                      </div>
                    </div>
                  </Link>
                </div>
              </div>
            </div>
          </div>
        </div>
      ))}
      ;
    </div>
  );
};

export default ProductCard;
