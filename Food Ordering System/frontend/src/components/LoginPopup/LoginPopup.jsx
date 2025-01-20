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

export default LoginPopup;
