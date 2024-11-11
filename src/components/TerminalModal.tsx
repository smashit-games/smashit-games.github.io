import React, { useState } from 'react';
import { FaStore, FaGamepad, FaFileAlt, FaClock } from 'react-icons/fa';
import { Link } from 'react-router-dom';
import { motion } from 'framer-motion';
import './TerminalModal.css';

interface TerminalModalProps {
  isOpen: boolean;
}

const TerminalModal: React.FC<TerminalModalProps> = ({ isOpen }) => {
  const [isComingSoonDemo, setIsComingSoonDemo] = useState(false);
  const [isComingSoonStore, setIsComingSoonStore] = useState(false);

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
        {/* Meta Store Demo link with Coming Soon effect */}
        <div
          className="terminal-modal-link"
          onMouseEnter={() => setIsComingSoonDemo(true)}
          onMouseLeave={() => setIsComingSoonDemo(false)}
        >
          {isComingSoonDemo ? <FaClock size={32} /> : <FaGamepad size={32} />}
          <span>{isComingSoonDemo ? 'Coming Soon' : 'Meta Store Demo'}</span>
        </div>

        {/* Meta Store link with Coming Soon effect */}
        <div
          className="terminal-modal-link"
          onMouseEnter={() => setIsComingSoonStore(true)}
          onMouseLeave={() => setIsComingSoonStore(false)}
        >
          {isComingSoonStore ? <FaClock size={32} /> : <FaStore size={32} />}
          <span>{isComingSoonStore ? 'Coming Soon' : 'Meta Store'}</span>
        </div>

        {/* Working Press Kit Link */}
        <Link to="/fel-survivors-presskit" className="terminal-modal-link">
          <FaFileAlt size={32} />
          <span>PressKit</span>
        </Link>
      </div>
    </motion.div>
  );
};

export default TerminalModal;
