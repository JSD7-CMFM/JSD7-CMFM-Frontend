import React from "react";
import CartCard from "./CartCard";
import CartList from "./TestCart";

const SelectCart = () => {
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
                    defaultChecked
                    className="checkbox checkbox-lg"
                  />
                </label>
                <h1 className="text-black p-4 text-[18px]">Select All</h1>
              </div>
              <div>
                <CartList />
              </div>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};

export default SelectCart;
