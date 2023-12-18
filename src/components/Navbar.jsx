import React, { useEffect, useState } from "react";
import logo from "../assets/images/logo.svg";
import menuIcon from "../assets/images/icon-menu.svg";
import menuCloseIcon from "../assets/images/icon-menu-close.svg";

const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [showMenuIcon, setShowMenuIcon] = useState(false);

  const navLinks = ["Home", "New", "Popular", "Trending", "Categories"];

  useEffect(() => {
    function handleResize() {
      setShowMenuIcon(window.innerWidth <= 768);
    }

    window.addEventListener("resize", handleResize);
    handleResize();

    return () => window.removeEventListener("resize", handleResize);
  }, []);

  function toggleMenu() {
    setIsOpen(!isOpen);
  }

  return (
    <nav>
      <div className="navbar">
        <div className="logo">
          <img src={logo} alt="Brand Logo" />
        </div>
        <div className="navlinks">
          {showMenuIcon && (
            <img
              src={isOpen ? menuCloseIcon : menuIcon}
              alt={isOpen ? "Close Menu" : "Open Menu"}
              onClick={toggleMenu}
              className="menu-icon"
            />
          )}
          <ul className={`menu-items ${showMenuIcon && isOpen ? "show" : ""}`}>
            {navLinks.map((links, index) => {
              return <li key={index}>{links}</li>;
            })}
          </ul>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;
