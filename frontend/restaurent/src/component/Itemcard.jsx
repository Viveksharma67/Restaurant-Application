import React from 'react';
import axios from 'axios';

const ItemCard = ({ item, userId }) => {
  const addToCart = async () => {
    try {
      // Make a POST request to the backend to add the item to the user's cart
      const response = await axios.post('/api/add-to-cart', {
        userId: userId,  // The logged-in user's ID
        itemId: item._id // The item ID to add
      });
      alert(response.data.message);
    } catch (error) {
      console.error(error);
      alert('Failed to add item to cart.');
    }
  };

  return (
    <div className="item-card">
      <img src={item.imageUrl} alt={item.name} />
      <h3>{item.name}</h3>
      <p>{item.price}</p>
      <button onClick={addToCart}>Add to Cart</button>
    </div>
  );
};

export default ItemCard;
