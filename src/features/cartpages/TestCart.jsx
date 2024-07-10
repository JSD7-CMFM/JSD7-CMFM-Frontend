import React, { useState, useEffect } from "react";
import axiosInstance from "../../config/myAPIs";
import { FaStar, FaTrash } from "react-icons/fa";
import { getCartState } from "../../utils/localStorage.js";

const CartList = ({ setTotalPrice }) => {
  const [cart, setCart] = useState([]);
  const [loading, setLoading] = useState(true);
  const [selectedItems, setSelectedItems] = useState([]);

  useEffect(() => {
    const fetchCart = async () => {
      try {
        const orderId = getCartState();
        const response = await axiosInstance.get(`/orders/${orderId}`);
        setCart(response.data.cart_products);
        setSelectedItems(response.data.cart_products.map(product => product._id));
        setLoading(false);
      } catch (error) {
        console.error('Error fetching cart:', error);
        setLoading(false);
      }
    };

    fetchCart();
  }, []);

  useEffect(() => {
    const total = cart.reduce((acc, product) => {
      if (selectedItems.includes(product._id)) {
        return acc + product.price * product.amount;
      }
      return acc;
    }, 0);
    setTotalPrice(total);
  }, [selectedItems, cart, setTotalPrice]);

  const handleQuantityChange = async (productId, newQuantity) => {
    try {
      const updatedCart = cart.map(product => {
        if (product._id === productId) {
          return { ...product, amount: newQuantity };
        }
        return product;
      });
      setCart(updatedCart);

      await axiosInstance.patch(`/products/${productId}`, { amount: newQuantity });
    } catch (error) {
      console.error(`Error updating quantity for product ${productId}:`, error);
    }
  };

  const handleSelectItem = (productId) => {
    if (selectedItems.includes(productId)) {
      setSelectedItems(selectedItems.filter(id => id !== productId));
    } else {
      setSelectedItems([...selectedItems, productId]);
    }
  };

  const handleSelectAll = () => {
    if (selectedItems.length === cart.length) {
      setSelectedItems([]);
    } else {
      setSelectedItems(cart.map(product => product._id));
    }
  };

  if (loading) {
    return <div>Loading...</div>;
  }

  return (
    <div>
      <div className="flex items-center mb-4">
        <input
          type="checkbox"
          checked={selectedItems.length === cart.length}
          onChange={handleSelectAll}
          className="checkbox checkbox-md"
        />
        <span className="ml-2">Select All</span>
      </div>
      {cart.length === 0 ? (
        <div>No items in cart.</div>
      ) : (
        cart.map((product) => (
          <div key={product._id} className="w-full border rounded-md m-3 border-gray-600">
            <label className="label cursor-pointer">
              <input
                type="checkbox"
                checked={selectedItems.includes(product._id)}
                onChange={() => handleSelectItem(product._id)}
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
                <h3 className="font-mono text-black text-[12px] mt-2 ml-2">{product.name}</h3>
                <div className="mx-2 flex">
                  {[...Array(5)].map((_, index) => (
                    <FaStar key={index} style={{ color: "#74C0FC" }} />
                  ))}
                  <h3 className="font-mono text-black text-[8px] inline-flex">5.0 (99)</h3>
                </div>
                <button className="btn btn-info btn-xs m-2 text-[8px]">{product.category}</button>
                <div>
                  <div className="flex items-center">
                    <div className="border-black border rounded-md m-4 p-1 flex justify-between w-4/5">
                      <h3 className="text-[10px] text-black font-mono p-1">ADD</h3>
                      <div className="flex items-center">
                        <button
                          onClick={() => handleQuantityChange(product._id, product.amount - 1)}
                          className="px-2 border rounded-l text-black border-black"
                        >
                          -
                        </button>
                        <h3 className="text-[10px] text-black font-mono p-1 ">{product.amount}</h3>
                        <button
                          onClick={() => handleQuantityChange(product._id, product.amount + 1)}
                          className="px-2 border rounded-r text-black border-black"
                        >
                          +
                        </button>
                      </div>
                    </div>
                    <div className="w-1/5 justify-around space-l-5">
                      <FaTrash className="fa-solid fa-trash fa-2xl py-10" style={{ color: "#ff6251" }} />
                    </div>
                  </div>
                </div>
                <div className="border-black border rounded-md m-4 p-1 flex justify-between w-4/5">
                  <h3 className="text-[10px] text-black font-mono p-1">Price</h3>
                  <h3 className="text-[10px] text-black font-mono p-1 ">${product.price}</h3>
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