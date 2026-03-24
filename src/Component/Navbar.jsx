import React, { useState } from 'react';
import './Navbar.css';

const Navbar = () => {

  const [menuOpen, setMenuOpen] = useState(false); // 🔥 ye missing tha

  return (
    <nav className="navbar">
      <div className="logo">
        Tech<span>Zone</span>
      </div>

      <div className={`nav-links ${menuOpen ? "active" : ""}`}>
        <a href="#">Home</a>
        <a href="#">Products</a>
        <a href="#">About</a>
        <a href="#">Contact</a>
      </div>

      <div className="icons">
        <span>🛒</span>
        <span>👤</span>
      </div>

      <div className="menu-toggle" onClick={() => setMenuOpen(!menuOpen)}>
        ☰
      </div>
    </nav>
  )
}

export default Navbar;