import React from "react";

const MainImage = ({ products }) => {
  if (!products) {
    return <div>Product not found</div>;
  }

  return (
    <div className="w-[800px]">
      <div className="justify-center  w-full md:h-auto md:m-10">
        <img
          className="md:w-5/6 md:h-5/6 object-cover border-black border md:rounded-2xl"
          src={products.product_img} // Assuming product_img exists in your product object
          alt=""
        />
      </div>
    </div>
  );
};

export default MainImage;
