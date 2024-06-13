import React from 'react';

const SearchBar = () => {
  return (
    <div className="hidden md:flex">
      <input
        type="text"
        placeholder="Search"
        className="input input-bordered"
      />
    </div>
  );
};

export default SearchBar;
