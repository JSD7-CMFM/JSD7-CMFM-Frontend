import React from "react";
import {
  FaFacebook,
  FaInstagram,
  FaTiktok,
  FaPinterest,
  FaTwitter,
  FaCcVisa,
  FaCcMastercard,
  FaCcAmex,
  FaCcDiscover,
  FaCcJcb,
  FaCcPaypal,
} from "react-icons/fa";

const Credit = () => {
  return (
    <div>
      <div className="bg-[rgb(240,235,118)] border-t border-t-[rgb(52,52,52)] p-4 flex justify-between">
        <div className="space-x-2 inline flex">
          <FaFacebook />
          <FaInstagram />
          <FaTiktok />
          <FaPinterest />
          <FaTwitter />
        </div>
        <div className="flex justify-end">
          <div className="flex space-x-2 justify-between">
            <FaCcVisa />
            <FaCcMastercard />
            <FaCcAmex />
            <FaCcDiscover />
            <FaCcJcb />
            <FaCcPaypal />
          </div>
        </div>
      </div>
    </div>
  );
};

export default Credit;
