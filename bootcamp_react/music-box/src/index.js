import React from 'react';
import ReactDOM from 'react-dom';
import App from './App';
import NavBar from './components/navbar'
import "./assets/css/reset.css";
import "./assets/css/style.css";
import HomePage from './components/homepage';

ReactDOM.render(
  <React.StrictMode>
    <NavBar />
    <HomePage />
  </React.StrictMode>,
  document.getElementById('root')
);