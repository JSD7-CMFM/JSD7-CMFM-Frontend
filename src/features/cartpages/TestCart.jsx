import React, { useState, useEffect } from "react";
import axiosInstance from "../../config/myAPIs";
import { FaStar, FaTrash } from "react-icons/fa";

const CartList = () => {
  const [cart, setCart] = useState([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const fetchCart = async () => {
      try {
        const orderId = "668cf42249883037ca1c891a";
        const response = await axiosInstance.get(`/orders/${orderId}`);
        setCart(response.data.cart_products); 
        setLoading(false);
      } catch (error) {
        console.error('Error fetching cart:', error);
        setLoading(false);
      }
    };

    fetchCart();
  }, []);

  const handleQuantityChange = (productId, newQuantity) => {
    // ฟังก์ชันนี้ยังไม่ได้ถูกนิยาม ควรเพิ่มลอจิกการอัปเดตปริมาณสินค้าที่นี่
    console.log(`Update quantity for product ${productId} to ${newQuantity}`);
  };

  if (loading) {
    return <div>Loading...</div>;
  }

  return (
    <div>
      {cart.length === 0 ? (
        <div>No items in cart.</div>
      ) : (
        cart.map((product) => (
          <div key={product._id}>
            <div className="w-full border rounded-md m-3 border border-gray-600">
              <label className="label cursor-pointer">
                <input
                  type="checkbox"
                  defaultChecked
                  className="checkbox checkbox-md"
                />
              </label>
              <div className="border-black border rounded-xl bg-white m-2 flex">
                <div className="w-full p-1 flex-col relative group">
                  <img
                    src={product.product_img}
                    alt={product.name}
                    className="absolute inset-0 rounded-2xl w-auto p-1 object-cover transition-opacity duration-300 opacity-100 group-hover:opacity-0"
                  />
                  <img
                    src={product.product_img}
                    alt={product.name}
                    className="inset-0 rounded-xl w-auto object-cover transition-opacity duration-300 opacity-100 group-hover:opacity-100"
                  />
                </div>
                <div className="flex-col w-full">
                <h3 className="font-mono text-black text-[12px] mt-2 ml-2">
                  {product.name}
                </h3>

                  <div className="mx-2 flex">
                    {[...Array(5)].map((_, index) => (
                      <FaStar key={index} style={{ color: "#74C0FC" }} />
                    ))}
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
                                product._id,
                                product.amount - 1
                              )
                            }
                            className="px-2 border rounded-l text-black border-black"
                          >
                            -
                          </button>
                          <h3 className="text-[10px] text-black font-mono p-1 ">
                            {product.amount}
                          </h3>
                          <button
                            onClick={() =>
                              handleQuantityChange(
                                product._id,
                                product.amount + 1
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
                      ${product.price * product.amount}
                    </h3>
                  </div>
                </div>
              </div>
            </div>
          </div>
        ))
      )}
    </div>
  );
};

export default CartList;

