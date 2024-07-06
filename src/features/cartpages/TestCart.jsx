import React, { useState } from "react";
import { FaStar, FaTrash } from "react-icons/fa";

const CartList = ({ cartItems, setCartItems }) => {
  // const [cart, setCart] = useState([
  //   {
  //     id: 1,
  //     name: "DIMOO",
  //     price: 25,
  //     quantity: 1,
  //     description: "DIMOO By Your Side Series Figures",
  //     imageUrl:
  //       "https://prod-eurasian-res.popmart.com/default/20240612_102205_085361____4_____1200x1200.jpg",
  //     imageUrl2:
  //       "https://prod-eurasian-res.popmart.com/default/20240612_102205_584771____9_____1200x1200.jpg",
  //   },
  //   {
  //     id: 2,
  //     name: "SpongeBob",
  //     price: 15,
  //     quantity: 1,
  //     description: "SpongeBob SquarePants Daily Quirks Series Figures",
  //     imageUrl:
  //       "https://prod-eurasian-res.popmart.com/default/20240612_102623_477916____2_____1200x1200.jpg",
  //     imageUrl2:
  //       "https://prod-eurasian-res.popmart.com/default/20240612_102623_236417____6_____1200x1200.jpg",
  //   },
  //   {
  //     id: 3,
  //     name: "DIMOO x Dumbo",
  //     price: 35,
  //     quantity: 1,
  //     description: "DIMOO x Dumbo Action Figure",
  //     imageUrl:
  //       "https://prod-eurasian-res.popmart.com/default/20240612_103708_211187____7_____1200x1200.jpg",
  //     imageUrl2:
  //       "https://prod-eurasian-res.popmart.com/default/20240612_103708_563109____5_____1200x1200.jpg",
  //   },
  // ]);

  const handleQuantityChange = (productId, newQuantity) => {
    if (newQuantity < 1) {
      newQuantity = 1; // Ensure quantity doesn't go below 1
    }
    setCartItems((prevCart) =>
      prevCart.map((item) =>
        item.id === productId ? { ...item, quantity: newQuantity } : item
      )
    );
  };

  return (
    <div>
      {cartItems.map((product) => (
        <div key={product.id}>
          <div className="w-full rounded-md m-3 border border-gray-600">
            <label className="label cursor-pointer">
              <input
                type="checkbox"
                defaultChecked
                className="checkbox checkbox-md"
              />
            </label>
            <div className="border-black border rounded-xl bg-white m-2 flex max-h-[350px]">
              <div className="w-full p-1 flex-col relative group">
                <img
                  src={product.imageUrl}
                  alt={product.name}
                  className="absolute inset-0 rounded-2xl p-1 object-cover transition-opacity duration-300 opacity-100 group-hover:opacity-0 w-full h-full"
                />
                <img
                  src={product.Info1}
                  alt={product.name}
                  className="inset-0 rounded-xl object-cover transition-opacity duration-300 opacity-100 group-hover:opacity-100 w-full h-full"
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
                <button className="btn btn-info btn-xs m-2 text-[8px]">
                  {product.category}
                </button>
                <div>
                  <div className="flex items-center">
                    <div className="border-black border rounded-md m-4 p-1 flex justify-between w-4/5">
                      <h3 className="text-[10px] text-black font-mono p-1">
                        ADD
                      </h3>
                      <div className="flex items-center">
                        <button
                          onClick={() =>
                            handleQuantityChange(
                              product.id,
                              product.quantity - 1
                            )
                          }
                          className="px-2 border rounded-l text-black border-black"
                        >
                          -
                        </button>
                        <h3 className="text-[10px] text-black font-mono p-1 ">
                          {product.quantity}
                        </h3>
                        <button
                          onClick={() =>
                            handleQuantityChange(
                              product.id,
                              product.quantity + 1
                            )
                          }
                          className="px-2 border rounded-r text-black border-black"
                        >
                          +
                        </button>
                      </div>
                    </div>
                    <div className="w-1/5 justify-around space-l-5">
                      <FaTrash
                        className="fa-solid fa-trash fa-2xl py-10"
                        style={{ color: "#ff6251" }}
                      />
                    </div>
                  </div>
                </div>
                <div className="border-black border rounded-md m-4 p-1 flex justify-between w-4/5">
                  <h3 className="text-[10px] text-black font-mono p-1">
                    Total Price
                  </h3>
                  <h3 className="text-[10px] text-black font-mono p-1 ">
                    ${product.price * product.quantity}
                  </h3>
                </div>
              </div>
            </div>
          </div>
        </div>
      ))}
    </div>
  );
};

export default CartList;
