import React from "react";
import "./Review.css";

const Review = () => {
  return (
    <div className="review-section">
      <h2>Customer Reviews</h2>

      <div className="review-container">
        <div className="review-card">
          <h4>Rahul</h4>
          <p>⭐⭐⭐⭐⭐</p>
          <p>Awesome laptop, performance is great!</p>
        </div>

        <div className="review-card">
          <h4>Anjali</h4>
          <p>⭐⭐⭐⭐</p>
          <p>Good quality but battery could be better.</p>
        </div>

        <div className="review-card">
          <h4>Amit</h4>
          <p>⭐⭐⭐⭐⭐</p>
          <p>Value for money, highly recommended.</p>
        </div>
      </div>
    </div>
  );
};

export default Review;