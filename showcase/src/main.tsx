import React from 'react';
import ReactDOM from 'react-dom/client';
import App from './App';

// FAS Design System Styles
import '../../fas-design-system/src/styles/index.css';
import './showcase.css';

ReactDOM.createRoot(document.getElementById('root')!).render(
  <React.StrictMode>
    <App />
  </React.StrictMode>,
);
