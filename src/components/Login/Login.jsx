import React from 'react';
import useState from 'react'
import axios from 'axios';

    
//     const Login = () => {
//         async function send(values) {
//             const response = await axios.post("https://localhost:44394/api/authentication", values);
//             if (response.data.token) {
//                 localStorage.setItem('token', response.data.token);
//                 window.location.reload();
//             }
//         }
//         return send;
//     }


//     const Form = (callback) => {
//         const [formValues, setFormValues] = useState({});
    
//         const handleChange = (event) => {
//             event.persist();
//             setFormValues({ ...formValues, [event.target.name]: event.target.value })
//         }
    
//         const handleSubmit = (event) => {
//             event.preventDefault();
//             callback();
//         }    
//         return { formValues, handleChange, handleSubmit };


// function Login(){

    export default class Login extends React.Component {
        state = {
            userName: '',
            password: '',
           
          }
            
        
          handleChange = event => {
            this.setState({ 
                [event.target.name] : event.target.value
            });
          }
              
        
          onSubmit = async event => {
            event.preventDefault();
             
        
            await axios ({
                method:"post", 
                url:"https://localhost:44394/api/authentication/login",
                data:{          
                    "userName": this.state.userName,
                    "password": this.state.password,
                    
                    
                }
            })
            window.location="/home"
          }
          render(){
            return (
                        <div>
                            <body>
                            <center><h3>Login</h3></center>
                                <form onSubmit={this.handleSubmit}>
                                <center><label for="userName">User Name:</label><input name="userName" type="text" value={this.state.userName} onChange={this.handleChange}></input></center>
                                <center><label for="password">Password:</label><input name="password" type="password" value={this.state.password} onChange={this.handleChange}></input></center>
                                <center><button type="submit">Login</button></center>
                                </form>
                                </body>
                        </div>
                    )
                }
                                    
            }
                                








//     return (
//         <div>
//             <div>
//             <center><h3> Please Enter Your Login Information  </h3></center>
//                     <form>
//                     <center><label for="Email">Email Address:</label><input type="text"></input></center>
//                     <center><label for="Password">Password:</label><input type="text"></input></center>
//                     <center><button onSubmit={"loginUser"} className='button1'>Login</button></center>
//                     </form>
//             </div>
//         </div>
//     )}
// }


