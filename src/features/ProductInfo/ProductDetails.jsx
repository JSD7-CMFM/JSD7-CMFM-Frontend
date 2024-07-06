import React, { useState, useEffect } from "react";
import DetailItem from "./DetailItem";
import { useNavigate, useParams, Link } from "react-router-dom";
import ProductList2 from "../../data/ProductListMockUp";

// const ProductDetails = ({ cartItems, setCartItems }) => {
//   const { id } = useParams();
//   const navigate = useNavigate();
//   const [quantity2, setQuantity2] = useState(1);
//   const [selectedProduct, setSelectedProduct] = useState(null);

//   useEffect(() => {
//     if (id) {
//       const product = ProductList2.find(
//         (product) => product.id === parseInt(id, 10)
//       );
//       setSelectedProduct(product);
//     }
//   }, [id]);

//   const incrementQuantity2 = () => {
//     setQuantity2((prevQuantity) =>
//       prevQuantity === selectedProduct.quantity
//         ? prevQuantity
//         : prevQuantity + 1
//     );
//   };

//   const decrementQuantity2 = () => {
//     setQuantity2((prevQuantity) => (prevQuantity > 1 ? prevQuantity - 1 : 1));
//   };

//   if (!selectedProduct) return null;

//   const totalPrice2 = (quantity2 * selectedProduct.price).toFixed(2);
//   const combinedTotalPrice = parseFloat(totalPrice2).toFixed(2);

//   const handleAddToCart = () => {
//     setCartItems([...cartItems, { ...selectedProduct, quantity: quantity2 }]);
//   };

//   return (
//     <div className="flex justify-center items-center md:p-8 bg-gray-200 border-black border md:m-4 md:rounded-2xl">
//       <div className="px-2 py-3 w-full md:h-full">
//         <div className="pb-5 text-3xl md:text-xl md:font-bold">
//           <h1>{selectedProduct.name}</h1>
//         </div>
//         <div className="pb-4">
//           <p>{selectedProduct.description}</p>
//         </div>
//         <div className="pb-2 text-sm font-medium"></div>
//         <DetailItem
//           imgSrc={selectedProduct.imageUrl}
//           description={selectedProduct.description}
//           size="Single"
//         />
//         <div className="mt-6 mb-6 p-1 flex justify-between items-center w-full">
//           <div className="flex items-center">
//             <button
//               onClick={decrementQuantity2}
//               className="px-2 py-1 border border-black rounded-md"
//             >
//               -
//             </button>
//             <span className="mx-4">{quantity2}</span>
//             <button
//               onClick={incrementQuantity2}
//               className="px-2 py-1 border border-black rounded-md"
//             >
//               +
//             </button>
//           </div>
//           <div className="font-bold text-xl">Total: ฿{totalPrice2}</div>
//         </div>

//         <Link onClick={handleAddToCart} to="/cart">
//           <div className="border-black border rounded-xl p-1 flex justify-between w-full bg-[#4BA6DE] text-white text-[12px] font-bold tracking-widest md:text-xl md:py-2 md:px-2">
//             <h3 className="font-mono p-1">Add to cart</h3>
//             <h3 className="font-mono p-1">฿{combinedTotalPrice}</h3>
//           </div>
//         </Link>
//       </div>
//     </div>
//   );
// };
const ProductDetails = ({ cartItems, setCartItems }) => {
  const { id } = useParams();
  const navigate = useNavigate();
  const [quantity2, setQuantity2] = useState(1);
  const [selectedProduct, setSelectedProduct] = useState(null);

  useEffect(() => {
    if (id) {
      const product = ProductList2.find(
        (product) => product.id === parseInt(id, 10)
      );
      setSelectedProduct(product);
    }
  }, [id]);

  const incrementQuantity2 = () => {
    setQuantity2((prevQuantity) =>
      prevQuantity === selectedProduct.quantity
        ? prevQuantity
        : prevQuantity + 1
    );
  };

  const decrementQuantity2 = () => {
    setQuantity2((prevQuantity) => (prevQuantity > 1 ? prevQuantity - 1 : 1));
  };

  if (!selectedProduct) return null;

  const totalPrice2 = (quantity2 * selectedProduct.price).toFixed(2);

  const handleAddToCart = () => {
    setCartItems((prevCartItems) => {
      const existingProductIndex = prevCartItems.findIndex(
        (item) => item.id === selectedProduct.id
      );

      if (existingProductIndex !== -1) {
        const updatedCartItems = [...prevCartItems];
        updatedCartItems[existingProductIndex] = {
          ...selectedProduct,
          quantity: updatedCartItems[existingProductIndex].quantity + quantity2,
        };
        return updatedCartItems;
      } else {
        return [...prevCartItems, { ...selectedProduct, quantity: quantity2 }];
      }
    });

    navigate("/cart");
  };

  return (
    <div className="flex justify-center items-center md:p-8 bg-gray-200 border-black border md:m-4 md:rounded-2xl">
      <div className="px-2 py-3 w-full md:h-full">
        <div className="pb-5 text-3xl md:text-xl md:font-bold">
          <h1>{selectedProduct.name}</h1>
        </div>
        <div className="pb-4">
          <p>{selectedProduct.description}</p>
        </div>
        <div className="pb-2 text-sm font-medium"></div>
        <DetailItem
          imgSrc={selectedProduct.imageUrl}
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

        <button onClick={handleAddToCart} className="w-full">
          <div className="border-black border rounded-xl p-1 flex justify-between w-full bg-[#4BA6DE] text-white text-[12px] font-bold tracking-widest md:text-xl md:py-2 md:px-2">
            <h3 className="font-mono p-1">Add to cart</h3>
            <h3 className="font-mono p-1">฿{totalPrice2}</h3>
          </div>
        </button>
      </div>
    </div>
  );
};

export default ProductDetails;
