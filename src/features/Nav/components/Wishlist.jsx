import React from "react";
import { FaQuestion } from "react-icons/fa";
import { Link } from "react-router-dom";

const Wishlist = () => {
  return (
    <div tabIndex="0" role="button" className="btn btn-ghost btn-circle">
      <Link to="random" className="indicator">
        <FaQuestion className="text-2xl" />
      </Link>
    </div>
  );
};

export default Wishlist;
