import { useState } from "react";
import React from "react";
import DetailItem from "./DetailItem";
import { useParams } from "react-router-dom";
import axiosInstance from "../../config/myAPIs"; // Ensure axiosInstance is imported
import { getCartState, getId } from "../../utils/localStorage.js";
import { createOrder, updateOrder } from "../../apis/orders.js";
import { Modal, Box, Typography, Fade, Backdrop } from "@mui/material";
import { Link } from "react-router-dom";
import { FaTimes } from 'react-icons/fa';
import { CgSpaceBetween } from "react-icons/cg";
import { MdOutlineGamepad } from "react-icons/md";
import { MdGames } from "react-icons/md";


const ProductDetails = ({ products }) => {
  const [loading, setLoading] = useState(true);
  const [quantity2, setQuantity2] = useState(1);
  const [open, setOpen] = useState(false);

  const handleOpen = () => setOpen(true);
  const handleClose = () => setOpen(false);

  const handleSubmit = async (event) => {
    event.preventDefault();
    if (!products) {
      console.error("product is null");
      return;
    }

    try {
      const userId = getId();
      // Create the new cart product object
      const newCartProduct = {
        product_id: products._id,
        amount: quantity2,
        name: products.name,
        category: products.category,
        description: products.description,
        price: products.price,
        product_img: products.product_img,
      };

      const orderId = getCartState();
      console.log("orderId:", orderId);
      if (orderId === "No_cart") {
        const response = await createOrder({
          user_id: userId,
          cart_products: [newCartProduct],
        });
        console.log("Order created successfully:", response.data);
      } else {
        const response = await updateOrder(orderId, newCartProduct);
        console.log("Order update successfully:", response.data);
      }
    } catch (error) {
      console.error("Error updating order:", error);
      if (error.response) {
        console.error("Server responded with:", error.response.data);
      }
    }
  };

  const incrementQuantity2 = () => {
    setQuantity2((prevQuantity) => prevQuantity + 1);
  };

  const decrementQuantity2 = () => {
    setQuantity2((prevQuantity) => (prevQuantity > 1 ? prevQuantity - 1 : 1));
  };

  if (!products) {
    return <div>Loading...</div>;
  }

  const totalPrice2 = (quantity2 * products.price).toFixed(2);

  return (
    <div className="flex justify-center items-center md:p-8 bg-gray-200 border-black border md:m-4 rounded-2xl">
      <div className="px-2 py-3 w-full md:h-full">
        <div className="pb-5 text-3xl md:text-xl md:font-bold">
          <h1>{products.name}</h1>
        </div>
        <div className="pb-4">
          <p>{products.description}</p>
        </div>

        <div className="pb-2 text-sm font-medium">{/* <h2>SINGLE</h2> */}</div>
        <DetailItem
          imgSrc={products.product_img}
          type={products.type}
          description={products.description}
          category={products.category}
        />
        <div className="mt-6 mb-6 p-1 flex justify-between items-center w-full">
          <div className="flex items-center">
            <button
              onClick={decrementQuantity2}
              className="px-2 py-1 border border-black rounded-md"
            >
              -
            </button>
            <span className="mx-4">{quantity2}</span>
            <button
              onClick={incrementQuantity2}
              className="px-2 py-1 border border-black rounded-md"
            >
              +
            </button>
          </div>
          <div className="font-bold text-m">Total: ฿{totalPrice2}</div>
        </div>
        <div>
          <form onSubmit={handleSubmit}>
            <button
              className="btn btn-l rounded-xl btn-outline bg-yellow-500 hover:bg-red-500 text-[18px] space-y-2 text-black p-3 space-x-20"
              onClick={handleOpen} // Open modal on button click
            >
              Add to cart
            </button>
            <Modal
              open={open}
              onClose={handleClose}
              aria-labelledby="modal-modal-title"
              aria-describedby="modal-modal-description"
              closeAfterTransition
              BackdropComponent={Backdrop}
              BackdropProps={{
                timeout: 500,
              }}
            >
              <Fade in={open}>
                <Box
                  sx={{
                    width: 500,
                    maxWidth: '90%', // Responsive width
                    bgcolor: '#f2e4c9', // Light pastel color
                    borderRadius: 8,
                    boxShadow: '0px 10px 20px rgba(0, 0, 0, 0.2)', // Soft shadow
                    p: 4,
                    position: 'absolute',
                    top: '50%',
                    left: '50%',
                    transform: 'translate(-50%, -50%)',
                  }}
                >
                  <Typography id="modal-modal-title" variant="h5" component="h3" sx={{ textAlign: 'center', mb: 2 , p:5}}>
                    Item has been added to cart
                  </Typography>
                  <div sx={{ display: 'flex', justifyContent: 'space-between', mt: 4 }}>
                    <div className="flex justify-between mx-10">
                    <Link to="/productlist">
                      <button className="btn btn-s rounded-xl btn-outline hover:bg-pink-300 text-[18px] text-black bg-green-500 p-3 " sx={{ width: '45%', fontSize: '1.2rem', pl: 20 ,mr: 5 }}>
                          Shop more
                          <MdGames  style={{ fontSize: '2rem' }}/>
                      </button>
                    </Link>
                    <Link to="/cart">
                      <button className="btn btn-s rounded-xl btn-outline hover:bg-orange-400 text-[18px] text-black bg-red-500 p-3" sx={{ width: '45%', fontSize: '1.2rem', pr: 20 , ml: 5 }}>
                          View Cart
                          <MdGames  style={{ fontSize: '2rem' }}/>
                      </button>
                    </Link>
                    </div>
                  </div>
                  <button
                    onClick={handleClose}
                    style={{
                      position: 'absolute',
                      top: 10,
                      right: 10,
                      cursor: 'pointer',
                      backgroundColor: 'transparent',
                      border: 'none',
                      fontSize: '1.5rem',
                      color: '#FF6347', // Red color for close button
                    }}
                  >
                    <FaTimes />
                  </button>
                </Box>
              </Fade>
            </Modal>
          </form>
        </div>
      </div>
    </div>
  );
};

export default ProductDetails;
