import React from "react";

const OrderHistory = ({ orderHistory }) => {
  console.log(orderHistory);
  return (
    <div id="acc-order" className="">
      {orderHistory ? (
        <div className="">
          <h2 className="text-[19px] text-center">Your Order History</h2>
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
          <div className="bg-[#AAD8EE]">
            <div className="p-14 text-center">
              <h2 className="text-[22px] mb-5">Find your item</h2>
              <a
                href="#"
                className="py-[10px] px-6 bg-white hover:bg-[#F0EB76] rounded-lg border border-black"
              >
                Button
              </a>
            </div>
          </div>
        </>
      )}
    </div>
  );
};
export default OrderHistory;
