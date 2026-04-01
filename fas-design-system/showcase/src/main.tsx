import React from 'react';
import ReactDOM from 'react-dom/client';
import { SnackbarProvider } from '../../src/components/Snackbar/Snackbar';
import App from './App';
import './App.css';

ReactDOM.createRoot(document.getElementById('root')!).render(
  <React.StrictMode>
    <SnackbarProvider>
      <App />
    </SnackbarProvider>
  </React.StrictMode>,
);
