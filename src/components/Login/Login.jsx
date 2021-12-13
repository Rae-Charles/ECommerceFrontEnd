import React from 'react';


function Login(){



    return (
        <div>
            <div>
            <center><h3> Please Enter Your Login Information  </h3></center>
                    <form>
                    <center><label for="Email">Email Address:</label><input type="text"></input></center>
                    <center><label for="Password">Password:</label><input type="text"></input></center>
                    <center><button onSubmit={"loginUser"} className='button1'>Login</button></center>
                    </form>
            </div>
        </div>
    )
}

export default Login;







