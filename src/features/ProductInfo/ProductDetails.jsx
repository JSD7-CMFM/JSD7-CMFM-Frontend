import React, { useState, useEffect } from "react";
import DetailItem from "./DetailItem";
import ProductList from "./ProductList";
import { Link } from "react-router-dom";
import ProductList2 from "../../data/ProductListMockUp";
import { useParams } from "react-router-dom";

const ProductDetails = () => {
  const { id } = useParams();

  // const [quantity1, setQuantity1] = useState(0);
  const [quantity2, setQuantity2] = useState(0);
  const [selectedProductId, setSelectedProductId] = useState(1); // Default selected product ID
  const [selectedProduct, setSelectedProduct] = useState(null); // State to store selected product details

  // const product = ProductList2.find(
  //   (product) => product.id === parseInt(id, 10)
  // );

 
  // const fetchProductDetails = () => {
  //   const product = ProductList.find(
  //     (product) => product.id === selectedProductId
  //   );

  // };

  useEffect(() => {
     if (id){
      const product = ProductList2.find(
        (product) => product.id === parseInt(id, 10)
      );
      console.log(product);
      setSelectedProduct(product);
     }
    
  }, [id]);

  // const incrementQuantity1 = () => {
  //   setQuantity1((prevQuantity) => prevQuantity + 1);
  // };

  // const decrementQuantity1 = () => {
  //   setQuantity1((prevQuantity) => (prevQuantity > 1 ? prevQuantity - 1 : 0));
  // };

  const incrementQuantity2 = () => {
    setQuantity2((prevQuantity) => prevQuantity + 1);
  };

  const decrementQuantity2 = () => {
    setQuantity2((prevQuantity) => (prevQuantity > 1 ? prevQuantity - 1 : 0));
  };

  if (!selectedProduct) return null; // Handle case where selectedProduct is not yet loaded

  // const totalPrice1 = (quantity1 * selectedProduct.boxPrice).toFixed(2); // Calculate total price for box quantity
  const totalPrice2 = (quantity2 * selectedProduct.price).toFixed(2); // Calculate total price for single quantity
  const combinedTotalPrice = (
     parseFloat(totalPrice2)
  ).toFixed(2); // Calculate combined total price

  return (
    <div className="flex justify-center items-center md:p-8 bg-gray-200 border-black border md:m-4 md:rounded-2xl">
      <div className="px-2 py-3 w-full md:h-full">
        <div className="pb-5 text-3xl md:text-xl md:font-bold">
          <h1>{selectedProduct.name}</h1>
        </div>
        <div className="pb-4">
          <p>{selectedProduct.description}</p>
        </div>

        {/* <div className="pb-2 text-sm font-medium">
          <h2>BOXES</h2>
        </div>
        <DetailItem
          imgSrc={selectedProduct.Info1} // Displaying the first image of the selected product
          description={selectedProduct.description}
          size="Boxes"
        />
        <div className="mt-6 mb-6 p-1 flex justify-between items-center w-full">
          <div className="flex items-center">
            <button
              onClick={decrementQuantity1}
              className="px-2 py-1 border border-black rounded-md"
            >
              -
            </button>
            <span className="mx-4">{quantity1}</span>
            <button
              onClick={incrementQuantity1}
              className="px-2 py-1 border border-black rounded-md"
            >
              +
            </button>
          </div>
          <div className="font-bold text-xl">Total: ฿{totalPrice1}</div>
        </div> */}

        <div className="pb-2 text-sm font-medium">
          {/* <h2>SINGLE</h2> */}
        </div>
        <DetailItem
          imgSrc={selectedProduct.imageUrl} // Displaying the second image of the selected product
          description={selectedProduct.description}
          size="Single"
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
          <div className="font-bold text-xl">Total: ฿{totalPrice2}</div>
        </div>

        <Link to="/cart">
        <div className="border-black border rounded-xl p-1 flex justify-between w-full bg-[#4BA6DE] text-white text-[12px] font-bold tracking-widest md:text-xl md:py-2 md:px-2">
          <h3 className="font-mono p-1">Add to cart</h3>
          <h3 className="font-mono p-1">฿{combinedTotalPrice}</h3>
        </div>
        </Link>
      </div>
    </div>
  );
};

export default ProductDetails;
