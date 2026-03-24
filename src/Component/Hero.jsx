import React from "react";
import "./Hero.css";

const Hero = () => {
  return (
    <section className="hero">
      <div className="hero-content">
        <h1>Best Deals on Laptops & Accessories</h1>
        <p>High Performance. Best Prices. Trusted Quality.</p>
        <button className="hero-btn">Shop Now</button>
      </div>

      <div className="hero-image">
        <img
          src="https://images.unsplash.com/photo-1517336714731-489689fd1ca8"
          alt="laptop"
        />
      </div>
    </section>
  );
};

export default Hero;