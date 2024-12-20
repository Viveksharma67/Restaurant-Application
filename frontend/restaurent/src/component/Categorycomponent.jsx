import React, { useEffect, useState } from 'react';
import axios from 'axios';
import './CategoryComponent.css'; // Import the CSS file

const CategoryComponent = () => {
  const [categories, setCategories] = useState([]);
  const [selectedCategory, setSelectedCategory] = useState('');
  const [items, setItems] = useState([]);

  useEffect(() => {
    const fetchCategories = async () => {
      const response = await axios.get('/api/categories');
      setCategories(response.data);
    };

    fetchCategories();
  }, []);

  useEffect(() => {
    const fetchItems = async () => {
      if (selectedCategory) {
        const response = await axios.get(`/api/items?category=${selectedCategory}`);
        setItems(response.data);
      }
    };

    fetchItems();
  }, [selectedCategory]);

  return (
    <div className="category-container">
      <h1>Select a Category</h1>
      <div className="category-buttons">
        {categories.map((category) => (
          <button
            key={category.id}
            className={`category-button ${selectedCategory === category.name ? 'active' : ''}`}
            onClick={() => setSelectedCategory(category.name)}
          >
            {category.name}
          </button>
        ))}
      </div>

      <h2>Items in {selectedCategory}</h2>
      <div className="items-grid">
        {items.map((item) => (
          <div key={item.id} className="item-card">
            <img src={item.image} alt={item.name} className="item-image" />
            <h3 className="item-name">{item.name}</h3>
            <p className="item-price">${item.price}</p>
          </div>
        ))}
      </div>
    </div>
  );
};

export default CategoryComponent;
