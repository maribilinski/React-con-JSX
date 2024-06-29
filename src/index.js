import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import Primer from './Primer';
import reportWebVitals from './reportWebVitals';

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
    <Primer />
  </React.StrictMode>
);

reportWebVitals();
