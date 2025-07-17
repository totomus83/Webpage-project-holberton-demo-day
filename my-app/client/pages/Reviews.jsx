// src/pages/Reviews.jsx
import React, { useState, useEffect, useContext } from "react";
import { UserContext } from "../context/UserContext.jsx"; // ⬅️ Add this
import { useNavigate } from "react-router-dom";


export default function Reviews() {
  const { user } = useContext(UserContext); // ⬅️ Get user from context
  const navigate = useNavigate();

  const [reviews, setReviews] = useState([]);
  const [rating, setRating] = useState(5);
  const [comment, setComment] = useState("");
  const [status, setStatus] = useState("");

  useEffect(() => {
    // Redirect to login (Subscribe) if user is not logged in
    if (!user) {
      navigate("/subscribe"); // ⬅️ Adjust if your login page is different
    }
  }, [user, navigate]);

  useEffect(() => {
    fetch("http://localhost:5000/api/reviews")
      .then((res) => res.json())
      .then((data) => setReviews(data))
      .catch(() => setStatus("Failed to load reviews."));
  }, []);

  const handleSubmit = async (e) => {
    e.preventDefault();

    try {
      const response = await fetch("http://localhost:5000/api/reviews", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({ username: user.username, rating, comment }),
      });

      const data = await response.json();

      if (response.ok) {
        setReviews((prev) => [...prev, data.review]);
        setComment("");
        setRating(5);
        setStatus("Review added successfully!");
      } else {
        setStatus(data.message || "Failed to add review.");
      }
    } catch (error) {
      console.error(error);
      setStatus("Something went wrong.");
    }
  };

  return (
    <>
    <hr className="section-divider" />
    <div className="page-wrapper">
      <div className="reviews-container">
        <h1>Reviews</h1>
        <p>
          Welcome, <strong>{user?.username || "Anonymous"}</strong>! Leave your review below:
        </p>

        <form onSubmit={handleSubmit}>
          <label>
            Rating:
            <select
              value={rating}
              onChange={(e) => setRating(Number(e.target.value))}
              required
            >
              {[1, 2, 3, 4, 5].map((r) => (
                <option key={r} value={r}>{r}</option>
              ))}
            </select>
          </label>

          <label>
            Comment:
            <textarea
              value={comment}
              onChange={(e) => setComment(e.target.value)}
              required
            />
          </label>

          <button type="submit">Submit Review</button>
        </form>

        {status && <p>{status}</p>}

        <h2>All Reviews</h2>
        <ul>
          {reviews.length === 0 && <p>No reviews yet.</p>}
          {reviews.map((review) => (
            <li key={review.id}>
              <strong>{review.username}</strong> ({review.rating} stars): {review.comment}
              <br />
              <small>{new Date(review.created_at).toLocaleString()}</small>
            </li>
          ))}
        </ul>
      </div>
    </div>
    </>
  );
}
