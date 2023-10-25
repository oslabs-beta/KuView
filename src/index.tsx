import React from 'react';
import { createRoot } from 'react-dom/client';
import App from './components/App';
import './scss/App.scss';
import { BrowserRouter } from 'react-router-dom';

// react render
const rootElement = document.getElementById('root');
const root = createRoot(rootElement);
root.render(
  <BrowserRouter>
    <App />
  </BrowserRouter>
);
