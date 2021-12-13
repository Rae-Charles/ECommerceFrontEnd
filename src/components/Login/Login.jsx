import React from 'react';
import useState from 'react'

    
  

    const Login = () => {
        async function send(values) {
            const response = await axios.post("https://localhost:44394/api/authentication", values);
            if (response.data.token) {
                localStorage.setItem('token', response.data.token);
                window.location.reload();
            }
        }
    
        return send;
    }

    const Form = (callback) => {
        const [formValues, setFormValues] = useState({});
    
        const handleChange = (event) => {
            event.persist();
    
            setFormValues({ ...formValues, [event.target.name]: event.target.value })
        }
    
        const handleSubmit = (event) => {
            event.preventDefault();
            callback();
        }
    
        return { formValues, handleChange, handleSubmit };

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




}

export default Login; 