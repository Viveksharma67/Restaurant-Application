// SignUp.jsx
import React from 'react';
import './SignUp.css'; // CSS file ko import karein

function SignUp() {
  return (
    <div className='signbody'>
    <div className="signup-container">
      <div className="signup-card">
        <h2>Sign Up</h2>
        <form>
          <div className="input-group">
            <label htmlFor="name">Name</label>
            <input type="text" id="name" placeholder="Enter your name" />
          </div>
          <div className="input-group">
            <label htmlFor="email">Email</label>
            <input type="email" id="email" placeholder="Enter your email" />
          </div>
          <div className="input-group">
            <label htmlFor="password">Password</label>
            <input type="password" id="password" placeholder="Enter your password" />
          </div>
          <button type="submit">Sign Up</button>
        </form>
      </div>
    </div>
    </div>
  );
}

export default SignUp;
