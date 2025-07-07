import React from "react"
import { Link, Routes, Route } from "react-router-dom"
import News from './pages/News'
import Subscribe from './pages/Subscribe'
import './index.css'

function App() {
  return (
    <>
      <header>
        <div className="nav-bar">
          <Link className="nav-button" to="/">Home</Link>
          <Link className="nav-button subscribe"to="/subscribe">Subscribe</Link>
          <Link className="nav-button" to="/news">News</Link>
          <button
            className="nav-button"
            onClick={() => document.getElementById("about-us")?.scrollIntoView({ behavior: "smooth" })}
          >
            About Us
          </button>
          <button
            className="nav-button"
            onClick={() => document.getElementById("contact-us")?.scrollIntoView({ behavior: "smooth" })}
          >
            Contact Us
          </button>
        </div>
      </header>

      <Routes>
        <Route
          path="/"
          element={
            <main>
              <h1 className="game-title">Runy</h1>

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

              <section id="about-us" className="about-us">
                <h2>About Us</h2>
                <div className="about-us-content">
                  <p>Info About the team</p>
                </div>
              </section>
              <section id="contact-us" className="contact-us">
                <h2>Contact Us !</h2>
                <div className="social-links">
                  <div className="social-icons">
                    <a href="https://www.instagram.com/" target="_blank" rel="noopener noreferrer">
                      <img src="/client/images/insta.png" alt="Instagram" className="social-icon" />
                    </a>
                    <a href="https://twitter.com" target="_blank" rel="noopener noreferrer">
                      <img src="/client/images/X.png" alt="Twitter/X" className="social-icon twitter-icon" />
                    </a>
                    <p>Or contact us at: <a href="mailto:runy.newsletter@gmail.com">runy.newsletter@gmail.com</a></p>
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
