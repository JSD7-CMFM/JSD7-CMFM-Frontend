import React, { useState, useEffect } from "react";
import MainImage from "../features/ProductInfo/MainImage";
import ProductDetails from "../features/ProductInfo/ProductDetails";
import CollapsibleSection from "../features/ProductInfo/CollapsibleSection";
import { Link, useParams } from "react-router-dom";
import axiosInstance from "../config/myAPIs.js";
import CircularProgress from "@mui/material/CircularProgress";


const ProductInfoPage = () => {
  const { id } = useParams();
  const [products, setProducts] = useState({});
  const [loading, setLoading] = useState(false);


  const fetchData = async () => {
    try {
      setLoading(false);
      const response = await axiosInstance.get(`/products/${id}`);
      console.log(response.data);
      setProducts(response.data);
      setLoading(true);
    } catch (error) {
      console.error("Error fetching products:", error);
    }
  };
  useEffect(() => {
    fetchData();
  }, []);

    if (!loading) {
    return (
      <div className="flex items-center justify-center h-screen">
        <CircularProgress />
      </div>
    );
    }

  console.log(products);

  return (
    <section className="bg-[#8BADD3] pt-[90px]">
      <div className="md:flex flex-col md:flex-row items-center pt-4">
        <MainImage products={products} />
        <ProductDetails products={products} />
      </div>
      <CollapsibleSection products={products} />
    </section>
  );
};

export default ProductInfoPage;
