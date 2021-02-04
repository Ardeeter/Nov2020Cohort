import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';
import MyFirstComponent from './MyFirstComponent';
import Parent from './ex1/Parent'

let myArr = ["Francisco", "Jordan", "Micah", "Joe", "Jake"];

ReactDOM.render(
  <React.StrictMode>
    {/* <App />
    outside of app component <br />
    <MyFirstComponent /> */}
    <Parent firstName={myArr[0]} /> <br />
  </React.StrictMode>,
  document.getElementById('root')
);

