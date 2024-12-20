import React from 'react';
import './Scrollbar.css'; // Import CSS for styling

function Scrollbar() {
  const items = ['Pizza', 'Burger', 'Pasta', 'Sushi', 'Tacos', 'Salad', 'Steak', 'Ice Cream'];

  return (
    <div className="scrollbar-container">
      <h2 className="menu-title">Popular Items</h2>
      <div className="scrollbar">
        {items.map((item, index) => (
          <div key={index} className="scroll-item">
            {item}
          </div>
        ))}
      </div>
    </div>
  );
}

export default Scrollbar;
