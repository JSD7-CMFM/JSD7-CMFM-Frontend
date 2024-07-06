import React, { useState, useEffect } from "react";

// const CartProduct = [
//   {
//     id: 1,
//     name: "DIMOO",
//     price: 25,
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
//     description: "DIMOO x Dumbo Action Figure",
//     imageUrl:
//       "https://prod-eurasian-res.popmart.com/default/20240612_103708_211187____7_____1200x1200.jpg",
//     imageUrl2:
//       "https://prod-eurasian-res.popmart.com/default/20240612_103708_563109____5_____1200x1200.jpg",
//   },
// ];

const CartList = ({ cartItems }) => {
  const [totalPrice, setTotalPrice] = useState(0);

  useEffect(() => {
    // Calculate total price whenever cartItems change
    const newTotalPrice = cartItems.reduce(
      (acc, product) => acc + product.price * product.quantity,
      0
    );
    setTotalPrice(newTotalPrice);
  }, [cartItems]);
  return (
    <div>
      <div className="">
        <div className="m-5 p-5 space-x-5 border border-black bg-gray-100">
          <div className="bg-slate-100 border-b border-gray-400 p-2">
            <h1 className="text-black font-san p-4 pt-[30px]">Subtotal</h1>
            <h1 className="text-black font-san p-4">Shipping fee</h1>
          </div>
          <div className="p-5 flex justify-around bg-slate-100">
            <h1 className="text-black font-san p-2">Total(1)</h1>
            <h1 className="text-black font-san p-2">
              ฿{totalPrice.toFixed(2)}{" "}
            </h1>
          </div>
          <div className="flex justify-center bg-slate-100 p-2">
            <button className="btn btn-error">Check Out</button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default CartList;

/* const TotalCart = () => {
  return (
    <div className="">
      <div className="m-5 p-5 space-x-5 border border-black bg-gray-100">
        <div className="bg-slate-100 border-b border-gray-400 p-2">
          <h1 className="text-black font-san p-4 pt-[30px]">Subtotal</h1>
          <h1 className="text-black font-san p-4">Shipping fee</h1>
        </div>
        <div className="p-5 flex justify-around bg-slate-100">
          <h1 className="text-black font-san p-2">Total(1)</h1>
          <h1 className="text-black font-san p-2">฿26,390.00</h1>
        </div>
        <div className="flex justify-center bg-slate-100 p-2">
          <button className="btn btn-error">Check Out</button>
        </div>
      </div>
    </div>
  );
};

export default TotalCart; */
