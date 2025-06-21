import React from "react";
import { Link, Routes, Route } from "react-router-dom";  // import Routes and Route
import News from "./pages/News";
import Subscribe from "./pages/Subscribe";

import "./index.css";

function App() {
  return (
    <>
      <header>
        <div className="nav-bar">
          <Link className="nav-button" to="/">Home</Link>
          <Link className="nav-button subscribe"to="/subscribe">Subscribe</Link>
          <Link className="nav-button" to="/news">News</Link>
          <button className="nav-button">About Us</button>
          <button className="nav-button">Contact Us</button>
        </div>
      </header>

      <Routes>
        <Route
          path="/"
          element={
            <main>
              <h1 className="game-title">The Name Of The Game</h1>

              <section className="about-game">
                <h2>About the Game</h2>
                <div className="about-game-content">
                  <video width="400" controls>
                    <source src="/gameplay.mp4" type="video/mp4" />
                  </video>
                  <p>Test</p>
                </div>
              </section>

              <section className="news-section">
                <div className="news-overlay">
                  <h2>News</h2>
                  <video width="400" controls>
                    <source src="/news.mp4" type="video/mp4" />
                  </video>
                  <p>News about the game here</p>
                  <p>
                    <Link to="/news">See more about development here</Link>
                  </p>
                </div>
              </section>

              <section className="about-us">
                <h2>About Us</h2>
                <div className="about-us-content">
                  <p>Info About the team</p>
                  <div className="social-links">
                    <a href="#">Facebook</a> | <a href="#">Twitter</a> | <a href="#">Instagram</a>
                  </div>
                </div>
              </section>
            </main>
          }
        />
        <Route path="/news" element={<News />} />
        <Route path="/subscribe" element={<Subscribe />} />
      </Routes>
    </>
  );
}

export default App;
