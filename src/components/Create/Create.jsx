import React from 'react';
import './Login.css';

function Create(props){
    return (
        <div className="Create">
            <div>
                <center><h3> Please enter your information to create an account! </h3></center>
                    <form>
                    <center><label for="Email">Email Address:</label><input type="text" id="Email" name="Email"></input></center>
                        <center><label for="Password">Create Password:</label><input type="text" id="Password" name="Password"></input></center>
                        <center><button>Create Account</button></center>
                    </form>
            </div>
        </div>
    )
}

export default Create;