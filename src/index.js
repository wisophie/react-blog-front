import React from 'react';
import ReactDOM from 'react-dom';
import BaseRouter from './router'
import 'antd/dist/antd.css';
import "tailwindcss/tailwind.css";
import GlobalStyle from './GlobalStyle';
ReactDOM.render(
  <React.StrictMode>
    <GlobalStyle />
    <BaseRouter />
  </React.StrictMode>,
  document.getElementById('root')
);