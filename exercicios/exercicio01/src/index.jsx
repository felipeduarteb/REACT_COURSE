import React from 'react';
import ReactDOM from 'react-dom/client';
import { GlobalStyle } from './style/global';
import App from './App';

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
    {/* Importa style global */}
    <GlobalStyle />
    {/* Importa o arquivo App.js */}
    <App />
  </React.StrictMode>
);
