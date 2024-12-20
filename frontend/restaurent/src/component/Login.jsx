import React, { useState } from 'react';
import { Link, useNavigate } from 'react-router-dom';

function Login() {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const navigate = useNavigate();

  const handleSubmit = async (e) => {
    e.preventDefault();
    const userData = { email, password };

    try {
        const response = await fetch('http://localhost:3000/login', {
            method: 'POST',
            headers: { 'Content-Type': 'application/json' },
            body: JSON.stringify(userData),
        });

        if (response.ok) {
            const data = await response.json();
            localStorage.setItem('token', data.token);          
            localStorage.setItem('username', data.username);
            navigate('/Home');         
        } else {
            const errorData = await response.json();
            console.log('Login failed:', errorData.message); // Log error message
        }
    } catch (error) {
        console.error('Error:', error);
    }
};


  return (
    <div className="SignBody">
      <div className="wrapper">
        <form onSubmit={handleSubmit}>
          <h1>Login</h1>
          <br />
          <p>Please Login to Enter in the Website</p>
          <div className="input-box">
            <input
              type="email"
              placeholder="Email"
              required
              value={email}
              onChange={(e) => setEmail(e.target.value)}
            />
            <i className="bx bxs-user"></i>
          </div>
          <div className="input-box">
            <input
              type="password"
              placeholder="Enter password"
              required
              value={password}
              onChange={(e) => setPassword(e.target.value)}
            />
            <i className="bx bxs-lock-alt"></i>
          </div>
          <div className="remember-forgot">
            <label>
              <input type="checkbox" />
              Remember me
            </label>
          </div>
          <button type="submit" className="btn">
            Continue
          </button>
          <div className="register-link">
            <p>
              Don't have an account?<Link to="/sign">Sign Up</Link>
            </p>
          </div>
        </form>
        <p>
          By clicking the sign up button, you agree to our <br />
          <a href="">Terms & Condition</a> and <a href="#">Privacy Policy</a>
        </p>
      </div>
    </div>
  );
}

export default Login;
