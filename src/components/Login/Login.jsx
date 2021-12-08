import React from 'react';
import './Login.css';

function Login(props){
    return (
        <div className="Login">
            <div>
                <center><h3>Account Login</h3></center>
                    <form>
                        <center><label for="Email">Email:</label><input type="text" id="Email" name="Email"></input></center>
                        <center><label for="Password">Password:</label><input type="text" id="Password" name="Password"></input></center>
                        <center><button>Submit</button></center>
                    </form>
            </div>
        </div>
    )
}

export default Login;