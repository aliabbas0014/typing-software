import React, { useState } from "react";
import { Link } from "react-router-dom"; // Import Link from react-router-dom
import { FaKeyboard } from "react-icons/fa"; // Import an icon from react-icons

const Navbar = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false); // Track if menu is open

  const handleMenuToggle = () => {
    setIsMenuOpen(!isMenuOpen); // Toggle the menu open/close state
  };

  const handleLinkClick = () => {
    setIsMenuOpen(false); // Close the menu when a link is clicked
  };

  return (
    <nav className="navbar navbar-expand-lg navbar-dark bg-dark fixed-top">
    
      <div className="container">
        <Link className="navbar-brand d-flex align-items-center" to="/" onClick={handleLinkClick}>
          <FaKeyboard className="me-2" /> {/*     icon with spacing */}
          <b>AlphaTyper</b>
        </Link>

        {/* Navbar Toggler (hamburger) */}
        <button
          className="navbar-toggler"
          type="button"
          data-bs-toggle="collapse"
          data-bs-target="#navbarNav"
          aria-controls="navbarNav"
          aria-expanded={isMenuOpen ? "true" : "false"}
          aria-label="Toggle navigation"
          onClick={handleMenuToggle}
        >
          <span className="navbar-toggler-icon"></span>
        </button>

        {/* Navbar Links */}
        <div className={`collapse navbar-collapse ${isMenuOpen ? "show" : ""}`} id="navbarNav">
          <div className="navbar-nav ms-auto">
            <Link className="nav-link text-white mx-3" to="/" onClick={handleLinkClick}>
              Home
            </Link>
            <Link className="nav-link text-white mx-3" to="/about" onClick={handleLinkClick}>
              About
            </Link>
            <Link className="nav-link text-white mx-3" to="/start" onClick={handleLinkClick}>
              Start
            </Link>
          </div>
        </div>
      </div>
    </nav>
    
  );
};

export default Navbar;
