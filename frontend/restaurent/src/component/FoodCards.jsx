import React, { useEffect, useRef } from 'react';
import './FoodCards.css';
import { gsap } from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';

gsap.registerPlugin(ScrollTrigger);

const FoodCards = () => {
  const cardsRef = useRef([]);


  const foods = [
    { id: 1, name: 'Pizza', price: '$10', img: 'https://media.istockphoto.com/id/1048400936/photo/whole-italian-pizza-on-wooden-table-with-ingredients.jpg?s=612x612&w=0&k=20&c=_1GwSXSjFeC06w3MziyeqRk5Lx-FMXUZzCpxEOoHyzQ=' },
    { id: 2, name: 'Burger', price: '$8', img: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSD1J93pAu3hMA8Y6Q2nu_vtuatNkP4BcEaaA&s' },
    { id: 3, name: 'Pasta', price: '$12', img: 'https://img.freepik.com/free-photo/penne-pasta-tomato-sauce-with-chicken-tomatoes-wooden-table_2829-19739.jpg' },
    { id: 4, name: 'Noodles', price: '$15', img: 'https://img.freepik.com/premium-photo/bowl-fried-noodles-with-pile-parsley-top_893055-88.jpg' },
  ];

  return (
    <div className="containerr">
      <h2>Popular <span className='text-orange-500'>Items</span></h2>
      <div className="cards">
        {foods.map(food => (
          <div key={food.id} className="card">
            <img src={food.img} alt={food.name} className="card-image" />
            <h3 className="food-name">{food.name}</h3>
            <p className="food-price">{food.price}</p>
          </div>
        ))}
      </div>
    </div>
  );
};

export default FoodCards;
