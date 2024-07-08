import React, { createContext, useState, useEffect } from "react";
import productsAPI from "../../../apis/products";

const ProductContext = createContext();

export default function ProductContextProvider({ children }) {
  const [products, setProducts] = useState([]);

  const handleLoading = async () => {
    const response = await productsAPI.getAllProducts();
    setProducts(response.data.data);
  };

  useEffect(() => {
    handleLoading();
  }, []);

  return (
    <ProductContext.Provider value={{ products }}>
      {children}
    </ProductContext.Provider>
  );
}

export { ProductContext };
