import React from 'react';


function Login(){
    return (
        <div>
            <div>
            <center><h3> Please Enter Your Login Information  </h3></center>
                    <form>
                    <center><label for="Email">Email Address:</label><input type="text" id="Email" name="Email"></input></center>
                        <center><label for="Password">Password:</label><input type="text" id="Password" name="Password"></input></center>
                        <center><button>Login</button></center>
                    </form>
            </div>
        </div>
    )
}

export default Login;







