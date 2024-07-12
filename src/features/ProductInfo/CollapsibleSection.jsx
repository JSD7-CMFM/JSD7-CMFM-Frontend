import React, { useEffect, useState } from "react";
import CollapsibleItem from "../../features/ProductInfo/collapsibleItem";
import { useParams } from "react-router-dom";
import axiosInstance from "../../config/myAPIs.js";

const CollapsibleSection = ({ products }) => {
  console.log(products);
  // const { id } = useParams();
  // const [products, setProducts] = useState([]);
  // const [loading, setLoading] = useState(true);
  // const [product, setProduct] = useState(null); // State to hold the selected product

  // useEffect(() => {
  //   const fetchData = async () => {
  //     try {
  //       const response = await axiosInstance.get('/products');
  //       setProducts(response.data);
  //       setLoading(false);
  //     } catch (error) {
  //       console.error('Error fetching products:', error);
  //     }
  //   };

  //   fetchData();
  // }, []); // Empty dependency array ensures useEffect runs only on component mount

  // useEffect(() => {
  //   // Find the product by id once products are fetched
  //   const selectedProduct = products.find((prod) => prod._id === id);
  //   setProduct(selectedProduct); // Set the product state
  // }, [products, id]); // Update whenever products or id changes

  // if (loading) {
  //   return <div>Loading...</div>;
  // }
  if (!products) {
    return <div>Product not found</div>;
  }
  return (
    <div className="pt-6 md:flex md:justify-center md:items-start pb-6 bg-[#E18AAA] border-t-[1px] border-black">
      {!products ? (
        <div>Product not found</div>
      ) : (
        <>
          <CollapsibleItem
            key={`${products?._id}-infoImage1`}
            imgSrc={products?.productinfo?.info2} // Assuming productinfo and info2 exist
            title="PRODUCT SHOW"
          />
          <CollapsibleItem
            key={`${products?._id}-infoImage2`}
            imgSrc={products?.productinfo?.info1} // Assuming productinfo and info1 exist
            title="GAME RULES"
          />
        </>
      )}
      {/* <CollapsibleItem
        key={`${products._id}-infoImage1`}
        imgSrc={products?.productinfo.info2 || ""} // Assuming productinfo and info2 exist
        title="PRODUCT SHOW"
      />
      <CollapsibleItem
        key={`${products._id}-infoImage2`}
        imgSrc={products?.productinfo.info1 || ""} // Assuming productinfo and info1 exist
        title="GAME RULES"
      /> */}
    </div>
  );
};

export default CollapsibleSection;
