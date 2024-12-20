import React, { useState, useEffect } from 'react';
import './Circlediv.css'; // Ensure you have your CSS

const RestaurantMenu = () => {
  const [items, setItems] = useState([]);
  const [selectedCuisine, setSelectedCuisine] = useState('Indian'); // Default cuisine

  // Function to fetch items based on cuisine
  const fetchCuisineItems = (cuisine) => {
    fetch(`http://localhost:3000/itemss?cuisine=${cuisine}`)
      .then(response => {
        if (!response.ok) {
          throw new Error('Network response was not ok');
        }
        return response.json();
      })
      .then(data => {
        setItems(data); // Update items only for the selected cuisine
      })
      .catch(error => console.error('Error fetching items:', error));
  };

  // Fetch items when the component mounts
  useEffect(() => {
    fetchCuisineItems(selectedCuisine);
  }, []); // Only run on mount

  // Function to handle cuisine selection
  const handleCuisineClick = (cuisine) => {
    setSelectedCuisine(cuisine);
    fetchCuisineItems(cuisine); // Fetch items for the newly selected cuisine
  };

  const cuisines = [
    { name: 'Indian', imgSrc: 'https://www.tastingtable.com/img/gallery/20-delicious-indian-dishes-you-have-to-try-at-least-once/intro-1645057933.jpg' },
    { name: 'Chinese', imgSrc: '/images/chinese.jpg' },
    { name: 'Italian', imgSrc: '/images/italian.jpg' },
    // Add more cuisines here
  ];

  return (
    <div className="restaurant-menu">
      <div className="cuisine-selection">
        {cuisines.map(cuisine => (
          <div 
            key={cuisine.name} 
            className="cuisine-circle" 
            onClick={() => handleCuisineClick(cuisine.name)}
          >
            <img src={cuisine.imgSrc} alt={cuisine.name} className="cuisine-image" />
            <p>{cuisine.name}</p>
          </div>
        ))}
      </div>

      <div className="items-container">
        {items.length > 0 ? (
          items.map(item => (
            <div key={item._id} className="item-card">
              <h3>{item.name}</h3>
              <p>${item.price}</p>
              <button className="add-to-cart-btn">Add to Cart</button>
            </div>
          ))
        ) : (
          <p>No items available for {selectedCuisine}</p>
        )}
      </div>
    </div>
  );
};

export default RestaurantMenu;
