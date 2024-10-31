// /src/components/GlitchText.tsx

import React from 'react';
import Typewriter from 'typewriter-effect';
import './GlitchText.css';

type GlitchTextProps = {
  text: string;
  className?: string;
};

const GlitchText: React.FC<GlitchTextProps> = ({ text, className }) => (
  <h1 className={`glitch ${className}`} data-text={text}>
    <Typewriter
      options={{
        strings: text,
        autoStart: true,
        loop: true,
        delay: 75,
      }}
    />
  </h1>
);

export default GlitchText;
