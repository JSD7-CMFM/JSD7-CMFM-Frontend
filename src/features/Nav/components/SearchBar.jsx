import React from "react";
import { FaMagnifyingGlass } from "react-icons/fa6";
import { IoMdClose } from "react-icons/io";

const SearchBar = ({ value, onChange, handleSearch, onClearSearch }) => {
  return (
    <div className="relative flex-1 md:flex-none">
      <input
        type="text"
        placeholder="Search"
        className="input input-bordered w-48 md:w-auto pr-10"
        value={value}
        onChange={onChange}
      />
      {value && (
        <IoMdClose
          className="absolute right-8 top-1/2 transform -translate-y-1/2 text-xl text-slate-500 cursor-pointer hover:text-black"
          onClick={onClearSearch}
        />
      )}
      <FaMagnifyingGlass
        className="absolute right-2 top-1/2 transform -translate-y-1/2 text-slate-400 cursor-pointer hover:text-black"
        onClick={handleSearch}
      />
    </div>
  );
};

export default SearchBar;
