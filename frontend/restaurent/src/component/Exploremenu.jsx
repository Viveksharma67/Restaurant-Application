import React, { useState, useEffect } from 'react';
import axios from 'axios';
import './Exploremenu.css';

const Exploremenu = () => {
    // Categories array with image and name
    const categories = [
        { name: 'Indian Cuisine', imageUrl: 'https://www.tastingtable.com/img/gallery/20-delicious-indian-dishes-you-have-to-try-at-least-once/intro-1645057933.jpg' },
        { name: 'Noodles', imageUrl: 'https://static.vecteezy.com/system/resources/thumbnails/023/580/730/small_2x/chow-mein-fried-noodles-with-chicken-and-vegetables-generative-ai-photo.jpg' },
        { name: 'Pizza', imageUrl: 'https://t3.ftcdn.net/jpg/07/02/28/08/360_F_702280843_CJXA8zwGZ5MryWxa1zoAFZQgJKGncP1G.jpg' },
        { name: 'Burger', imageUrl: 'https://cdn.pixabay.com/photo/2023/03/05/11/02/burger-7831128_960_720.jpg' },
        { name: 'Pasta', imageUrl: 'https://img.freepik.com/free-photo/penne-pasta-tomato-sauce-with-chicken-tomatoes-wooden-table_2829-19739.jpg' },
        { name: 'Manchurian', imageUrl: 'https://previews.123rf.com/images/indianfoodimages/indianfoodimages1904/indianfoodimages190400878/121766046-veg-or-chicken-manchurian-with-gravy-popular-indo-chinese-food.jpg' },
        { name: 'Momos', imageUrl: 'https://t3.ftcdn.net/jpg/06/16/85/60/360_F_616856040_zCvPMQkPFOWsVb3Hxo7mQUYzlzciFCZs.jpg' },
        { name: 'Sandwich', imageUrl: 'https://static.vecteezy.com/system/resources/previews/044/179/737/non_2x/two-sandwiches-with-a-side-of-salad-and-a-bowl-of-sauce-photo.jpeg' }
    ];

    // State for selected category and items
    const [selectedCategory, setSelectedCategory] = useState('Indian Cuisine'); // Default category
    const [items, setItems] = useState([]);

    // Fetch items based on selected category
    useEffect(() => {
        const fetchItems = async () => {
            try {
                const response = await axios.get(`http://localhost:3000/itemes/${selectedCategory}`);
                setItems(response.data);
            } catch (error) {
                console.error("Error fetching items", error);
            }
        };

        fetchItems();
    }, [selectedCategory]); // Runs every time the selected category changes

    return (
        <div className='category'>
            {/* Circle Div for Category Menu */}
            <h2>Explore Menu</h2>
            <div className="category-menu">
                {categories.map((category, index) => (
                    <div key={index} className="circle-div-wrapper">
                        <div 
                            className="circle-div" 
                            onClick={() => setSelectedCategory(category.name)} // Set the selected category on click
                            style={{ cursor: 'pointer' }}
                        >
                            <img src={category.imageUrl} alt={category.name} className="category-image" />
                        </div>
                        <p>{category.name}</p> {/* Category Name Below Circle */}
                    </div>
                ))}
            </div>

            {/* Items Display */}
            <div className="items-display">
                <h3>Items for {selectedCategory}</h3>
                <div className="items-container">
                    {items.map(item => (
                        <div key={item._id} className="item-card">
                            <img src={item.imageUrl} alt={item.name} />
                            <h3>{item.name}</h3>
                            <p>Price: ${item.price}</p>
                            <button>Add +</button>
                        </div>
                    ))}
                </div>
            </div>
        </div>
    );
};

export default Exploremenu;
