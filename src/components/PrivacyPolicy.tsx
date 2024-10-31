// src/components/PrivacyPolicy.tsx

import React, { useEffect, useState, Suspense } from 'react';
import ReactMarkdown from 'react-markdown';
import remarkGfm from 'remark-gfm';
import './PrivacyPolicy.css';

const PrivacyPolicy: React.FC = () => {
  const [content, setContent] = useState('');

  useEffect(() => {
    // Enable scrolling only on this page
    document.body.classList.add('scrollable');

    // Preload markdown content
    fetch('/privacy-policy.md')
      .then((response) => response.text())
      .then((text) => {
        setContent(text);
      });

    // Cleanup: Remove scrolling when component unmounts
    return () => {
      document.body.classList.remove('scrollable');
    };
  }, []);

  return (
    <div className="privacy-policy-container">
      {/* Back Button */}
      <button
        onClick={() => window.history.back()}
        className="privacy-policy-button"
      >
        &larr; Back
      </button>

      {/* Privacy Policy Content */}
      <div className="privacy-policy-content">
        <Suspense fallback={<p>Loading content...</p>}>
          <ReactMarkdown remarkPlugins={[remarkGfm]}>{content}</ReactMarkdown>
        </Suspense>
      </div>
    </div>
  );
};

export default PrivacyPolicy;
