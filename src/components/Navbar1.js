import React, { useState, useEffect, useRef } from "react";
import Logo from "../assets/logo2.jpg";
import { IoMdClose, IoMdMenu } from "react-icons/io"; // Import the icons

const Navbar = () => {
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
  const ref = useRef();

  // Toggle mobile menu
  const toggleMobileMenu = () => {
    setIsMobileMenuOpen(!isMobileMenuOpen);
  };

  // Close the menu when clicking outside of it
  useEffect(() => {
    const handleClickOutside = (event) => {
      if (ref.current && !ref.current.contains(event.target)) {
        setIsMobileMenuOpen(false);
      }
    };

    document.addEventListener("mousedown", handleClickOutside);

    return () => {
      document.removeEventListener("mousedown", handleClickOutside);
    };
  }, [ref]);

  return (
    <nav className="bg-slate-200 border-gray-200 px-2 sm:px-4 py-2.5 dark:bg-gray-900">
      <div className="container flex flex-wrap justify-between items-center mx-auto">
        <a href="https://www.google.com" className="flex items-center">
          <img src={Logo} className="h-[5rem] w-[10rem] sm:h-[6rem] sm:w-[11rem]" alt="Logo" />
        </a>
        <button
          onClick={toggleMobileMenu}
          className="inline-flex items-center p-2 text-sm text-gray-500 rounded-lg md:hidden hover:bg-gray-100 focus:outline-none focus:ring-2 focus:ring-gray-200 dark:text-gray-400 dark:hover:bg-gray-700 dark:focus:ring-gray-600"
          aria-controls="navbar-dropdown"
          aria-expanded={isMobileMenuOpen}
        >
          <span className="sr-only">Open main menu</span>
          {isMobileMenuOpen ? (
            <IoMdClose className="w-6 h-6" />
          ) : (
            <IoMdMenu className="w-6 h-6" />
          )}
        </button>
        <div
          className={`${
            isMobileMenuOpen ? "flex" : "hidden"
          } w-full md:block md:w-auto`}
          id="navbar-dropdown"
        >
          <ul className="flex flex-col mt-4 rounded-lg border border-gray-100 md:flex-row md:space-x-8 md:mt-0 md:text-sm md:font-medium md:border-0 dark:border-gray-700">
            <li>
              <a
                href="https://www.google.com"
                className="block py-2 pl-3 pr-4 text-gray-700 rounded md:bg-transparent md:p-0 dark:text-white"
                aria-current="page"
              >
                HOME
              </a>
            </li>
            <li>
              <a
                href="https://www.google.com"
                className="block py-2 pl-3 pr-4 text-gray-700 rounded md:bg-transparent md:p-0 dark:text-white"
              >
                ABOUT US
              </a>
            </li>
            <li>
              <a
                href="https://www.google.com"
                className="block py-2 pl-3 pr-4 text-gray-700 rounded md:bg-transparent md:p-0 dark:text-white"
              >
                PRODUCTS
              </a>
            </li>
            <li>
              <a
                href="https://www.google.com"
                className="block py-2 pl-3 pr-4 text-gray-700 rounded md:bg-transparent md:p-0 dark:text-white"
              >
                CONTACT US
              </a>
            </li>
          </ul>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;
