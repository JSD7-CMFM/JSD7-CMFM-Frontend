import React, { useState } from "react";
import CartCard from "./CartCard";
import CartList from "./CartList.jsx";

const SelectCart = ({ cart, UpdateAmount, loading, fetchCart }) => {
  // const [isChecked, setIsChecked] = useState(true);
  //   const handleSelectAllChange = () => {
  //   setIsChecked(!isChecked); // Toggle isChecked state
  //   // Logic to toggle all other checkboxes based on isChecked state
  //   const checkboxes = document.querySelectorAll('.checkbox-md');
  //   checkboxes.forEach((checkbox) => {
  //     checkbox.checked = !isChecked;
  //   });
  // };

  return (
    <div>
      <section className="px-5 bg-white w-full">
        <div className="bg-white flex">
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
