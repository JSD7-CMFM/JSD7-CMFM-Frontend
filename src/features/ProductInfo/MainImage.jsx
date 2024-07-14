import React, { useState, useEffect } from "react";
import axiosInstance from "../../config/myAPIs";
import { useParams } from "react-router-dom";

const MainImage = ({ products }) => {
  // const { id } = useParams();
  // const [products, setProducts] = useState([]);
  // const [loading, setLoading] = useState(true);

  // useEffect(() => {
  //   const fetchData = async () => {
  //     try {
  //       const response = await axiosInstance.get("/products");
  //       setProducts(response.data);
  //       setLoading(false);
  //     } catch (error) {
  //       console.error("Error fetching products:", error);
  //     }
  //   };

  //   fetchData();
  // }, []); // Empty dependency array ensures useEffect runs only on component mount

  // if (loading) {
  //   return <div>Loading...</div>;
  // }

  // // Find the product by id
  // const product = products.find((product) => product._id === id);

  if (!products) {
    return <div>Product not found</div>;
  }

  return (
    <div className="w-[800px]">
      <div className="justify-center  w-full md:h-auto md:m-10">
        <img
          className="md:w-5/6 md:h-5/6 object-cover border-black border md:rounded-2xl"
          src={products.product_img} // Assuming product_img exists in your product object
          alt=""
        />
      </div>
    </div>
  );
};

export default MainImage;
