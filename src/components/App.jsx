import React, { Component } from 'react';
import './App.css';
import TitleBar from './TitleBar/TitleBar';
import Login from './Login/Login';

class App extends Component{
    constructor(props){
        super(props);
        this.state = {};
    }

    render(){
        return (
            <div className="container-fluid">
                <div><TitleBar />
                <br></br>
                    <Login />
                    <br></br>
                    <div className="create"></div>
                    <center><h6> Don't have an account? </h6><a href="create">Sign Up</a></center>
                    </div>    
            </div>
        )
    }    
}

export default App;