import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import App from './App';
import reportWebVitals from './reportWebVitals';
import { BrowserRouter as Router } from "react-router-dom";
import "bootstrap/dist/css/bootstrap.css";


const root = ReactDOM.createRoot(document.getElementById('root'));

root.render(
  //doubvle rendering OFF
  // <React.StrictMode>
    <App />
  // </React.StrictMode>
);
reportWebVitals();

//??? what is reportWebVitals(doing)? busca en google bro...
