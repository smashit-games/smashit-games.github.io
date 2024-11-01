// src/components/TerminalModal.tsx

import React from 'react';
import { FaStore, FaGamepad, FaFileAlt } from 'react-icons/fa';
import { Link } from 'react-router-dom';
import { motion } from 'framer-motion';
import './TerminalModal.css';

interface TerminalModalProps {
  isOpen: boolean;
}

const TerminalModal: React.FC<TerminalModalProps> = ({ isOpen }) => {
  if (!isOpen) return null;

  // Animation variants
  const modalVariants = {
    initial: {
      opacity: 0,
      y: -20,
      scale: 0.95,
    },
    animate: {
      opacity: 1,
      y: 0,
      scale: 1,
      transition: {
        duration: 0.3,
        ease: 'easeOut',
      },
    },
    exit: {
      opacity: 0,
      y: -20,
      scale: 0.95,
      transition: {
        duration: 0.2,
        ease: 'easeIn',
      },
    },
  };

  return (
    <motion.div
      className="terminal-modal"
      variants={modalVariants}
      initial="initial"
      animate="animate"
      exit="exit"
    >
      <div className="terminal-modal-links">
        <a
          href="https://www.meta.com/store/demo-link" // Replace with actual link
          target="_blank"
          rel="noopener noreferrer"
          className="terminal-modal-link"
        >
          <FaGamepad size={32} />
          <span>Meta Store Demo</span>
        </a>
        <a
          href="https://www.meta.com/store/main-game-link" // Replace with actual link
          target="_blank"
          rel="noopener noreferrer"
          className="terminal-modal-link"
        >
          <FaStore size={32} />
          <span>Meta Store</span>
        </a>
        <Link to="/fspresskit" className="terminal-modal-link">
          <FaFileAlt size={32} />
          <span>PressKit</span>
        </Link>
      </div>
    </motion.div>
  );
};

export default TerminalModal;
