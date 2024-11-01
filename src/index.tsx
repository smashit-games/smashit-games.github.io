// src/index.tsx

import React from 'react';
import ReactDOM from 'react-dom/client';
import App from './App';
import PrivacyPolicy from './components/PrivacyPolicy';
import FSPressKit from './components/FSPressKit';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import './index.css';
import ExternalRedirect from './components/ExternalRedirect'

const rootElement = document.getElementById('root') as HTMLElement;

ReactDOM.createRoot(rootElement).render(
  <React.StrictMode>
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<App />} />
        <Route path="/privacy-policy" element={<PrivacyPolicy />} />
        <Route path="/fspresskit" element={<FSPressKit />} />
        <Route
          path="/discord"
          element={<ExternalRedirect to="https://discord.gg/84zvK3y3Cs" />}
        />
      </Routes>
    </BrowserRouter>
  </React.StrictMode>
);
