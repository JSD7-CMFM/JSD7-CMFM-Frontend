import React from "react";

import { Modal, Box, Typography, Fade, Backdrop } from "@mui/material";
import { Link } from "react-router-dom";
import { FaTimes } from "react-icons/fa";
import { MdGames } from "react-icons/md";
import { FaUserAstronaut } from "react-icons/fa";
import { getToken } from "../../utils/localStorage.js";

const ModalRandomAddToCart = ({ handleClose, open }) => {
  const Token = getToken();
  return (
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
            maxWidth: "90%",
            bgcolor: "#f2e4c9",
            borderRadius: 8,
            boxShadow: "0px 10px 20px rgba(0, 0, 0, 0.2)",
            p: 4,
            position: "absolute",
            top: "50%",
            left: "50%",
            transform: "translate(-50%, -50%)",
          }}
        >
          <Typography
            id="modal-modal-title"
            variant="h5"
            component="h3"
            sx={{ textAlign: "center", mb: 2, p: 5 }}
          >
            {Token ? "Item has been added to cart" : "Sign in to add product"}
          </Typography>
          <div
            sx={{
              display: "flex",
              justifyContent: "space-between",
              mt: 4,
            }}
          >
            {Token ? (
              <div className="flex justify-between mx-10">
                <Link to="/random">
                  <button
                    className="btn btn-s rounded-xl btn-outline hover:bg-green-400 py-2 itemcenter text-[18px] text-black bg-green-500 p-3 "
                    onClick={handleClose}
                    sx={{
                      width: "45%",
                      fontSize: "1.2rem",
                      pl: 20,
                      mr: 5,
                    }}
                  >
                    Random More
                    <MdGames style={{ fontSize: "2rem" }} />
                  </button>
                </Link>
                <Link to="/cart">
                  <button
                    className="btn btn-s rounded-xl btn-outline bg-orange-400 text-[18px] text-black hover:bg-orange-400 p-3 items-center py-2"
                    sx={{
                      width: "45%",
                      fontSize: "1.2rem",
                      pr: 20,
                      ml: 5,
                    }}
                  >
                    View Cart
                    <MdGames style={{ fontSize: "2rem" }} />
                  </button>
                </Link>
              </div>
            ) : (
              <Link to="/login" className="flex justify-center">
                <button
                  className="btn btn-s rounded-xl btn-outline bg-orange-400 text-[18px] text-black hover:bg-orange-400 p-3 items-center py-2"
                  sx={{
                    width: "45%",
                    fontSize: "1.2rem",
                    pr: 20,
                    ml: 5,
                  }}
                >
                  Sign In
                  <FaUserAstronaut style={{ fontSize: "2rem" }} />
                </button>
              </Link>
            )}
          </div>
          <button
            onClick={handleClose}
            style={{
              position: "absolute",
              top: 10,
              right: 10,
              cursor: "pointer",
              backgroundColor: "transparent",
              border: "none",
              fontSize: "1.5rem",
              color: "#FF6347",
            }}
          >
            <FaTimes />
          </button>
        </Box>
      </Fade>
    </Modal>
  );
};

export default ModalRandomAddToCart;
