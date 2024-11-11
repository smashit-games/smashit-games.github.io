// src/index.tsx

import React from 'react';
import ReactDOM from 'react-dom/client';
import App from './App';
import PrivacyPolicy from './components/PrivacyPolicy';
import FSPressKit from './components/FSPressKit';
import SGPressKit from './components/SGPressKit'; // Import the SGPressKit component
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import './index.css';
import ExternalRedirect from './components/ExternalRedirect';

const rootElement = document.getElementById('root') as HTMLElement;

ReactDOM.createRoot(rootElement).render(
  <React.StrictMode>
    <BrowserRouter basename="/">
      <Routes>
        <Route path="/" element={<App />} />
        <Route path="privacy-policy" element={<PrivacyPolicy />} />
        <Route path="fel-survivors-presskit" element={<FSPressKit />} />
        <Route path="smashit-games-presskit" element={<SGPressKit />} />
        <Route
          path="discord"
          element={<ExternalRedirect to="https://discord.gg/84zvK3y3Cs" />}
        />
      </Routes>
    </BrowserRouter>
  </React.StrictMode>
);
