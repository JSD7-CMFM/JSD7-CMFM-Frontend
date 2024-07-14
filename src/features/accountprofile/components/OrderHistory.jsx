import React from "react";
import { Link } from "react-router-dom";
import { RiShoppingBag4Fill } from "react-icons/ri";

const OrderHistory = ({ orderHistory }) => {
  console.log(typeof orderHistory);
  return (
    <div id="acc-order" className="">
      {orderHistory && orderHistory.length > 0 ? (
        <div className="">
          <h2 className="text-[19px] text-center font-bold uppercase">
            Your Order History
          </h2>
          {orderHistory.map((order, index) => (
            <table className="w-full border-collapse my-4 bg-pink-100 rounded-lg overflow-hidden">
              <thead className="bg-pink-200">
                <tr>
                  <th className="px-4 py-2 text-left" colSpan="2">
                    Order: {index + 1}
                  </th>
                  <th className="px-4 py-2 text-right" colSpan="2">
                    Reference ID: {order._id}
                  </th>
                </tr>
                <tr className="bg-pink-150">
                  <th className="px-4 py-2 text-left" colSpan="2">
                    Status: {order.status}
                  </th>
                  <th className="px-4 py-2 text-right" colSpan="2">
                    Purchase Time: {new Date(order.updated_at).toLocaleString()}
                  </th>
                </tr>
              </thead>
              <tbody>
                {order.cart_products.map((product, index) => (
                  <tr
                    key={product._id}
                    className={index % 2 === 0 ? "bg-pink-50" : "bg-pink-100"}
                  >
                    <td className="px-4 py-2 text-center w-[30px]">
                      {index + 1}
                    </td>
                    <td className="px-4 py-2">
                      <p>Name: {product.name}</p>
                      <p>Price: {product.price}</p>
                      <p>Amount: {product.amount}</p>
                    </td>
                    <td className="px-4 py-2 text-right">
                      <img
                        src={product.product_img}
                        alt={product.name}
                        className="w-[100px] inline-block"
                      />
                    </td>
                  </tr>
                ))}
              </tbody>
            </table>
          ))}
        </div>
      ) : (
        <>
          <h2 className="mb-8 px-7 text-[19px]">
            Looks like you haven't placed any orders yet.
          </h2>
          <div className="bg-[#AAD8EE] rounded-xl m-5 w-auto">
            <div className="p-14 text-center">
              <h2 className="text-[22px] mb-5">Find your item</h2>
              <div>
                <Link
                  to="/productlist"
                  className="py-2 px-6 bg-white hover:bg-yellow-300 rounded-lg border border-black inline-block"
                >
                  SHOP NOW
                </Link>
                <div className="flex justify-center relative m-3">
                  <RiShoppingBag4Fill size={200} color="#ffffff" />
                </div>
              </div>
            </div>
          </div>
        </>
      )}
    </div>
  );
};
export default OrderHistory;
