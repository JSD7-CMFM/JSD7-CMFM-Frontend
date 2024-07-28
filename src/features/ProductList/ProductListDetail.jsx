import React, { useEffect, useState } from "react";
import { FaStar } from "react-icons/fa6";
import { Link } from "react-router-dom";
import appAPI from "../../apis/products.js";
import { Pagination, Box, TextField, CircularProgress } from "@mui/material";
import { toast } from "react-toastify";

const ProductListDetail = () => {
  const getInitialLimit = () => {
    const width = window.innerWidth;
    if (width <= 768) {
      return 4;
    } else if (width <= 1024) {
      return 9;
    } else if (width <= 1280) {
      return 8;
    } else if (width <= 1540) {
      return 8;
    } else if (width <= 1920) {
      return 10;
    } else {
      return 10;
    }
  };

  const [products, setProducts] = useState([]);
  const [loading, setLoading] = useState(true);
  const [searchText, setSearchText] = useState("");
  const [filterStatus, setFilterStatus] = useState("All");
  const [filters, setFilters] = useState({
    search: "",
    page: 1,
    limit: getInitialLimit(),
    type: "All",
  });
  const [pages, setPages] = useState();

  const handleTypeChange = (type) => {
    setFilterStatus(type);
    setFilters((prevFilters) => ({
      ...prevFilters,
      type: type,
      page: 1,
    }));
  };

  const handleSearch = () => {
    setFilters((prevFilter) => ({
      ...prevFilter,
      search: searchText,
    }));
  };

  const handleReset = () => {
    setSearchText("");
    setFilters({
      search: "",
      page: 1,
      limit: getInitialLimit(),
      type: "All",
    });
  };

  useEffect(() => {
    const fetchData = async () => {
      try {
        setLoading(true);
        const res = await appAPI.fetchProducts(filters);
        const { response, totalPage } = res.data;
        setProducts(response);
        setPages(totalPage);
        setLoading(false);
      } catch (error) {
        toast.error("Error fetching products:", error);
      }
    };

    fetchData();
  }, [filters.page, filters.search, filters.type, filters.limit]);

  useEffect(() => {
    const handleResize = () => {
      setFilters((prevFilters) => ({
        ...prevFilters,
        limit: getInitialLimit(),
      }));
    };

    window.addEventListener("resize", handleResize);
    return () => {
      window.removeEventListener("resize", handleResize);
    };
  }, []);

  if (loading) {
    return (
      <div className="flex items-center justify-center h-screen">
        <CircularProgress />
      </div>
    );
  }

  return (
    <>
      <div className="pt-[90px] flex justify-center relative">
        <Box sx={{ width: "500px" }} margin={2}>
          <TextField
            fullWidth
            sx={{ backgroundColor: "white", borderRadius: "10px" }}
            color="primary"
            name="search"
            placeholder="search"
            onChange={(event) => setSearchText(event.target.value)}
            onKeyDown={(event) => {
              if (event.key === "Enter") {
                handleSearch();
              }
            }}
          />
        </Box>
        <div className="flex justify-between items-center relative">
          <div>
            <button
              onClick={handleSearch}
              className="border border-gray-400 bg-[#FFF6D0] rounded-lg px-4 py-2 hover:bg-[#ffe469]"
            >
              Search
            </button>
            <button onClick={handleReset} className="ml-2 hover:text-red-600">
              Reset
            </button>
          </div>
        </div>
        <div className="flex justify-center items-center absolute right-20 top-[120px]">
          <h1>Filter:</h1>
          <button
            className={`px-2 hover:opacity-40 ${
              filterStatus === "All" ? "bg-slate-200 text-black" : ""
            }`}
            onClick={() => handleTypeChange("All")}
          >
            All
          </button>
          <button
            className={`px-2 hover:opacity-40 border-x-2 ${
              filterStatus === "Box" ? "bg-slate-200 text-black" : ""
            }`}
            onClick={() => handleTypeChange("Box")}
          >
            Box
          </button>
          <button
            className={`px-2 hover:opacity-40 ${
              filterStatus === "Single" ? "bg-slate-200 text-black" : ""
            }`}
            onClick={() => handleTypeChange("Single")}
          >
            Single
          </button>
        </div>
      </div>
      <div className="grid grid-cols-1 2xl:grid-cols-5 xl:grid-col-4 lg:grid-cols-4 md:grid-cols-3 gap-10 p-4 mx-10">
        {products.map((product) => (
          <Link
            key={product._id}
            to={`/productinfo/${product._id}`}
            className="relative"
          >
            <div className="border border-gray-200 rounded-lg overflow-hidden relative group mb-5 pb-5 bg-white shadow-2xl w-full md:w-[320px] h-[440px]">
              <div className="relative group">
                <img
                  src={product.product_img}
                  alt={product.name}
                  className="w-full h-72 object-cover transition-opacity duration-300 opacity-100 group-hover:opacity-80"
                />
              </div>
              <div className="p-4 bg-white">
                <h3 className="text-lg font-semibold text-gray-900 mb-2">
                  {product.name}
                </h3>
                <p className="text-[16px] text-gray-700 mb-2 ">
                  {product.description}
                </p>
                <div className="flex items-center mb-2 absolute left-4 bottom-3">
                  <FaStar style={{ color: "#74C0FC" }} />
                  <FaStar style={{ color: "#74C0FC" }} />
                  <FaStar style={{ color: "#74C0FC" }} />
                  <FaStar style={{ color: "#74C0FC" }} />
                  <FaStar style={{ color: "#74C0FC" }} />
                  <span className="text-xs ml-1">(99)</span>
                </div>
              </div>
              <div className="bg-blue-500 text-white text-xs font-semibold py-2 px-4 rounded-lg hover:bg-blue-600 uppercase absolute right-2 bottom-0 mb-4 ml-4">
                More Detail
              </div>
            </div>
            <div className="absolute top-0 left-0 bg-red-500 text-white text-xs font-semibold py-2 px-4 rounded-lg hover:bg-blue-600 uppercase">
              ฿ {product.price}
            </div>
          </Link>
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
