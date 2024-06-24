import React from 'react';
import ProductList2 from '../../data/ProductListMockUp';
import { useParams } from 'react-router-dom';

const MainImage = () => {

const {id} = useParams();
const product = ProductList2.find(
  (product) => product.id === parseInt(id, 10)
)
console.log(product);
  return (
    <div className="flex flex-wrap justify-center items-center md:w-1/2 md:h-auto md:m-4">
      <div className="m-2">
        <img
          className="md:w-5/6 md:h-5/6 object-cover border-black border md:rounded-2xl"
          src={product.imageUrl} // ใช้รูปภาพแรกของผลิตภัณฑ์แรกใน ProductList
          alt=""
        />

      </div>
    </div>
  );
};

export default MainImage;
