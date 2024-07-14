import React from "react";
import {
  FaShopify,
  FaAlipay,
  FaAmazon,
  FaFortAwesome,
  FaGlide,
  FaCcVisa,
  FaCcAmex,
  FaCcJcb,
  FaCcMastercard,
  FaCcDiscover,
  FaCcPaypal,
} from "react-icons/fa";

import {
  FaFacebook,
  FaInstagram,
  FaTiktok,
  FaPinterest,
  FaTwitter,
} from "react-icons/fa";

import Sponser from "../features/foottage/Sponser";
import Subscribe from "../features/foottage/Subscribe";
import Credit from "../features/foottage/Credit";

const Footer = () => {
  return (
    <section className="">
      {/* column1 */}
      {/* <Sponser />  */}
      {/* <Subscribe />  */}
      <Credit />
    </section>
  );
};

export default Footer;
