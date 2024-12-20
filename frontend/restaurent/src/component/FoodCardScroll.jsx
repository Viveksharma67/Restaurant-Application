import React, { useEffect, useState } from 'react';
import './FoodCardScroll.css'; // Import the CSS file
import { FcLike } from 'react-icons/fc';  // Like icon
import { RiShoppingCart2Fill } from 'react-icons/ri'; // Wishlist icon

function Items() {
  const [items, setItems] = useState([]);

  useEffect(() => {
    fetch('http://localhost:3000/items')
      .then(response => response.json())
      .then(items => {
        // Shuffle items array to display random data
        const shuffledItems = items.sort(() => Math.random() - 0.5);
        setItems(shuffledItems);
      })
      .catch(error => console.error('Error fetching items:', error));
  }, []);

  return (
    <div className='srti'>
      <h1>variety of foods items -</h1>
      <div className="scroll-container">
        {items.map(item => (
          <div key={item._id} className="cardd">
            <img src={item.imageUrl} alt={item.name} />
            <h2>{item.name}</h2>
            <p className="price">${item.price}</p>
            <button className="order-buttonn">Add +</button>         
          </div>
        ))}
      </div>
    </div>
  );
}

export default Items;
