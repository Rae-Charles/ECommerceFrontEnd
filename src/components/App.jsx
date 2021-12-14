import React, { Component } from 'react';
import './App.css';
import { BrowserRouter as Router, Route, Routes, Link } from 'react-router-dom';
import Create from './Create/Create';
import HomePage from './HomePage/HomePage';
import Login from './Login/Login';
// import ShoppingCart from './ShoppingCart/ShoppingCart';
import TitleBar from './TitleBar/TitleBar';



function App() {
    return (
      <div className="App">
          <TitleBar />
        <Routes>
          <Route path="/" exact element={<Create/>} />
          <Route path="/home" element={<HomePage/>} />
          <Route path="/login" element={<Login />} />
          {/* <Route path="/shoppingcart" element={<ShoppingCart/>} /> */}
        </Routes>
      </div>
    );
  }
  
  export default App;