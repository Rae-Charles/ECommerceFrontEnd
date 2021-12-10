import React, { Component } from 'react';
import './App.css';


import { BrowserRouter as Router, Route, Routes, Link } from 'react-router-dom';

import Create from './Create/Create';
import HomePage from './HomePage/HomePage';
import Login from './Login/Login';
import ShoppingCart from './ShoppingCart/ShoppingCart';
import TitleBar from './TitleBar/TitleBar';

function App() {
    return (
      <div className="App">
          <TitleBar />
        <Routes>
          <Route path="/" exact element={<Create/>} />
          <Route path="/home" element={<HomePage/>} />
          <Route path="/newuser" element={<Login />} />
          <Route path="/shoppingcart" element={<ShoppingCart/>} />

        </Routes>
        
      </div>
    );
  }
  
  export default App;

// class App extends Component{
//     constructor(props){
//         super(props);
//         this.state = {};
//     }

//     render(){
//         return (
//             <div className="container-fluid">
//                 <div><TitleBar />
//                 <br></br>
//                     <Login />
//                     <br></br>
//                     <div className="create"></div>
//                     <center><h6> Don't have an account? </h6><a href="create">Sign Up</a></center>
//                     </div>    
//             </div>
//         )
//     }    
// }

// export default App;