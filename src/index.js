//  imports the React and ReactDOM libraries.
import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import App from './App';
import reportWebVitals from './reportWebVitals';
// import bootstrap related libraries
import 'bootstrap/dist/css/bootstrap.min.css';
import 'bootstrap-icons/font/bootstrap-icons.css';

// React.js application is implemented in src/index.js
// retrieve a reference to the DOM element declared in index.html using document.getElementById('root')
const root = ReactDOM.createRoot(document.getElementById('root'));
// ReactDOM then creates an instance of App and appends its output to the element whose ID is root.
root.render(
    <React.StrictMode>
        <App />
    </React.StrictMode>
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
