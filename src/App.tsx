// /src/App.tsx

import React from 'react';
import { Link } from 'react-router-dom';
import GlitchText from './components/GlitchText';
import heroImage from './assets/hero-min.png';
import felSurvivorLogo from './assets/FelSurvivorVR_Logo_V2.png';
import { FaDiscord } from 'react-icons/fa';

function App() {
  return (
    <div className="min-h-screen bg-darkGreen text-terminalGreen font-terminal relative overflow-hidden">
      {/* Hero Section */}
      <div className="w-full h-screen relative flex flex-col items-center justify-center">
        <img src={heroImage} alt="Hero" className="absolute inset-0 w-full h-full object-cover" />

        {/* Top Left Game Logo */}
        <a href="https://smashit.games/felsurvivors" className="absolute top-4 left-4">
          <img src={felSurvivorLogo} alt="Fel Survivors" className="w-24 h-auto" />
        </a>

        {/* Mission Statement (Centered) */}
        <div className="hero-overlay flex items-center">
          <GlitchText
            text="All Systems Nominal"
            className="text-4xl md:text-6xl lg:text-8xl"
          />
        </div>

        {/* Social Icons (Top Right) */}
        <div className="absolute top-4 right-4 flex space-x-4">
          <a
            href="https://smashit.games/discord"
            target="_blank"
            rel="noopener noreferrer"
            aria-label="Discord"
          >
            <FaDiscord size={52} />
          </a>
            {/* Add additional social icons as needed */}
        </div>

        {/* Centered Mailing List Signup */}
        <div className="absolute bottom-16 left-1/2 transform -translate-x-1/2 max-w-xs text-center">
          <h2 className="text-xl mb-2">access the feed</h2>
          <form className="flex justify-center">
            <input
              type="email"
              placeholder="enter your email"
              className="p-2 bg-transparent border border-terminalGreen text-terminalGreen placeholder-terminalGreen flex-grow"
            />
            <button type="submit" className="p-2 border border-terminalGreen ml-2">
              decrypt
            </button>
          </form>
        </div>

        {/* Footer (Bottom Center) */}
        <footer className="absolute bottom-4 w-full text-center text-sm">
          &copy; {new Date().getFullYear()} smashit.games
          <span className="mx-2">|</span>
          <Link to="/privacy-policy" className="underline hover:text-white">
            Privacy Policy
          </Link>
        </footer>
      </div>
    </div>
  );
}

export default App;
