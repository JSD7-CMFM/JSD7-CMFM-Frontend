import React, { useState }  from "react";
import CartCard from "./CartCard";
import CartList from "./TestCart";




const SelectCart = ({setTotalPrice}) => {
  const [isChecked, setIsChecked] = useState(true);
    const handleSelectAllChange = () => {
    setIsChecked(!isChecked); // Toggle isChecked state
    // Logic to toggle all other checkboxes based on isChecked state
    const checkboxes = document.querySelectorAll('.checkbox-md');
    checkboxes.forEach((checkbox) => {
      checkbox.checked = !isChecked;
    });
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
                    checked={isChecked}
                    onChange={handleSelectAllChange}
                    className="checkbox checkbox-lg"
                  />
                </label>
                <h1 className="text-black p-4 text-[18px]">Select All</h1>
              </div>
              <div>
                <CartList setTotalPrice={setTotalPrice} />
              </div>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};

export default SelectCart;
