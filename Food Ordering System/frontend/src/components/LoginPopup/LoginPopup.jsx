<<<<<<< HEAD
import React, { useState } from 'react';
import './LoginPopup.css';
import { assets } from '../../assets/assets';

const LoginPopup = ({ setShowLogin }) => {
  const [currState, setCurrState] = useState("Login");
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    password: ""
  });
  const [error, setError] = useState("");

  const handleInputChange = (e) => {
    const { name, value } = e.target;
    setFormData((prev) => ({ ...prev, [name]: value }));
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    setError(""); // Clear previous errors

    const url = currState === "Login" ? "http://localhost:5000/api/login" : "http://localhost:5000/api/signup";

    try {
      const response = await fetch(url, {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(formData),
      });

      const result = await response.json();

      if (response.ok) {
        alert(result.message); // Display success message
        if (currState === "Login") {
          console.log("User ID:", result.userId); // Handle login success
        }
        setShowLogin(false); // Close popup on success
      } else {
        setError(result.error); // Display backend error
      }
    } catch (error) {
      console.error("Error during form submission:", error);
      setError("An error occurred. Please try again later.");
    }
  };

  return (
    <div className='login-popup'>
      <form className="login-popup-container" onSubmit={handleSubmit}>
        <div className="login-popup-title">
          <h2>{currState}</h2>
          <img onClick={() => setShowLogin(false)} src={assets.cross_icon} alt="Close" />
        </div>
        <div className="login-popup-inputs">
          {currState === "Sign Up" && (
            <input
              type="text"
              name="name"
              placeholder="Your name"
              value={formData.name}
              onChange={handleInputChange}
              required
            />
          )}
          <input
            type="email"
            name="email"
            placeholder="Your email"
            value={formData.email}
            onChange={handleInputChange}
            required
          />
          <input
            type="password"
            name="password"
            placeholder="Password"
            value={formData.password}
            onChange={handleInputChange}
            required
          />
        </div>
        {error && <p className="error-message">{error}</p>}
        <button type="submit">
          {currState === "Sign Up" ? "Create Account" : "Login"}
        </button>
        <div className="login-popup-condition">
          <input type="checkbox" required />
          <p>By continuing, I agree to the terms of use & privacy policy.</p>
        </div>
        {currState === "Login" ? (
          <p>
            Create a new account?{" "}
            <span onClick={() => setCurrState("Sign Up")}>Click here</span>
          </p>
        ) : (
          <p>
            Already have an account?{" "}
            <span onClick={() => setCurrState("Login")}>Login here</span>
          </p>
        )}
      </form>
    </div>
  );
};

=======
import React, { useState } from "react";
import "./LoginPopup.css";
import { Snackbar, Alert } from "@mui/material";

const LoginPopup = ({ setUserName }) => {
  const [isLogin, setIsLogin] = useState(true);
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [name, setName] = useState(""); // State for name (used in signup)
  const [message, setMessage] = useState(""); // State for message display
  const [severity, setSeverity] = useState("success"); // State for message severity
  const [open, setOpen] = useState(false); // State to control Snackbar visibility

  const toggleForm = () => setIsLogin(!isLogin);

  const handleSubmit = async (e) => {
    e.preventDefault();

    if (isLogin) {
      // Login logic
      const loginResponse = await fetch("http://localhost:5000/api/login", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({ email, password }),
      });

      const loginData = await loginResponse.json();

      if (loginResponse.ok) {
        setMessage("Login successful!");
        setSeverity("success");

        if (loginData.userName) {
          localStorage.setItem("userName", loginData.userName); // Save userName to localStorage
          setUserName(loginData.userName);
        }
        if (loginData.userId) {
          localStorage.setItem("userId", loginData.userId); // Save userId to localStorage
        }

        setOpen(true);

        // Reload the page or trigger a global state update to reflect changes
        setTimeout(() => window.location.reload(), 1000);
      } else {
        setMessage(loginData.error || "Login failed!");
        setSeverity("error");
        setOpen(true);
      }
    } else {
      // Signup logic
      const signupResponse = await fetch("http://localhost:5000/api/signup", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({ name, email, password }),
      });

      const signupData = await signupResponse.json();

      if (signupResponse.ok) {
        setMessage("Account created successfully!");
        setSeverity("success");
        setOpen(true);
        setIsLogin(true);
      } else {
        setMessage(signupData.error || "Signup failed!");
        setSeverity("error");
        setOpen(true);
      }
    }
  };

  const handleCloseSnackbar = () => setOpen(false);

  return (
    <div className="login-page">
      <div className="login-card">
        <h2 className="login-title">{isLogin ? "Login to Tomato" : "Create Your Account"}</h2>
        <form className="login-form" onSubmit={handleSubmit}>
          {!isLogin && (
            <div className="form-group">
              <label htmlFor="name">Name:</label>
              <input
                type="text"
                id="name"
                value={name}
                onChange={(e) => setName(e.target.value)}
                placeholder="Enter your name"
              />
            </div>
          )}
          <div className="form-group">
            <label htmlFor="email">Email:</label>
            <input
              type="email"
              id="email"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
              placeholder="Enter your email"
            />
          </div>
          <div className="form-group">
            <label htmlFor="password">Password:</label>
            <input
              type="password"
              id="password"
              value={password}
              onChange={(e) => setPassword(e.target.value)}
              placeholder="Enter your password"
            />
          </div>
          <button type="submit" className="form-button">
            {isLogin ? "Login" : "Create Account"}
          </button>
        </form>

        <p className="toggle-form-text">
          {isLogin ? "Don't have an account?" : "Already have an account?"}
          <span className="toggle-form-link" onClick={toggleForm}>
            {isLogin ? " Create one" : " Login"}
          </span>
        </p>
      </div>

      <Snackbar
        open={open}
        autoHideDuration={6000}
        onClose={handleCloseSnackbar}
        anchorOrigin={{ vertical: "top", horizontal: "center" }}
      >
        <Alert onClose={handleCloseSnackbar} severity={severity}>
          {message}
        </Alert>
      </Snackbar>
    </div>
  );
};

>>>>>>> b2401201ce823092ae9a160f1ae9fb8ba71fb560
export default LoginPopup;
