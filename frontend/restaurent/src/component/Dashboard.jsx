import React, { useState, useEffect } from 'react';
import Navbar from './Navbar';
import './Dashboard.css';
import Scrollbar from './Scrollbar';

function Dashboard() {
    return (
        <>
        <div className="dashboard">
            <div className='navv'>
            <Navbar />
            </div>
            <div className="dashboard-content">
                <h1>It’s Not Just A Pizza, It’s An <span className="highlight">Experience</span></h1>
                <p>
                    Come and get some work done at our family-friendly cowork space and private offices with full kitchen while your kids play at our playground.
                </p>
                <button className="order-button">Order Now</button>    
            </div>
        </div>
        </>
    );
}

export default Dashboard;
