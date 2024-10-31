// /src/App.tsx

import React from 'react';
import heroImage from '../assets/hero-min.png';

function App() {
  return (
    <div className="min-h-screen bg-darkGreen text-terminalGreen font-terminal flex flex-col items-center">
      {/* Logo and Navigation */}
      <header className="w-full max-w-6xl p-4 flex flex-col md:flex-row justify-between items-center">
        <div className="text-5xl mb-4 md:mb-0">
          smashit.games
        </div>
        <nav className="space-x-4">
          <a href="https://smashit.games/discord">Discord</a>
          <a href="#mailing-list">Mailing List</a>
        </nav>
      </header>

      {/* Hero Section */}
      <main className="flex-1 w-full max-w-6xl flex flex-col-reverse md:flex-row items-center p-4">
        <div className="md:w-1/2 text-center md:text-left">
          <h1 className="text-6xl mb-4">Fel Survivors</h1>
          <p className="text-2xl mb-6">
            An upcoming VR experience that pushes the boundaries of reality.
          </p>
          <a href="https://smashit.games/discord" className="text-2xl">
            Join our Discord
          </a>
        </div>
        <div className="md:w-1/2 mb-6 md:mb-0">
          <img src={heroImage} alt="Hero" className="w-full border border-terminalGreen" />
        </div>
      </main>

      {/* Mailing List */}
      <section id="mailing-list" className="w-full max-w-6xl p-4">
        <h2 className="text-4xl mb-4">Stay Updated</h2>
        <form className="flex flex-col md:flex-row items-center">
          <input
            type="email"
            placeholder="Enter your email"
            className="p-2 mb-4 md:mb-0 md:mr-4 w-full md:w-auto"
          />
          <button type="submit" className="p-2 border border-terminalGreen">
            Sign Up
          </button>
        </form>
      </section>

      {/* Footer */}
      <footer className="w-full max-w-6xl p-4 text-center">
        &copy; {new Date().getFullYear()} smashit.games
      </footer>
    </div>
  );
}

export default App;
