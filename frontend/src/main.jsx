import React, { StrictMode } from 'react';
import ReactDOM from 'react-dom/client'; // Correction ici
import './tailwind.css';
import App from './App.jsx';

ReactDOM.createRoot(document.getElementById('root')).render(
  <StrictMode>
    <App />
  </StrictMode>
);
