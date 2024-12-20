// src/App.tsx

import React, { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';
import GlitchText from './components/GlitchText';
import TerminalModal from './components/TerminalModal';
import heroImage from './assets/hero-min.png';
import felSurvivorLogo from './assets/FelSurvivorVR_Logo_V2.png';
import { FaDiscord } from 'react-icons/fa';
import { motion, AnimatePresence } from 'framer-motion';

function App() {
  const [isModalOpen, setIsModalOpen] = useState(false);
  const [isShaking, setIsShaking] = useState(false);

  useEffect(() => {
    const interval = setInterval(() => {
      setIsShaking(true);
      setTimeout(() => setIsShaking(false), 500); // Shake duration
    }, 5000); // Shake every 5 seconds

    return () => clearInterval(interval);
  }, []);

  const toggleModal = () => setIsModalOpen((prev) => !prev);

  const shakeVariants = {
    shake: {
      rotate: [0, -10, 10, -10, 10, 0],
      transition: { duration: 0.5 },
    },
    initial: {},
  };

  const glitchVariants = {
    hover: {
      textShadow: [
        '0px 0px 0px #fff',
        '2px 2px 0px #f00',
        '-2px -2px 0px #0f0',
        '2px -2px 0px #00f',
        '0px 0px 0px #fff',
      ],
      transition: { duration: 0.3, yoyo: Infinity },
    },
  };

  return (
    <div className="min-h-screen bg-darkGreen text-terminalGreen font-terminal relative overflow-hidden">
      {/* Hero Section */}
      <div className="w-full h-screen relative flex flex-col items-center justify-center">
        <img src={heroImage} alt="Hero" className="absolute inset-0 w-full h-full object-cover" />

        {/* Top Left Game Logo with Hover Effect */}
        <div className="absolute top-6 left-6 p-5">
          <motion.div
            onClick={toggleModal}
            className="relative cursor-pointer"
            variants={shakeVariants}
            animate={isShaking ? 'shake' : 'initial'}
            whileHover="shake"
            style={{ boxShadow: isModalOpen ? '0 0 15px #003300' : 'none', borderRadius: '50%' }}
          >
            <img src={felSurvivorLogo} alt="Fel Survivors" className="w-24 h-auto" />
          </motion.div>

          {/* Terminal Modal */}
          <AnimatePresence>{isModalOpen && <TerminalModal isOpen={isModalOpen} />}</AnimatePresence>
        </div>

        {/* Mission Statement (Centered) */}
        <div className="hero-overlay flex items-center">
          <GlitchText text="All Systems Nominal" className="text-4xl md:text-6xl lg:text-8xl" />
        </div>

        {/* Social Icons with Hover Effect (Top Right) */}
        <div className="absolute top-6 right-6 flex space-x-4 p-2">
          <Link to="discord" aria-label="Discord" className="p-5">
            <motion.div variants={glitchVariants} whileHover="hover">
              <FaDiscord size={52} />
            </motion.div>
          </Link>
        </div>

        {/* Mailing List Subscription Form */}
        <div className="absolute bottom-16 left-1/2 transform -translate-x-1/2 max-w-xs text-center">
          <h2 className="text-xl mb-2">access the feed</h2>
          <form
            method="post"
            action="https://listmonk.smashit.games/subscription/form"
            target="_blank"
            className="flex flex-col items-center listmonk-form"
          >
            <input
              type="hidden"
              name="l"
              value="02fe8640-ed4c-465c-b3c7-6c330453b07d"
            />
            <input
              type="email"
              name="email"
              required
              placeholder="E-mail"
              className="p-2 bg-transparent border border-terminalGreen text-terminalGreen placeholder-terminalGreen w-full mb-2"
            />
            <input
              type="text"
              name="name"
              placeholder="Name (optional)"
              className="p-2 bg-transparent border border-terminalGreen text-terminalGreen placeholder-terminalGreen w-full mb-4"
            />
            <button type="submit" className="p-2 border border-terminalGreen w-full">
              decrypt
            </button>
          </form>
        </div>

        {/* Footer (Bottom Center) */}
        <footer className="absolute bottom-4 w-full text-center text-sm">
          &copy; {new Date().getFullYear()} smashit.games
          <span className="mx-2">|</span>
          <Link to="privacy-policy" className="underline hover:text-white">
            Privacy Policy
          </Link>
          <span className="mx-2">|</span>
          <Link to="smashit-games-presskit" className="underline hover:text-white">
            Press Kit
          </Link>
        </footer>
      </div>
    </div>
  );
}

export default App;
