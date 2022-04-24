import React from 'react';
import ReactDOM from 'react-dom';
import BaseRouter from './router'
import GlobalStyle from './GlobalStyle';
import "tailwindcss/tailwind.css"

ReactDOM.render(
  <React.StrictMode>
    <GlobalStyle />
    <BaseRouter />
  </React.StrictMode>,
  document.getElementById('root')
);