// src/index.tsx

import React from 'react';
import ReactDOM from 'react-dom/client';
import App from './App';
import PrivacyPolicy from './components/PrivacyPolicy';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import './index.css';

const rootElement = document.getElementById('root') as HTMLElement;

ReactDOM.createRoot(rootElement).render(
  <React.StrictMode>
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<App />} />
        <Route path="/privacy-policy" element={<PrivacyPolicy />} />
      </Routes>
    </BrowserRouter>
  </React.StrictMode>
);
