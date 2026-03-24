import React from 'react'
import "./Footer.css";

const Footer = () => {
  return (
    <div>
       <footer className="footer">
      <div className="footer-content">
        <h3>MyStore</h3>
        <p>© 2026 All Rights Reserved</p>

        <div className="footer-links">
          <a href="#">Home</a>
          <a href="#">Products</a>
          <a href="#">Contact</a>
        </div>
      </div>
    </footer>
    </div>
  )
}

export default Footer