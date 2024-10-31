// /src/App.tsx

import React from 'react';
import MatrixEffect from './components/MatrixEffect';
import GlitchText from './components/GlitchText';
import heroImage from './assets/hero-min.png';
import { FaDiscord, FaTwitter, FaFacebook } from 'react-icons/fa';

function App() {
  return (
    <div className="min-h-screen bg-darkGreen text-terminalGreen font-terminal relative overflow-hidden">
      {/* Matrix Effect */}
      <MatrixEffect />

      {/* Hero Section */}
      <main>
        <div className="hero-section relative">
          <img src={heroImage} alt="Hero" className="hero-image" />
          <div className="hero-overlay flex items-center">
            <GlitchText text="All Systems Nominal" className="ml-8" />
          </div>
        </div>
      </main>

      {/* Social Links and Mailing List */}
      <section className="absolute bottom-0 w-full p-4 flex justify-between items-center">
        {/* Social Icons */}
        <div className="flex space-x-4">
          <a href="https://smashit.games/discord" target="_blank" rel="noopener noreferrer">
            <FaDiscord size={32} />
          </a>
          {/* Add other social icons as needed */}
        </div>

        {/* Mailing List Signup */}
        <div id="mailing-list">
          <h2 className="text-2xl mb-2">stay updated</h2>
          <form className="flex">
            <input
              type="email"
              placeholder="enter your email"
              className="p-2 bg-transparent border border-terminalGreen text-terminalGreen placeholder-terminalGreen"
            />
            <button type="submit" className="p-2 border border-terminalGreen ml-2">
              sign up
            </button>
          </form>
        </div>
      </section>

      {/* Footer */}
      <footer className="absolute bottom-0 w-full p-2 text-center">
        &copy; {new Date().getFullYear()} smashit.games
      </footer>
    </div>
  );
}

export default App;
