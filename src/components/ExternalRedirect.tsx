// src/components/ExternalRedirect.tsx
import { useEffect } from 'react';
import { useNavigate } from 'react-router-dom';

interface ExternalRedirectProps {
  to: string;
}

const ExternalRedirect: React.FC<ExternalRedirectProps> = ({ to }) => {
  const navigate = useNavigate();

  useEffect(() => {
    window.location.href = to; // Redirects the browser to the specified URL
  }, [to, navigate]);

  return null;
};

export default ExternalRedirect;
