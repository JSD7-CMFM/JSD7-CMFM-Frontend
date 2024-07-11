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
        <div className="m-5 p-5 space-x-5 bg-gray-100  border-black">
          <div className=" p-2 border border-black rounded-xl bg-white">
            <h1 className="text-gray-700 font-san text-[24px] p-4 pt-[px] text-center font-bold uppercase">Subtotal</h1>
            <div className="overflow-x-auto " >
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
                      <td className="py-3 px-6 text-center">{product?.amount}</td>
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
                  <td style={{ width: "35%" }} className="py-3 px-6 text-left bg-slate-100 uppercase text-sm  leading-normal font-bold  hover:bg-gray-200">Shipping fee</td>
                      <td className="py-3 px-6 text-right"> ฿{totalPrice.toFixed(2)*0.}</td>
                    </tr>
                    <tr className="border-b border-gray-300  hover:bg-gray-100">
                  <td style={{ width: "35%" }} className="py-3 px-6 text-left bg-slate-100 uppercase text-sm  leading-normal font-bold  hover:bg-gray-200">Total</td>
                  <td className="py-3 px-6 text-right">฿{totalPrice.toFixed(2)}{" "}</td>
                    </tr>
                  </tbody>
                </table>
              </div>
          </div>
          </div>
          <div className="flex justify-center bg-slate-100 p-2 mt-5">
            <button className="btn rounded-xl btn-error text-gray-800 uppercase text-[18px]">Check Out</button>
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
