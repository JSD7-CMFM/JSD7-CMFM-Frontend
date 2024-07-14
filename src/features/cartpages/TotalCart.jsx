import React from "react";
import { getCartState } from "../../utils/localStorage.js";
import { updateOrder } from "../../apis/orders.js";

const TotalCart = ({ cart, totalPrice, checkoutHandler }) => {
  return (
    <div>
      <div className="">
        <div className="m-5 p-5 space-x-5 bg-gray-100  border-black">
          <div className=" p-2 border border-border-400 rounded-xl bg-white shadow-md">
            <h1 className="text-gray-700 font-san text-[24px] p-4 pt-[px] text-center font-bold uppercase">
              Subtotal
            </h1>
            <div className="overflow-x-auto ">
              <table className="min-w-full bg-white border-collapse border-gray-300 shadow-md rounded-lg overflow-hidden">
                <thead>
                  <tr className="bg-gray-200 text-gray-700 uppercase text-sm leading-normal">
                    <th className="py-3 px-6 text-left">Product Name</th>
                    <th className="py-3 px-6 text-left">Quantity</th>
                    <th className="py-3 px-6 text-left">Total Price</th>
                  </tr>
                </thead>
                <tbody className="text-gray-600 text-sm font-light">
                  {cart?.map((product, index) => (
                    <tr
                      key={index}
                      className="border-b border-gray-200 hover:bg-gray-100"
                    >
                      <td className="py-3 px-6 text-left whitespace-nowrap">
                        {product?.name}
                      </td>
                      <td className="py-3 px-6 text-center">
                        {product?.amount}
                      </td>
                      <td className="py-3 px-6 text-left">
                        ฿{(product?.price * product?.amount).toFixed(2)}
                      </td>
                    </tr>
                  ))}
                </tbody>
              </table>
            </div>
            <div className="mt-2 pt-2">
              <div className="overflow-x-auto">
                <table className="min-w-full bg-white border-collapse border-gray-300 shadow-md rounded-lg overflow-hidden mb-4 uppercase">
                  <tbody className="text-gray-600 text-sm font-light">
                    <tr className="border-b border-gray-300  hover:bg-gray-100">
                      <td
                        style={{ width: "35%" }}
                        className="py-3 px-6 text-left bg-slate-100 uppercase text-sm  leading-normal font-bold  hover:bg-gray-200"
                      >
                        Shipping fee
                      </td>
                      <td className="py-3 px-6 text-right">
                        {" "}
                        ฿{totalPrice.toFixed(2) * 0}
                      </td>
                    </tr>
                    <tr className="border-b border-gray-300  hover:bg-gray-100">
                      <td
                        style={{ width: "35%" }}
                        className="py-3 px-6 text-left bg-slate-100 uppercase text-sm  leading-normal font-bold  hover:bg-gray-200"
                      >
                        Total
                      </td>
                      <td className="py-3 px-6 text-right">
                        ฿{totalPrice.toFixed(2)}{" "}
                      </td>
                    </tr>
                  </tbody>
                </table>
              </div>
            </div>
          </div>
          <div className="flex justify-center bg-slate-100 p-2 mt-5">
            <button
              className="btn rounded-xl btn-error text-gray-800 uppercase text-[18px]"
              onClick={checkoutHandler}
            >
              Check Out
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default TotalCart;
