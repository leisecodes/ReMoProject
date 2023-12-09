// Importing necessary modules and components from libraries and local files
import React from 'react';
import ReactDOM from 'react-dom';
import './index.css'; // Importing styles
import App from './App'; // Importing the main App component
import reportWebVitals from './reportWebVitals';


// Creating a root instance for React to render and attaching it to the 'root' element in the HTML
const root = ReactDOM.createRoot(document.getElementById('root'));
// Rendering the main App component within a React StrictMode wrapper
root.render(
  <React.StrictMode>
    <App />
  </React.StrictMode>
);


// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
