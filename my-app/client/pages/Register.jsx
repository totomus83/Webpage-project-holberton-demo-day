// src/pages/Register.jsx
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

    console.log("Submitting form", { email, username, password });

    try {
      const response = await fetch("http://localhost:5000/api/newsletter/subscribe", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify({ email, username, password }),
      });

      const data = await response.json();
      console.log("Response from server:", data);

      if (response.ok) {
        setStatus("Account created successfully! Redirecting to login...");
        setTimeout(() => navigate("/subscribe"), 1500); // ou "/login" selon ta route
      } else {
        setStatus(data.error || data.message || "Something went wrong");
      }
    } catch (error) {
      console.error("Error submitting form:", error);
      setStatus("Error connecting to server");
    }
  };

  return (
    <div style={{ maxWidth: 400, margin: "auto", padding: 20 }}>
      <h1>Register</h1>
      <form onSubmit={handleSubmit}>
        <input
          type="email"
          placeholder="Email"
          value={email}
          onChange={(e) => setEmail(e.target.value)}
          required
          style={{ width: "100%", padding: 8, marginBottom: 10 }}
        />
        <input
          type="text"
          placeholder="Username"
          value={username}
          onChange={(e) => setUsername(e.target.value)}
          required
          style={{ width: "100%", padding: 8, marginBottom: 10 }}
        />
        <input
          type="password"
          placeholder="Password"
          value={password}
          onChange={(e) => setPassword(e.target.value)}
          required
          style={{ width: "100%", padding: 8, marginBottom: 10 }}
        />
        <button type="submit" style={{ width: "100%", padding: 10 }}>
          Create Account
        </button>
      </form>
      <p style={{ marginTop: 15 }}>
        Already have an account? <Link to="/subscribe">Login here</Link>
      </p>
      {status && <p>{status}</p>}
    </div>
  );
}
