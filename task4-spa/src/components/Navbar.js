import React, { useState } from "react";
import { NavLink } from "react-router-dom";
import "./Navbar.css";

function Navbar() {
  const [isOpen, setIsOpen] = useState(false);

  const toggleMenu = () => {
    setIsOpen(!isOpen);
  };

  return (
    <nav className="navbar">
      <h2 className="logo">Codveda SPA</h2>
      <div className={`nav-links ${isOpen ? "open" : ""}`}>
        <NavLink to="/" end className="nav-item" onClick={() => setIsOpen(false)}>
          Home
        </NavLink>
        <NavLink to="/about" className="nav-item" onClick={() => setIsOpen(false)}>
          About
        </NavLink>
        <NavLink to="/contact" className="nav-item" onClick={() => setIsOpen(false)}>
          Contact
        </NavLink>
        <NavLink to="/users" className="nav-item" onClick={() => setIsOpen(false)}>
          Users
        </NavLink>
      </div>
      <div className="hamburger" onClick={toggleMenu}>
        ☰
      </div>
    </nav>
  );
}

export default Navbar;
