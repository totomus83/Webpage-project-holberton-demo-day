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
        headers: {
          "Content-Type": "application/json"
        },
        body: JSON.stringify({ email })
      });

      const data = await response.json();

      if (response.ok) {
        setStatus("Subscribed successfully!");
        setEmail(""); // Clear the field
      } else {
        setStatus(data.message || "Subscription failed.");
      }
    } catch (error) {
      console.error("Error:", error);
      setStatus("Something went wrong.");
    }
  };

  return (
    <div>
      <h1>Subscribe Page</h1>
      <p>Subscribe for updates and more!</p>
      <form onSubmit={handleSubmit}>
        <input
          type="email"
          placeholder="Enter your email"
          value={email}
          onChange={(e) => setEmail(e.target.value)}
          required
        />
        <button type="submit">Subscribe</button>
      </form>
      {status && <p>{status}</p>}
    </div>
  );
}
