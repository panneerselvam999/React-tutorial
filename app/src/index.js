import React from 'react';
import ReactDOM from 'react-dom/client';
import App from './App';

//custom components
// import Car from "./Component/Car.js";
// import Garage from './Component/Garage.js';
// import Apple from './Component/Apple.js';
// import Header from './Component/Header';
import FavoriteColor from './Component/FavoriteColor';
import Fcc from './Component/FavoriteColorClass';
import Scooter from './Component/Scooter';

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
    {/* <Car /> */}
    {/* <Garage /> */}
    {/* <Apple /> */}
    {/* <Header /> */}
    <App />
    <FavoriteColor />
    <Fcc />
    <Scooter />
  </React.StrictMode>
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
