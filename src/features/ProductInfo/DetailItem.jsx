import React, { useState, useEffect } from "react";
import { useParams } from "react-router-dom"; // Assuming you are using React Router for routing
import axiosInstance from "../../config/myAPIs.js"; // Import your axios instance

const DetailItem = ({ imgSrc, type, description, category }) => {
  // const { id } = useParams(); // Get the id from URL params

  // const [products, setProducts] = useState([]);
  // const [loading, setLoading] = useState(true);
  // const [product, setProduct] = useState(null); // State to hold the selected product

  // useEffect(() => {
  //   const fetchData = async () => {
  //     try {
  //       const response = await axiosInstance.get('/products');
  //       setProducts(response.data);
  //       setLoading(false);
  //     } catch (error) {
  //       console.error('Error fetching products:', error);
  //       // Handle error state here (e.g., set loading to false, show error message)
  //     }
  //   };

  //   fetchData();
  // }, []); // Empty dependency array ensures useEffect runs only on component mount

  // useEffect(() => {
  //   // Find the product by id once products are fetched
  //   if (products.length > 0) {
  //     const selectedProduct = products.find((prod) => prod._id === id);
  //     setProduct(selectedProduct); // Set the product state
  //   }
  // }, [products, id]); // Update whenever products or id changes

  // if (loading) {
  //   return <div>Loading...</div>;
  // }

  if (!imgSrc) {
    return <div>Product not found</div>;
  }

  return (
    <div className="flex pb-4 md:text-xl  p-2 rounded-2xl bg-[rgb(45,204,240)] bg-opacity-30 border-2 drop-shadow-lg">
      <div className="w-50 md:w-32 rounded-2xl pl-4">
        <img
          className="w-full h-full object-cover rounded-2xl "
          src={imgSrc}
          alt="Detail"
        />
      </div>
      <div className="ml-4 mt-2">
        <h3 className="text-[16px] font-semibold">{description}</h3>
        <div className="text-xs text-black md:text-[16px] badge mt-2 md:p-3 bg-pink-300">
          {type} Type
        </div>
        <div className="badge text-black mt-2 ml-2 md:p-3 text-[16px] font  bg-green-300">
          {category}
        </div>
      </div>
    </div>
  );
};

export default DetailItem;
