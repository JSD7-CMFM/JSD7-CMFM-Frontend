import React, { useState } from "react";
import CartList from "./CartList.jsx";

const SelectCart = ({ cart, UpdateAmount, loading, fetchCart }) => {
  return (
    <div>
      <section className="px-5 bg-white w-full">
        <div className="bg-white flex justify-center pt-5">
          <div className="form-control">
            <div className="flex-col">
              <div>
                <CartList
                  cart={cart}
                  UpdateAmount={UpdateAmount}
                  loading={loading}
                  fetchCart={fetchCart}
                />
              </div>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};

export default SelectCart;
