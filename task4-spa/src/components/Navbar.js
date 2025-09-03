import React from "react";
import { NavLink } from "react-router-dom";
import "./Navbar.css";

function Navbar() {
  return (
    <nav className="navbar">
      <h2 className="logo">Codveda SPA</h2>
      <div className="nav-links">
        <NavLink to="/" end className="nav-item">
          Home
        </NavLink>
        <NavLink to="/about" className="nav-item">
          About
        </NavLink>
        <NavLink to="/contact" className="nav-item">
          Contact
        </NavLink>
      </div>
    </nav>
  );
}

export default Navbar;
