import React from 'react';
import ReactDOM from 'react-dom/client';
import App from './App';
import { GlobalStyle } from './style/global';

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
    {/* Importa style global */}
    <GlobalStyle />
    {/* Importa o arquivo App.js */}
    <App />
  </React.StrictMode>
);
