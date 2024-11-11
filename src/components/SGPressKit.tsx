import React, { useEffect } from 'react';
import { Helmet } from 'react-helmet';
import { Link } from 'react-router-dom';
import smashitLogo from '../assets/smashitgameslogo.png';
import './SGPressKit.css';

const SGPressKit: React.FC = () => {
  useEffect(() => {
    document.body.classList.add('scrollable');
    return () => {
      document.body.classList.remove('scrollable');
    };
  }, []);

  return (
    <div className="presskit-container">
      <Helmet>
        <title>smashit.games - Press Kit</title>
        <meta
          name="description"
          content="Discover smashit.games, an indie VR game studio in Brisbane, Australia. Download our press kit to learn more about our team and games."
        />
        <link rel="canonical" href="https://smashit.games/smashit-games-presskit" />
      </Helmet>

      {/* Header */}
      <header className="presskit-header">
        <img src={smashitLogo} alt="smashit.games Logo" className="presskit-logo" />
        <h1>Press Kit</h1>
      </header>

      {/* Company Overview */}
      <section className="presskit-section">
        <h2>Who We Are</h2>
        <p>
          We’re smashit.games, a VR indie game studio out of Brisbane, Australia, founded by two Rockhampton-born brothers,
          Luke and JB Hewitt, who’ve been chasing the dream of building wild, immersive gaming experiences since forever.
          We’re about making VR games that push boundaries and pull players into new worlds.
        </p>
      </section>

      {/* Founders */}
      <section className="presskit-section">
        <h2>Meet the Team</h2>

        {/* JB Hewitt */}
        <div className="founder">
          <h3>JB Hewitt</h3>
          <p>
            JB’s a veteran in the gaming scene with roots that go way back. He’s been running LAN parties since the early
            2000s with <em><a href="https://lansmash.com" target="_blank" rel="noopener noreferrer">LanSmash</a></em>,
            a Brisbane-based community event that grew into something massive. Inspired by <strong>Doom</strong> and legends
            like <strong>John Carmack</strong>, JB’s all about making VR the future of gaming.
          </p>
        </div>

        {/* Luke Hewitt */}
        <div className="founder">
          <h3>Luke Hewitt</h3>
          <p>
            Luke’s the tech-driven half of smashit.games. After a lot of coding, project management, and pulling off projects
            like <em><a href="https://github.com/The-Kodeashians/OlympicPulse" target="_blank" rel="noopener noreferrer">Olympic Pulse</a></em>,
            he switched gears fully into game dev, bringing smashit.games to the next level.
          </p>
        </div>
      </section>

      {/* Mission Statement */}
      <section className="presskit-section">
        <h2>Our Mission</h2>
        <p>
          We’re on a mission to make VR games that stand out. For us, it’s about creating immersive, groundbreaking
          experiences that make you forget the world around you.
        </p>
      </section>

      {/* Media Assets */}
      <section className="presskit-section">
        <h2>Media Assets</h2>
        <ul>
          <li>
            <a href="/smashitgameslogo.png" download>
              Company Logo
            </a>
          </li>
        </ul>
      </section>

      {/* Contact Information */}
      <section className="presskit-section">
        <h2>Contact Us</h2>
        <p>
          Got questions? Need more info? Reach us at{' '}
          <a href="mailto:press@smashit.games">press@smashit.games</a>.
        </p>
      </section>

      {/* Back to Home Link */}
      <footer className="presskit-footer">
        <Link to="/">← Back to Home</Link>
      </footer>
    </div>
  );
};

export default SGPressKit;
