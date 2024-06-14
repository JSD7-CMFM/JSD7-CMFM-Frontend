import React from "react";
import { FaStar, FaTrash } from "react-icons/fa"; // Import FaStar and FaTrash icons

const CartCard = () => {
  return (
    <div className="bg-white m-2 flex">
      <div className="w-auto p-1 flex-col relative group">
        <img
          src="/ProductPhotos/CRYBABY1.jpeg"
          className="absolute inset-0 rounded-2xl w-auto p-1 object-cover transition-opacity duration-300 opacity-100 group-hover:opacity-0"
          alt="Product Image"
        />
        <img
          src="/ProductPhotos/CRYBABY2.jpeg"
          className="inset-0 rounded-xl w-auto object-cover transition-opacity duration-300 opacity-100 group-hover:opacity-100"
          alt="Product Image"
        />
      </div>
      <div className="flex-col w-full">
        <h3 className="font-mono text-black text-[12px] mt-2 ml-2 ">
          MEGA LABUBU TEC 1000%
        </h3>
        <h3 className="font-mono text-black text-[12px] ml-2">All About Us</h3>
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
        <button className="btn btn-info btn-xs m-2 text-[8px]">
          The Monster
        </button>
        <div className="flex items-center">
          <div className="border-black border rounded-md m-4 p-1 flex justify-between w-4/5">
            <h3 className="text-[10px] text-black font-mono p-1">ADD</h3>
            <h3 className="text-[10px] text-black font-mono p-1 ">
              ฿26,390.00
            </h3>
          </div>
          <div className="w-1/5 justify-around space-l-5">
            <FaTrash
              className="fa-solid fa-trash fa-2xl py-10"
              style={{ color: "#ff6251" }}
            />
          </div>
        </div>
      </div>
    </div>
  );
};

export default CartCard;
