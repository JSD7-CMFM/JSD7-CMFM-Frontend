import React, { useState, useEffect } from "react";
import MainImage from "../features/ProductInfo/MainImage";
import ProductDetails from "../features/ProductInfo/ProductDetails";
import CollapsibleSection from "../features/ProductInfo/CollapsibleSection";
import { Link, useParams } from "react-router-dom";
import axiosInstance from "../config/myAPIs.js";

const ProductInfoPage = () => {
  const { id } = useParams();
  const [products, setProducts] = useState({});

  const fetchData = async () => {
    try {
      const response = await axiosInstance.get(`/products/${id}`);
      console.log(response.data);
      setProducts(response.data);
    } catch (error) {
      console.error("Error fetching products:", error);
    }
  };
  useEffect(() => {
    fetchData();
  }, []);
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
