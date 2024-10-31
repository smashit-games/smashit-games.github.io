// /src/index.tsx

import React from 'react';
import ReactDOM from 'react-dom/client';
import App from './components/App';
import './index.css';

import '../public/fonts/VT323-Regular.ttf';

const rootElement = document.getElementById('root') as HTMLElement;

ReactDOM.createRoot(rootElement).render(
  <React.StrictMode>
    <App />
  </React.StrictMode>
);
