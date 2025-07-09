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
          <div className="nav-links">
            <a className="nav-button" href="/">Home</a>
            <Link className="nav-button" to="/subscribe">Subscribe</Link>
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
        </div>
      </header>



      <Routes>
        <Route
          path="/"
          element={
            <main>
              <hr className="section-divider" />
              <section className="about-game">
                <h2 className="about-game-title">About Runy</h2>
                <div className="about-game-content">
                  <div className="about-game-text">
                    
                    <p>Discover a fantasy world full of mysteries as a 2 players coop game !</p>
                    <p>For this early build, our game consists of only 2 rooms with 2 different environment. As development continues, more environment, rooms and unique features will be available to the players</p>
                    <a href="/client/downloads/runy.zip" className="download-button" download>
                      Download
                    </a>
                  </div>
                </div>
              </section>
              
              <hr className="section-divider" />

              <section className="current-section">
                <div className="current-overlay">
                  <h1 className="current-state-title">Current state of the Game</h1>
                  <p>The current release of the game has 2 functioning rooms with 2 different athmospheres in an enigmatic world</p>
                  <div className="room-1">
                    <img src="/client/images/room1_view.png" className="image-room-1"/>
                    <video width="400"
                      autoPlay
                      loop
                      muted
                      playsInline
                      className="about-game-video"
                    >
                      <source src="/client/videos/gameplay1.mp4" type="video/mp4" />
                    </video>
                  <p className="room-description">
                    The first room will have a tempesty but also a calming atmosphere. In the middle of the storm and lost at sea, playing as unknown protagonists with untold stories and goals
                  </p>
                  </div>
                  <div className="room-2">
                    <div className="image-room-2">
                      <img src="/client/images/2room1.png"/>
                      <img src="/client/images/2room2.png"/>
                    </div>
                    <p className="room-description">
                      The first room will have a tempesty but also a calming atmosphere. In the middle of the storm and lost at sea, playing as unknown protagonists with untold stories and goals
                    </p>
                  </div>
                  <p>
                    <Link to="/news">See more about development here</Link>
                  </p>
                </div>
              </section>

              <section id="about-us" className="about-us">
                <h2>About Us</h2>
                <div className="about-us-content">
                  <p>Info About the team</p>
                  <p>Runy is our game develloped by our 2 man team</p>
                  <p>Both of us have always been passionate about video game, and after many years of passion we wanted to try and make one ouf our own !</p>

                  <div className="team-photos">
                    <div className="team-member">
                      <img src="/client/images/TraMi.png" className="team-photo" alt="TraMi" />
                      <p className="member-name">TraMi – Developer</p>
                    </div>
                    <div className="team-member">
                      <img src="/client/images/totomus.png" className="team-photo" alt="Totomus" />
                      <p className="member-name">Totomus – Developer</p>
                    </div>
                  </div>

                </div>
              </section>

              <footer id="contact-us" className="contact-us-footer">
                <div className="footer-left">
                  <h2>Contact Us!</h2>
                  <p>Our mission is to bring nostalgia & immersion to our users.</p>
                  <p>Or contact us at: <a href="mailto:runy.newsletter@gmail.com">runy.newsletter@gmail.com</a></p>
                  <p>© 2020 Runy, made with ♥ by students at Holberton School.</p>
                </div>

                  <div className="social-icons">
                    <a href="https://www.instagram.com/" target="_blank" rel="noopener noreferrer">
                      <img src="/client/images/insta.png" alt="Instagram" className="social-icon" />
                    </a>
                    <a href="https://twitter.com" target="_blank" rel="noopener noreferrer">
                      <img src="/client/images/X.png" alt="Twitter/X" className="social-icon twitter-icon" />
                    </a>
                  </div>

                
              </footer>
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
