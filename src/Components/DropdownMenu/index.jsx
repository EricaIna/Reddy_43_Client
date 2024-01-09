import React from "react";
import { useState } from "react";
import "./DropdownMenu.css";
import ArrowIcon from "../ArrowIcon";
import { HamburgerIcon, CloseIcon } from "../Icons";
import { Link } from "react-router-dom";
import { motion } from "framer-motion";

export const DropdownMenu = () => {
  const [isOpen, setIsOpen] = useState(false);

  const toggleDropdown = () => setIsOpen(!isOpen);
  const closeMenu = () => {
    setIsOpen(false);
  };

  return (
    <div className="dropdown">
      <button className="menu-icon" onClick={toggleDropdown}>
        {isOpen ? <CloseIcon /> : <HamburgerIcon />}
      </button>
      {isOpen && (
        <div className="menu-content">
          <motion.div
            className="main-rect"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 0.5, delay: 0.2 }}
          >
            <ul>
              <li>
                <ArrowIcon />
                <Link to="/" onClick={closeMenu}>
                  HOME
                </Link>
              </li>
              <li>
                <ArrowIcon />
                MOVIE GENRES
              </li>
              <li>
                <ArrowIcon />
                MY LIST(PAGE)
              </li>
              <li>
                <ArrowIcon />
                NEW AND POPULAR
              </li>
              <li>
                <ArrowIcon />
                <Link to="/login" onClick={closeMenu}>
                  LOG IN/OUT
                </Link>
              </li>
            </ul>
          </motion.div>
        </div>
      )}
    </div>
  );
};

export default DropdownMenu;
