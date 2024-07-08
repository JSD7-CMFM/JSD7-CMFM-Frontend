// import axiosInstance from "../config/myAPIs.js"

// const allProducts = await axiosInstance.get("/products");
// console.log(allProducts);

// export default allProducts

// fetchProducts.js

import axiosInstance from "../config/myAPIs.js";
import axios from "axios";

const fetchProducts2 = async () => {
  try {
    const response = await axiosInstance.get("/products");
    console.log(response.data); // Assuming the API returns JSON data
    return response.data; // Return the data if needed
  } catch (error) {
    console.error('Error fetching products:', error);
    throw error; // Re-throw the error to handle it somewhere else
  }
};
const fetchProducts = async () => {
  try {
    const response = await axios.get("http://localhost:3000/products"); // Assuming the API returns JSON data
    return response.data; // Return the data if needed
  } catch (error) {
    console.error('Error fetching products:', error);
    throw error; // Re-throw the error to handle it somewhere else
  }
};
export default fetchProducts;


