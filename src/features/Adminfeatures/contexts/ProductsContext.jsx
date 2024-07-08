import React, { createContext, useState, useEffect } from "react";
import productsAPI from "../../../apis/products";

const ProductContext = createContext();

export default function ProductContextProvider({ children }) {
  const [products, setProducts] = useState([]);

  const handleLoading = async () => {
    const response = await productsAPI.getAllProducts();
    setProducts(response.data);
  };

  useEffect(() => {
    handleLoading();
  }, []);

  const addProduct = async (data) => {
    try {
      const response = await productsAPI.addProduct(data);
      setProducts([...products, response.data]);
    } catch (error) {
      console.log(error);
    }
  };

  const deleteProduct = async (id) => {
    try {
      await productsAPI.deleteProduct(id);
      handleLoading();
    } catch (error) {
      console.log(error);
    }
  };

  return (
    <ProductContext.Provider value={{ products, addProduct, deleteProduct }}>
      {children}
    </ProductContext.Provider>
  );
}

export { ProductContext };
