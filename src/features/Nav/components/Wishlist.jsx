import React from 'react';
import { FaRegHeart } from "react-icons/fa6";

const Wishlist = () => {
  return (
    <div tabIndex="0" role="button" className="btn btn-ghost btn-circle">
      <div className="indicator">
        <FaRegHeart className='text-2xl' />
      </div>
    </div>
  );
};

export default Wishlist;
