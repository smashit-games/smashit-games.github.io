// src/components/PrivacyPolicy.tsx

import React, { useEffect, useState } from 'react';
import ReactMarkdown from 'react-markdown';
import remarkGfm from 'remark-gfm';
import './PrivacyPolicy.css';

const PrivacyPolicy: React.FC = () => {
  const [content, setContent] = useState('');

  useEffect(() => {
    document.body.classList.add('scrollable');
    fetch('/privacy-policy.md')
      .then((response) => response.text())
      .then((text) => {
        setContent(text);
      });

    return () => {
      document.body.classList.remove('scrollable');
    };
  }, []);

  return (
    <div className="privacy-policy-container">
      <button
        onClick={() => window.history.back()}
        className="privacy-policy-button"
      >
        &larr; Back
      </button>

      <div className="privacy-policy-content">
        {content ? (
          <ReactMarkdown remarkPlugins={[remarkGfm]}>{content}</ReactMarkdown>
        ) : (
          <div data-testid="loading-spinner" className="loading-spinner"></div>
        )}
      </div>
    </div>
  );
};

export default PrivacyPolicy;
