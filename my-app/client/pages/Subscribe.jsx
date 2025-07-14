// src/pages/Login.jsx
import React, { useState } from "react";
import { Link } from "react-router-dom";

export default function Login() {
  const [username, setUsername] = useState("");
  const [password, setPassword] = useState("");
  const [status, setStatus] = useState("");
  const [loggedInUser, setLoggedInUser] = useState(null);

  const handleSubmit = async (e) => {
    e.preventDefault();

    try {
      const response = await fetch("http://localhost:5000/api/newsletter/login", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({ username, password }),
      });

      const data = await response.json();

      if (response.ok) {
        setStatus("Login successful!");
        setLoggedInUser(data.username); // backend returns username
        setUsername("");
        setPassword("");
      } else {
        setStatus(data.message || "Login failed.");
        setLoggedInUser(null);
      }
    } catch (error) {
      console.error("Error:", error);
      setStatus("Something went wrong.");
      setLoggedInUser(null);
    }
  };

  return (
    <div className="login-container">
      <h1 className="login-title">Login</h1>

      {loggedInUser ? (
        <p>Welcome, <strong>{loggedInUser}</strong>!</p>
      ) : (
        <>
          <form className="login-form" onSubmit={handleSubmit}>
            <input
              className="login-input"
              type="text"
              placeholder="Username"
              value={username}
              onChange={(e) => setUsername(e.target.value)}
              required
              autoComplete="username"
            />
            <input
              className="login-input"
              type="password"
              placeholder="Password"
              value={password}
              onChange={(e) => setPassword(e.target.value)}
              required
              autoComplete="current-password"
            />
            <button className="login-button" type="submit">Login</button>
          </form>
          <p className="create-account-text">
            Don't have an account?{" "}
            <Link to="/register" className="create-account-link">
              Create Account
            </Link>
          </p>
        </>
      )}

      {status && <p className="login-status">{status}</p>}
    </div>
  );
}
