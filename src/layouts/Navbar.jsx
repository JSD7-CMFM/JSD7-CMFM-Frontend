import React, { useState, useEffect } from "react";
import Logo from "../features/Nav/components/Logo";
import NavLinks from "../features/Nav/components/NavLinks";
import SearchBar from "../features/Nav/components/SearchBar";
import Cart from "../features/Nav/components/Cart";
import Wishlist from "../features/Nav/components/Wishlist";
import User from "../features/Nav/components/User";
import MenuDropdown from "../features/Nav/components/MenuDropdown";
import { useNavigate } from "react-router-dom";

const Navbar = ({ userInfo, onSearchNote, handleClearSearch }) => {
  const isToken = localStorage.getItem("token");
  const [lastScrollY, setLastScrollY] = useState(0);
  const [showNavbar, setShowNavbar] = useState(true);
  const [searchQuery, setSearchQuery] = useState("");
  const navigate = useNavigate();
  const onLogout = () => {
    removeToken.clear();
    navigate("/login");
  };

  const handleSearch = () => {
    if (searchQuery) {
      onSearchNote(searchQuery);
    }
  };
  const onClearSearch = () => {
    handleClearSearch();
    setSearchQuery("");
  };

  useEffect(() => {
    const handleScroll = () => {
      const currentScrollY = window.scrollY;
      if (currentScrollY > lastScrollY) {
        setShowNavbar(false);
      } else {
        setShowNavbar(true);
      }
      setLastScrollY(currentScrollY);
    };

    window.addEventListener("scroll", handleScroll);

    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, [lastScrollY]);

  return (
    <header
      className={`fixed top-0 left-0 w-full z-50 bg-transparent  transition-transform duration-300 ${
        showNavbar ? "translate-y-0" : "-translate-y-full"
      }`}
    >
      <nav className="flex items-center justify-between p-4 border-2 bg-[#fff6d0] border-black rounded-2xl mx-4 my-2">
        <div className="flex items-center xl:hidden">
          <MenuDropdown />
        </div>
        <div className="flex items-center">
          <Logo />
        </div>

        <div className="hidden md:flex items-center space-x-4">
          <NavLinks />
        </div>

        <div className="flex items-center space-x-4">
          {isToken && (
            <>
              <SearchBar
                value={searchQuery}
                onChange={({ target }) => {
                  setSearchQuery(target.value);
                }}
                handleSearch={handleSearch}
                onClearSearch={onClearSearch}
              />
              <Cart />
              <Wishlist />
              <User userInfo />
            </>
          )}
        </div>
      </nav>
    </header>
  );
};

export default Navbar;
