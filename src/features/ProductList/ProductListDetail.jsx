import React from "react";
import { useEffect } from "react";
import { FaStar } from "react-icons/fa6";
import { useState } from "react";
import { Link } from "react-router-dom";
import axiosInstance from "../../config/myAPIs.js";
import { Pagination, Box, TextField } from "@mui/material";
import { FaMagnifyingGlass } from "react-icons/fa6";
import { IoMdClose } from "react-icons/io";

const ProductListDetail = () => {
  const [products, setProducts] = useState([]);
  const [loading, setLoading] = useState(true);
  const [filters, setFilters] = useState({
    search: "",
    page: 1,
    limit: 12,
  });

  const [pages, setPages] = useState();

  useEffect(() => {
    const fetchData = async () => {
      try {
        const res = await axiosInstance.get("/products/search", {
          params: {
            ...filters,
          },
        });
        const { response, totalPage } = res.data;
        setProducts(response);
        setPages(totalPage);
        setLoading(false);
      } catch (error) {
        console.error("Error fetching products:", error);
      }
    };

    fetchData();
  }, [filters.page, filters.search]); // Empty dependency array ensures useEffect runs only on component mount

  if (loading) {
    return <div>Loading...</div>;
  }
  console.log(products);

  return (
    <>
      <div className="pt-[90px] flex justify-center">
        <Box sx={{ width: "500px" }} margin={5}>
          <TextField
            fullWidth
            name="search"
            placeholder="search"
            onChange={(event) => {
              setTimeout(() => {
                setFilters((prevFilter) => ({
                  ...prevFilter,
                  search: event.target.value,
                }));
              }, 1500);
            }}
          />
        </Box>
      </div>
      <div className="grid grid-cols-4 gap-4 p-4">
        {products.map((product, index) => (
          <div
            key={product._id}
            className="border border-gray-200 rounded-lg overflow-hidden"
          >
            <div className="relative group">
              <img
                src={product.product_img}
                alt={product.name}
                className="w-full h-72 object-cover transition-opacity duration-300 opacity-100 group-hover:opacity-80"
              />
            </div>
            <div className="p-4">
              <h3 className="text-lg font-semibold text-gray-900 mb-2">
                {product.name}
              </h3>
              <p className="text-sm text-gray-700 mb-2">
                {product.description}
              </p>
              <div className="flex items-center mb-2">
                <FaStar style={{ color: "#74C0FC" }} />
                <FaStar style={{ color: "#74C0FC" }} />
                <FaStar style={{ color: "#74C0FC" }} />
                <FaStar style={{ color: "#74C0FC" }} />
                <FaStar style={{ color: "#74C0FC" }} />
                <span className="text-xs ml-1">(99)</span>
              </div>
              <Link
                to={`/productinfo/${product._id}`}
                className="bg-blue-500 text-white text-xs font-semibold py-2 px-4 rounded-lg hover:bg-blue-600"
              >
                More Detail
              </Link>
            </div>
          </div>
        ))}
      </div>
      <div className="flex justify-center m-3">
        <Pagination
          count={pages}
          page={filters?.page}
          onChange={(e, value) => {
            setFilters((prevfilter) => ({
              ...prevfilter,
              page: value,
            }));
          }}
          size="large"
        />
      </div>
    </>
  );
};

export default ProductListDetail;
