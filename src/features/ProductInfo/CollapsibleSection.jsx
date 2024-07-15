import React from "react";
import CollapsibleItem from "../../features/ProductInfo/collapsibleItem";
import { TbHandClick } from "react-icons/tb";

const CollapsibleSection = ({ products }) => {
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
    </div>
  );
};

export default CollapsibleSection;
