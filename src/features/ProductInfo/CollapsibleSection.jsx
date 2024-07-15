import React, { useEffect, useState } from "react";
import CollapsibleItem from "../../features/ProductInfo/collapsibleItem";
import { useParams } from "react-router-dom";
import axiosInstance from "../../config/myAPIs.js";
import { TbHandClick } from "react-icons/tb";

const CollapsibleSection = ({ products }) => {
  console.log(products);
  if (!products) {
    return <div>Product not found</div>;
  }
  return (
    <div className="pt-6 md:flex md:justify-center md:items-start  pb-6 bg-[#E18AAA] border-t-[1px] border-white ">
      {!products ? (
        <div>Product not found</div>
      ) : (
        <>
          <CollapsibleItem
            key={`${products?._id}-infoImage1`}
            imgSrc={products?.productinfo?.info2} // Assuming productinfo and info2 exist
            title={
              <>
                <span>PRODUCT SHOW </span>
                <TbHandClick />
              </>
            }
          />
          <CollapsibleItem
            key={`${products?._id}-infoImage2`}
            imgSrc={products?.productinfo?.info1} // Assuming productinfo and info1 exist
            title={
              <>
                <span>GAME RULES </span>
                <TbHandClick />
              </>
            }
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
