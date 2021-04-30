import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';
import reportWebVitals from './reportWebVitals';
import '../node_modules/bootstrap/dist/css/bootstrap.css'; 
import '../node_modules/jquery/dist/jquery.js'; 
import '../node_modules/bootstrap/dist/js/bootstrap.bundle.js';

ReactDOM.render(
  <React.StrictMode>
    <App/>
  </React.StrictMode>,
  document.getElementById('root')
);


reportWebVitals();
