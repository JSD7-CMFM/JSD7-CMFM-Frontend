import React, { useEffect, useState } from "react";
import appAPI from "../../apis/products.js";
import { getId, getCartState } from "../../utils/localStorage.js";
import { createOrder, updateOrder } from "../../apis/orders.js";
import ModalRandomAddToCart from "./ModalRandomAddToCart.jsx";
import ReactCardFlip from "react-card-flip";

const Random = () => {
  const [filteredProducts, setFilteredProducts] = useState([]);
  const [selectedProduct, setSelectedProduct] = useState(null);
  const [isAnimating, setIsAnimating] = useState(false);
  const [open, setOpen] = useState(false);

  const handleOpen = () => setOpen(true);
  const handleClose = () => setOpen(false);

  const fetchData = async () => {
    const filters = {
      search: "",
      page: 1,
      limit: 30,
    };
    try {
      const response = await appAPI.fetchProducts(filters);
      const productsData = response.data.response;
      setFilteredProducts(
        productsData.filter((product) => product.type === "Single")
      );
    } catch (error) {
      console.error("Error fetching products:", error);
    }
  };

  useEffect(() => {
    fetchData();
  }, []);

  const getRandomProduct = () => {
    if (filteredProducts.length === 0) return;
    setIsAnimating(true);
    const randomIndex = Math.floor(Math.random() * filteredProducts.length);
    setTimeout(() => {
      setSelectedProduct(filteredProducts[randomIndex]);
      setIsAnimating(false);
    }, 2000);
  };

  const [isFlipped, setIsFlipped] = useState(false);

  const handleClick = (e) => {
    e.preventDefault();
    setIsFlipped(!isFlipped);
  };

  const addToCart = async (product) => {
    const userId = getId();
    const orderId = getCartState();
    const newCartProduct = {
      product_id: product._id,
      amount: 1,
      name: product.name,
      category: product.category,
      description: product.description,
      price: product.price,
      product_img: product.product_img,
      type: product.type,
      stock: product.quantity,
    };
    console.log("newCartProduct:", newCartProduct);
    try {
      if (orderId === "No_cart") {
        const response = await createOrder({
          user_id: userId,
          cart_products: [newCartProduct],
        });
        console.log("Order created successfully");
      } else {
        const response = await updateOrder(
          orderId,
          newCartProduct,
          "addProduct"
        );
        console.log("Order update successfully");
      }
    } catch (error) {
      console.error("Error updating order:", error);
      if (error.response) {
        console.error("Server responded with:", error.response.data);
      }
    }
  };

  return (
    <div className="flex items-center justify-center min-h-screen bg-[rgb(242,198,206)] ">
      <div className="w-full max-w-3xl p-4 ">
        <h1 className="text-3xl font-bold mb-4">Random</h1>
        {!selectedProduct ? (
          <button
            onClick={getRandomProduct}
            className="p-2 bg-blue-500 text-white rounded"
          >
            Get Random Product
          </button>
        ) : (
          <div className="mt-4 ">
            <ReactCardFlip isFlipped={isFlipped} flipDirection="vertical">
              <div className="flex justify-center">
                <button onClick={handleClick} className="justify-center">
                  <div>Open Your Card</div>
                  <div>
                    <img
                      src="/Card.jpg"
                      className="w-[350px] h-[400px] rounded-xl border p-5 m-5 bg-white border-black"
                    />
                  </div>
                </button>
              </div>
              <div className="flex justify-center">
                <div className=" bg-red justify-center">
                  <button onClick={handleClick}>
                    <img
                      src={selectedProduct.product_img}
                      alt={selectedProduct.name}
                      className="w-[350px] h-[400px]  bg-white m-5  rounded-xl justify-center border border-black "
                    />
                    <p>{selectedProduct.name}</p>
                  </button>
                </div>
              </div>
            </ReactCardFlip>
            <div className="flex space-x-4 mt-4">
              <button
                onClick={() => {
                  getRandomProduct();
                  setIsFlipped(false);
                }}
                className="p-2 bg-blue-500 text-white rounded"
              >
                Continue Random
              </button>
              <form onSubmit={(e) => e.preventDefault()}>
                <button
                  type="button"
                  onClick={() => {
                    handleOpen();
                    addToCart(selectedProduct);
                  }}
                  className="p-2 bg-green-500 text-white rounded"
                >
                  Add to Cart?
                </button>
                <ModalRandomAddToCart open={open} handleClose={handleClose} />
              </form>
            </div>
          </div>
        )}
        {isAnimating && (
          <div className="animate-pulse mt-4">Randomizing...</div>
        )}
      </div>
    </div>
  );
};

export default Random;
