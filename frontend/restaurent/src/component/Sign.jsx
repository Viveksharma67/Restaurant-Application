import React, { useState } from "react";
import "./Sign.css"; // Import the CSS file
import { Navigate } from "react-router-dom";
import { useNavigate } from "react-router-dom";

const Sign = () => {
  const [username, setUsername] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const navigate = useNavigate();
  // Function to handle form submission
  const handleonchange = async (e) => {
    e.preventDefault(); // Prevent the default form submission behavior

    // Create the user data object
    const userData = {
      username: username,
      email: email,
      password: password,
    };

    try {
      // Send the user data to the backend
      const response = await fetch("http://localhost:3000/signup", { // Replace with your backend URL
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify(userData),
      });

      const result = await response.json(); // Parse the response

      if (response.ok) {
        alert("User registered successfully!");
        navigate("/login"); // Alert on successful registration
      } else {
        alert(`Error: ${result.message}`); // Show an error message if registration fails
      }
    } catch (error) {
      alert("An error occurred while submitting the form."); // Handle any network errors
      console.error("Error:", error);
    }
  };

  return (
    <div className="SignBody">
      <div className="wrapper">
        <form onSubmit={handleonchange}>
          <h1>Sign Up</h1>
          <br />
          <p>Please Sign up to Enter in the Website</p>
          <div className="input-box">
            <input
              type="text"
              placeholder="Username"
              name="username"
              value={username}
              onChange={(e) => setUsername(e.target.value)}
              required
            />
            <i className="bx bxs-user"></i>
          </div>
          <div className="input-box">
            <input
              type="email"
              placeholder="Email"
              name="email"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
              required
            />
            <i className="bx bxs-user"></i>
          </div>
          <div className="input-box">
            <input
              type="password"
              placeholder="Create password"
              name="password"
              value={password}
              onChange={(e) => setPassword(e.target.value)}
              required
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
              Already have an account? <a href="/login">Login</a>
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
};

export default Sign;
