import React, { createContext, useState, useEffect } from "react";
import productsAPI from "../../../apis/products";

const ProductContext = createContext();

export default function ProductContextProvider({ children }) {
  const [products, setProducts] = useState([]);

  const handleLoading = async () => {
    const res = await productsAPI.getAllProducts();
    const { response } = res.data;
    setProducts(response);
  };

  useEffect(() => {
    handleLoading();
  }, []);

  const addProduct = async (data) => {
    try {
      const response = await productsAPI.addProduct(data);
      setProducts([...products, response.data]);
    } catch (error) {
      throw error;
    }
  };

  const deleteProduct = async (id) => {
    try {
      await productsAPI.deleteProduct(id);
      handleLoading();
    } catch (error) {
      throw error;
    }
  };

  const editProduct = async (id, data) => {
    try {
      await productsAPI.editProduct(id, data);
      handleLoading();
    } catch (error) {
      throw error;
    }
  };

  return (
    <ProductContext.Provider
      value={{ products, addProduct, deleteProduct, editProduct }}
    >
      {children}
    </ProductContext.Provider>
  );
}

export { ProductContext };
