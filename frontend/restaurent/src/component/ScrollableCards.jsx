import React from 'react';
import { FcLike } from 'react-icons/fc';
import { FaRegHeart } from 'react-icons/fa';

const items = [
    { id: 1, name: "Item 1", price: "$20", img: "https://via.placeholder.com/150" },
    { id: 2, name: "Item 2", price: "$30", img: "https://via.placeholder.com/150" },
    { id: 3, name: "Item 3", price: "$40", img: "https://via.placeholder.com/150" },
    // Add more items here up to 10
];

const ScrollableCards = () => {
    return (
        <div className="cards-container">
            {items.map(item => (
                <div className="card" key={item.id}>
                    <img src={item.img} alt={item.name} />
                    <div className="card-content">
                        <h3>{item.name}</h3>
                        <p>{item.price}</p>
                    </div>
                    <div className="card-actions">
                        <button className="like-btn"><FcLike /></button>
                        <button className="wishlist-btn"><FaRegHeart /></button>
                    </div>
                </div>
            ))}
        </div>
    );
};

export default ScrollableCards;
