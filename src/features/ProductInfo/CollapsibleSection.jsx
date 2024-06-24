import React from "react";
import CollapsibleItem from "../../features/ProductInfo/collapsibleItem";
import { useParams } from 'react-router-dom';
import ProductList2 from "../../data/ProductListMockUp"

const CollapsibleSection = () => {
  const {id} = useParams();
  const product = ProductList2.find(
    (product) => product.id === parseInt(id, 10)
  )

  return (
    <div className="pt-6 md:flex md:justify-center md:items-start pb-6 bg-[#E18AAA] border-t-[1px] border-black">
      <CollapsibleItem
        // key={`${product.Info}-infoImage1`}
        imgSrc={product.Info2} // ใช้รูปภาพที่ 2 จาก infoImages
        title="Click me to show/hide content"
      />
      <CollapsibleItem
        // key={`${product.id}-infoImage2`}
        imgSrc={product.Info1} // ใช้รูปภาพท จาก infoImages
        title="Click me to show/hide content"
      />
    </div>
  );
};

export default CollapsibleSection;
