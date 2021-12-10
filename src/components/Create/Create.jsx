import React from 'react';
import './Create.css'


function Create(){
    return (
        
        <div className="create">
            <div>
                
                <body className='bod'>
                <center><h3> Please Enter Your Login Information  </h3></center>
                    <form>
                    <center><label for="Email">Email Address:</label><input type="text" id="Email" name="Email"></input></center>
                        <center><label for="Password">Password:</label><input type="text" id="Password" name="Password"></input></center>
                        <center><button className='button1'>Login</button></center>
                    </form>
                    <br />
                    <br />
                
                    <br />
                    <br />
                    <br />
                    <br />
                    <center><h1 className='or'>OR</h1></center>
                    <br />
                    <br />
                   
                    <br />
                    <br />
                    <br />
                    <br />
                    
                
                <center><h3>Create New User</h3></center>
                    <form>
                    <center><label for="Email">Enter Email Address:</label><input type="text" id="Email" name="Email"></input></center>
                        <center><label for="Password">Create Password:</label><input type="text" id="Password" name="Password"></input></center>
                        <center><button className='button2'>Create Account</button></center>
                    </form>
                    </body>
            </div>
        </div>
        
    )
}

export default Create;