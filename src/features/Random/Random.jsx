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

  const getRandomCard = () => {};

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
      <div className="w-full max-w-3xl p-4 bg-white rounded-xl shadow-2xl flex">
        <h1 className="text-3xl font-bold mb-10 p-5">เอากี่จุ่มดีจ๊ะ </h1>
        {!selectedProduct ? (
          <button
            onClick={getRandomProduct}
            className="p-2 text-white rounded justify-center"
          >
            <div className=" justify-center">
              <img
                src="Dogcard.jpg"
                className="w-[350px] h-[400px] rounded-xl border p-5 m-5 bg-white border-black justify-center"
              />
              <h1 className="text-black text-[30px]">จุ่มเลยจิ</h1>
            </div>
          </button>
        ) : (
          <div className="mt-4 ">
            <ReactCardFlip isFlipped={isFlipped} flipDirection="vertical">
              <div className="flex justify-center">
                <button onClick={handleClick} className="justify-center">
                  <div className="">พร้อมก็เปิดการ์ดสิจ๊ะ</div>
                  <div>
                    <img
                      src="Dogcard.jpg"
                      className="w-[350px] h-[400px] rounded-xl border p-5 m-5 bg-white border-black shadow-2xl"
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
            <div className="flex space-x-4 mt-4 justify-center">
              <button
                onClick={() => {
                  getRandomProduct();
                  setIsFlipped(false);
                }}
                className="p-3  text-black rounded-2xl border-black border bg-blue-200"
              >
                จุ่มต่อมั้ยจ๊ะ
              </button>
              <form onSubmit={(e) => e.preventDefault()}>
                <button
                  type="button"
                  onClick={() => {
                    handleOpen();
                    addToCart(selectedProduct);
                  }}
                  className="p-3  text-black rounded-2xl border-black border bg-green-100"
                >
                  ซื้อเลยสิจ๊ะ
                </button>
                <ModalRandomAddToCart open={open} handleClose={handleClose} />
              </form>
            </div>
          </div>
        )}
        {isAnimating && (
          <div className="animate-pulse mt-4">หาของแปปนะจ๊ะ...</div>
        )}
      </div>
    </div>
  );
};

export default Random;
