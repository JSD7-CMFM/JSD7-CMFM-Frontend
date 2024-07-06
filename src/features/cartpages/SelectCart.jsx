import React, { useState } from "react";
import CartCard from "./CartCard";
import CartList from "./TestCart";

const SelectCart = ({ cartItems, setCartItems, totalPrice, setTotalPrice }) => {
  const [selectAll, setSelectAll] = useState(false);

  const handleSelectAll = () => {
    setSelectAll(!selectAll);
    const updatedCartItems = cartItems.map((item) => ({
      ...item,
      selected: !selectAll,
    }));
    setCartItems(updatedCartItems);
  };
  return (
    <div>
      <section className="px-5 bg-white w-full">
        <div className="bg-white flex">
          <div className="form-control">
            <div className="flex-col">
              <div className="flex">
                <label className="label cursor-pointer">
                  <input
                    type="checkbox"
                    checked={selectAll}
                    onChange={handleSelectAll}
                    className="checkbox checkbox-lg"
                  />
                </label>
                <h1 className="text-black p-4 text-[18px]">Select All</h1>
              </div>
              <div>
                <CartList
                  setCartItems={setCartItems}
                  cartItems={cartItems}
                  totalPrice={totalPrice}
                  setTotalPrice={setTotalPrice}
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
