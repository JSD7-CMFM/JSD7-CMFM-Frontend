import React from "react";
import { Link } from "react-router-dom";
import { RiShoppingBag4Fill } from "react-icons/ri";

const OrderHistory = ({ orderHistory }) => {
  console.log(typeof orderHistory);
  return (
    <div id="acc-order" className="">
      {orderHistory && orderHistory.length > 0 ? (
        <div className="">
          <h2 className="text-[19px] text-center font-bold uppercase">Your Order History</h2>
          {orderHistory.map((order, index) => (
            <div
              key={order._id}
              className="order py-2 bg-slate-100 rounded-xl my-2"
            >
              <div className="flex justify-between px-2">
                <h3 className="">Order: {index + 1}</h3>
                <h3 className="">Reference ID: {order._id}</h3>
              </div>
              <div className="flex justify-between p-2">
                <p>Status: {order.status}</p>
                <p>
                  Purchase Time: {new Date(order.updated_at).toLocaleString()}
                </p>
              </div>
              <div className="cart-products py-4">
                {order.cart_products.map((product, index) => (
                  <div key={product._id} className="product flex">
                    <div className="w-[30px] text-center">{index + 1}</div>
                    <div className="flex w-full justify-around">
                      <div>
                        <p>Name: {product.name}</p>
                        <p>Price: {product.price}</p>
                        <p>Amount: {product.amount}</p>
                      </div>
                      <img
                        src={product.product_img}
                        alt={product.name}
                        className="w-[100px]"
                      />
                    </div>
                  </div>
                ))}
              </div>
            </div>
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
                    to="/productlist" className="py-2 px-6 bg-white hover:bg-yellow-300 rounded-lg border border-black inline-block">
                    SHOP NOW
                  </Link>
                  <div className="flex justify-center relative m-3" >
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
