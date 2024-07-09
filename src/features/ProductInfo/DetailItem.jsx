import React, { useState, useEffect } from 'react';
import { useParams } from 'react-router-dom';
import axiosInstance from "../../config/myAPIs.js";

const DetailItem = () => {
  const { id } = useParams();

  const [products, setProducts] = useState([]);
  const [loading, setLoading] = useState(true);
  const [product, setProduct] = useState(null);

  useEffect(() => {
    const fetchData = async () => {
      try {
        const response = await axiosInstance.get('/products');
        setProducts(response.data);
        setLoading(false);
      } catch (error) {
        console.error('Error fetching products:', error);
        setLoading(false);
      }
    };

    fetchData();
  }, []);

  useEffect(() => {
    if (products.length > 0) {
      const selectedProduct = products.find((prod) => prod._id === id);
      setProduct(selectedProduct);
    }
  }, [products, id]);

  

  if (loading) {
    return <div>Loading...</div>;
  }

  if (!product) {
    return <div>Product not found</div>;
  }

  return (
    <div className="flex pb-4 md:text-xl">
      <div className="w-24 border-black border md:w-32 rounded-2xl">
        <img className="w-full h-full object-cover rounded-2xl" src={product.product_img} alt="Detail" />
      </div>
      <div className="ml-4 mt-2">
        <h3>{product.description}</h3>
        <div className="text-xs text-black md:text-[16px] badge mt-2 md:p-3 bg-pink-300">{product.type} Type</div>
        <div className="badge mt-2 ml-2 md:p-3 text-[16px]  bg-green-300">{product.category}</div>
      </div>
    </div>
  );
};

export default DetailItem;