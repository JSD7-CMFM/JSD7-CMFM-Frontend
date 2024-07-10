import { useState, useEffect } from "react";
import DetailItem from "./DetailItem";
import { Link, useParams } from "react-router-dom";
import axiosInstance from "../../config/myAPIs"; // Ensure axiosInstance is imported
import { getCartState, getId } from "../../utils/localStorage.js";
import { createOrder, updateOrder } from "../../apis/orders.js";

const ProductDetails = ({ products }) => {
  const [loading, setLoading] = useState(true);
  const [quantity2, setQuantity2] = useState(1);
  const [selectedProduct, setSelectedProduct] = useState(null);

  const handleSubmit = async (event) => {
    event.preventDefault();
    if (!products) {
      console.error("product is null");
      return;
    }

    try {
      const userId = getId();
      // Create the new cart product object
      const newCartProduct = {
        product_id: products._id,
        amount: quantity2,
        name: products.name,
        // category: products.category,
        // description: products.description,
        // price: products.price,
        // product_img: products.product_img,
      };

      const orderId = getCartState();
      console.log("orderId:", orderId);
      if (orderId === "No_cart") {
        const response = await createOrder({
          user_id: userId,
          cart_products: [newCartProduct],
        });
        console.log("Order created successfully:", response.data);
      } else {
        const response = await updateOrder(orderId, newCartProduct);
        console.log("Order update successfully:", response.data);
      }
    } catch (error) {
      console.error("Error updating order:", error);
      if (error.response) {
        console.error("Server responded with:", error.response.data);
      }
    }
  };
  // const response = await axiosInstance.patch(`/orders/${orderId}`, {
  //   $push: { cart_products: newCartProduct },
  // });

  // console.log("Order updated successfully:", response.data);

  const incrementQuantity2 = () => {
    setQuantity2((prevQuantity) => prevQuantity + 1);
  };

  const decrementQuantity2 = () => {
    setQuantity2((prevQuantity) => (prevQuantity > 1 ? prevQuantity - 1 : 1));
  };
  if (!products) {
    return <div>Loading...</div>;
  }

  const totalPrice2 = (quantity2 * products.price).toFixed(2);
  const combinedTotalPrice = parseFloat(totalPrice2).toFixed(2);

  return (
    <div className="flex justify-center items-center md:p-8 bg-gray-200 border-black border md:m-4 rounded-2xl">
      <div className="px-2 py-3 w-full md:h-full">
        <div className="pb-5 text-3xl md:text-xl md:font-bold">
          <h1>{products.name}</h1>
        </div>
        <div className="pb-4">
          <p>{products.description}</p>
        </div>

        <div className="pb-2 text-sm font-medium">{/* <h2>SINGLE</h2> */}</div>
        <DetailItem
          imgSrc={products.product_img}
          type={products.type}
          description={products.description}
          category={products.category}
        />
        <div className="mt-6 mb-6 p-1 flex justify-between items-center w-full">
          <div className="flex items-center">
            <button
              onClick={decrementQuantity2}
              className="px-2 py-1 border border-black rounded-md"
            >
              -
            </button>
            <span className="mx-4">{quantity2}</span>
            <button
              onClick={incrementQuantity2}
              className="px-2 py-1 border border-black rounded-md"
            >
              +
            </button>
          </div>
          <div className="font-bold text-m">Total: ฿{totalPrice2}</div>
        </div>
        <div className="border-black border rounded-xl p-1 flex justify-between w-full bg-[#4BA6DE] text-white text-[12px] font-bold tracking-widest md:text-l md:py-2 md:px-2">
          <form onSubmit={handleSubmit}>
            <button className="font-mono p-1">Add to cart</button>
            <Link to="/cart"></Link>
          </form>
          <h3 className="font-mono p-1">฿{combinedTotalPrice}</h3>
        </div>
      </div>
    </div>
  );
};

export default ProductDetails;
