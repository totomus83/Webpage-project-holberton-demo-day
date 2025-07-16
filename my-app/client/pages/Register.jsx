import React, { useState } from "react";
import { Link, useNavigate } from "react-router-dom";

export default function Register() {
  const [email, setEmail] = useState("");
  const [username, setUsername] = useState("");
  const [password, setPassword] = useState("");
  const [status, setStatus] = useState("");
  const navigate = useNavigate();

  const handleSubmit = async (e) => {
    e.preventDefault();

    try {
      const response = await fetch("http://localhost:5000/api/newsletter/subscribe", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({ email, username, password }),
      });

      const data = await response.json();

      if (response.ok) {
        setStatus("Account created successfully! Redirecting to login...");
        setTimeout(() => navigate("/subscribe"), 1500);
      } else {
        setStatus(data.error || data.message || "Something went wrong");
      }
    } catch (error) {
      setStatus("Error connecting to server");
    }
  };

  return (
    <div className="register-container">
      <h1 className="register-title">Create Account</h1>
      <form className="register-form" onSubmit={handleSubmit}>
        <input
          className="register-input"
          type="email"
          placeholder="Email"
          value={email}
          onChange={(e) => setEmail(e.target.value)}
          required
          autoComplete="email"
        />
        <input
          className="register-input"
          type="text"
          placeholder="Username"
          value={username}
          onChange={(e) => setUsername(e.target.value)}
          required
          autoComplete="username"
        />
        <input
          className="register-input"
          type="password"
          placeholder="Password"
          value={password}
          onChange={(e) => setPassword(e.target.value)}
          required
          autoComplete="new-password"
        />
        <button className="register-button" type="submit">
          Create Account
        </button>
      </form>
      <p className="register-login-text">
        Already have an account?{" "}
        <Link to="/subscribe" className="register-login-link">
          Login here
        </Link>
      </p>
      {status && <p className="register-status">{status}</p>}
    </div>
  );
}
