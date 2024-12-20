import React, { useState } from 'react';
import './Navbar.css';
import { Link } from 'react-router-dom';
import { FcLike } from "react-icons/fc";
import { RiShoppingCart2Fill } from "react-icons/ri";
import { FaUserLarge } from "react-icons/fa6";
const Navbar = () => {
    const [isOpen, setIsOpen] = useState(false);

    const toggleMenu = () => {
        setIsOpen(!isOpen);
    };

    return (
        <nav className="navbar">
            <div className="logo">FOOdie</div>
            <ul className={`nav-links ${isOpen ? "open" : ""}`}>
                <div className="home"><li><Link to="/">Home</Link></li></div>
                <li><a href="#about">About</a></li>
                <li><Link to="/menu">Menu</Link></li>
                <li><a href="#contact">Book Table</a></li>
            </ul>
            <div className="right-icons">
                <Link to="#" className="icon-link">
                    <FcLike size={22} color="red"/>
                </Link>
                <Link to="#" className="icon-link">
                    <RiShoppingCart2Fill size={22} color="white"/>
                </Link>
                <div className="user-icon">
                    <FaUserLarge size={22} color="orange"/>
                </div>
                
            </div>
            <div className={`menu-icon ${isOpen ? "open" : ""}`} onClick={toggleMenu}>
                <div className="bar1"></div>
                <div className="bar2"></div>
                <div className="bar3"></div>
            </div>
        </nav>
    );
};

export default Navbar;
