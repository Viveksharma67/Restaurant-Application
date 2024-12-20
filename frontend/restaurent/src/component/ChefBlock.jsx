import React from "react";
import "./ChefBlock.css"; // Separate CSS file for styling

const ChefQuote = () => {
  return (
    <div className="chef-quote-container">
      {/* Left Side - Chef Image */}
      <div className="left-section">
        <img
          src="https://www.shutterstock.com/image-photo/professional-chef-adds-salt-steaming-600nw-2153667759.jpg" // Replace with actual image URL
          alt="Chef"
          className="chef-image"
        />
      </div>

      {/* Right Side - Quotes and Review */}
      <div className="right-section">
        <h1 className="quote">"Food is not just eating energy. It's an experience."</h1>
        <p className="restaurant-review">
          Our restaurant is known for its mouth-watering dishes and world-class service.
        </p>
        <div className="star-rating">
          {/* 5 stars */}
          {Array(5)
            .fill()
            .map((_, index) => (
              <span key={index} className="star">★</span>
            ))}
        </div>
      </div>
    </div>
  );
};

export default ChefQuote;
