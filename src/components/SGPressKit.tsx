// src/components/SGPressKit.tsx

import React, { useEffect } from 'react';
import { Link } from 'react-router-dom';
import smashitLogo from '../assets/smashitgameslogo.png';
import './SGPressKit.css';

const SGPressKit: React.FC = () => {
  useEffect(() => {
    // Enable scrolling when this component is mounted
    document.body.classList.add('scrollable');

    // Clean up by removing the scrollable class when the component is unmounted
    return () => {
      document.body.classList.remove('scrollable');
    };
  }, []);

  return (
    <div className="presskit-container">
      {/* Header */}
      <header className="presskit-header">
        <img src={smashitLogo} alt="smashit.games Logo" className="presskit-logo" />
        <h1>Press Kit</h1>
      </header>

      {/* Company Overview */}
      <section className="presskit-section">
        <h2>Who We Are</h2>
        <p>
          We’re smashit.games, a VR indie game studio out of Brisbane, Australia, founded by two Rockhampton-born brothers, Luke and JB Hewitt, who’ve been chasing the dream of building wild, immersive gaming experiences since forever. We’re about making VR games that push boundaries and pull players into new worlds.
        </p>
      </section>

      {/* Founders */}
      <section className="presskit-section">
        <h2>Meet the Team</h2>

        {/* JB Hewitt */}
        <div className="founder">
          <h3>JB Hewitt</h3>
          <p>
            JB’s a veteran in the gaming scene with roots that go way back. He’s been running LAN parties since the early 2000s with <em><a href="https://lansmash.com" target="_blank" rel="noopener noreferrer">LanSmash</a></em>,
            a Brisbane-based community event that grew into something massive. That led him to co-found VIM Media & Events, shaking up Australia’s esports scene before joining forces with ESL, where he’s now the Managing Director of Asia Pacific. Inspired by <strong>Doom</strong> and legends like <strong>John Carmack</strong>, JB’s all about making VR the future of gaming.
          </p>
        </div>

        {/* Divider */}
        <br />
        <hr />

        {/* Luke Hewitt */}
        <div className="founder">
          <h3>Luke Hewitt</h3>
          <p>
            Luke’s the tech-driven half of smashit.games. Originally a sys-admin, he’s a UQ grad with a Bachelor of IT. After a lot of coding, project management, and pulling off projects like <em><a href="https://github.com/The-Kodeashians/OlympicPulse" target="_blank" rel="noopener noreferrer">Olympic Pulse</a></em> (an AR experience built for the Olympics), he switched gears fully into game dev. He’s here to bring smashit.games to the next level, building VR experiences that pack a punch.
          </p>
        </div>
      </section>

      {/* Mission Statement */}
      <section className="presskit-section">
        <h2>Our Mission</h2>
        <p>
          We’re on a mission to make VR games that stand out. For us, it’s about creating immersive, groundbreaking
          experiences that make you forget the world around you. We’re dedicated to growing Brisbane’s game dev
          community and building something lasting, inclusive, and innovative.
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
        <p>
          Check out our website: {' '}
          <a href="https://smashit.games" target="_blank" rel="noopener noreferrer">
            smashit.games
          </a>
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
