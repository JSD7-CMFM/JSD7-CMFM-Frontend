import React from "react";


const TotalCart = ({ cart }) => {
  const totalPrice =  cart.reduce(
    (acc, curr) => {
      return acc + (curr.price*curr.amount)
    }
    , 0
  );
  return (
    <div>
      <div className="">
        <div className="m-5 p-5 space-x-5 border border-black bg-gray-100">
          <div className="bg-slate-100 border-b border-gray-400 p-2">
            <h1 className="text-black font-san p-4 pt-[30px]">Subtotal</h1>
            <div className="flex flex-row justify-between">
              <h1>ชื่อ</h1>
              <h1> จำนวน </h1>
              <h1> ราคา </h1>
            </div>
            {cart?.map((product) => (
               <div className="flex flex-row justify-between">
                <h1> { product?.name}</h1>
              <h1> {product?.amount} </h1>
                <h1> { (product?.price*product?.amount).toFixed(2)}</h1>
            </div>
            ))}
          </div>
          <div>
            <h1 className="text-black font-san p-4">Shipping fee</h1> 
          </div>
          <div className="p-5 flex justify-around bg-slate-100">
            <h1 className="text-black font-san p-2">Total</h1>
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

export default TotalCart;

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
