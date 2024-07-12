import React from "react";
import { getCartState } from "../../utils/localStorage.js";
import { updateOrder } from "../../apis/orders.js";

const TotalCart = ({ cart, totalPrice, checkoutHandler }) => {
  return (
    <div>
      <div className="">
        <div className="m-5 p-5 space-x-5 border border-black bg-gray-100">
          <div className="bg-slate-100 border-b border-gray-400 p-2">
            <h1 className="text-black font-san p-4 pt-[30px]">Subtotal</h1>
            <div className="flex flex-row justify-between">
              <h1> ชื่อ </h1>
              <h1> จำนวน </h1>
              <h1> ราคา </h1>
            </div>
            {cart?.map((product) => (
              <div
                key={product.product_id}
                className="flex flex-row justify-between"
              >
                <h1> {product?.name}</h1>
                <h1> {product?.amount} </h1>
                <h1> {(product?.price * product?.amount).toFixed(2)}</h1>
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
            <button className="btn btn-error" onClick={checkoutHandler}>
              Check Out
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default TotalCart;
