// src/pages/Subscribe.jsx
import React, { useState } from "react";

export default function Subscribe() {
  const [email, setEmail] = useState("");
  const [status, setStatus] = useState("");

  const handleSubmit = async (e) => {
    e.preventDefault();

    try {
      const response = await fetch("http://localhost:5000/api/newsletter/subscribe", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({ email }),
      });

      const data = await response.json();

      if (response.ok) {
        setStatus("Subscribed successfully!");
        setEmail("");
      } else {
        setStatus(data.message || "Subscription failed.");
      }
    } catch (error) {
      console.error("Error:", error);
      setStatus("Something went wrong.");
    }
  };

  return (
    <>
      <div className="background-blur"></div>
      <div className="subscribe-container">
        <h1 className="subscribe-title">Subscribe</h1>
        <p className="subscribe-description">Subscribe for updates about the game and more!</p>
        <form className="subscribe-form" onSubmit={handleSubmit}>
          <input
            className="subscribe-input"
            type="email"
            placeholder="Enter your email"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
            required
          />
          <button className="subscribe-button" type="submit">Submit</button>
        </form>
        {status && <p className="subscribe-status">{status}</p>}
      </div>
    </>
  );
}
