import React from 'react';
import './Landing.css';
import { Link } from 'react-router-dom';

function Landing() {
    return (
        <div className='landing-page'>
            <div className="landbody w-full h-screen">
                <div className="nav w-full h-[80px]">
                    <div className="logo text-amber-500">
                        <h1>FOOdie</h1>
                    </div>
                    <div className="sign">
                        <div className="signup rounded-md bg-amber-500">
                            <Link to="/sign">Sign Up</Link>
                        </div>
                        <div className="login"><Link to="/login">Login</Link></div>
                    </div>
                </div>
                <div className="circular-div"></div>
                <div className="circular-div2"></div>
                
                <div className="content">
                    <div className="text-content">
                        <h2>Enjoy Our Delicious Meal</h2>
                        <p>
                            Tempor erat elitr rebum at clita. Diam dolor diam ipsum sit. Aliqu diam
                            amet diam et eos. Clita erat ipsum et lorem et sit, sed stet lorem sit
                            clita duo justo magna dolore erat amet.
                        </p>
                        <button className="book-table"><Link to="/sign">Book a Table</Link></button>
                    </div>
                    <div className="image-content">
                        <img src="https://img.freepik.com/premium-photo/restaurant-food-black-plate-restaurant-style-photo-top-view_946657-7963.jpg" alt="Circular Plate" />
                    </div>
                </div>
            </div>
        </div>
    );
}

export default Landing;
