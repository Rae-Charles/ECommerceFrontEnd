import React from 'react';
import './Create.css';
import axios from 'axios';







export default class Create extends React.Component {
    state = {
        firstName: '',
        lastName: '',
        userName: '',
        password: '',
        email: '',
        phoneNumber: '',
      }
    
      handleChange = event => {
        this.setState({ firstName: event.target.value, 
          lastName: event.target.value, 
          userName: event.target.value,
          password: event.target.value,
          email: event.target.value,
          phoneNumber: event.target.value});
      }
          
    
      handleSubmit = event => {
        event.preventDefault();
      
      
    
        const user = {
          firstName: this.state.firstName,
          lastName: this.state.lastName,
          userName: this.state.userName,
          password: this.state.password,
          email: this.state.email,
          phoneNumber: this.state.phoneNumber
        };
        
    
        axios.post(`https://localhost:44394/api/authentication`, 
        { user })
          .then(res => {
            console.log(res);
            console.log(res.data);
          })
        

      }
    
    


render(){
return (
        
        
            <div>
                
                <body >
                
                <center><h3>Create New User</h3></center>
                    <form onSubmit={this.handleSubmit}>
                    <center><label for="firstName">Enter First Name:</label><input type="text" onChange={this.handleChange}></input></center>
                    <center><label for="lastName">Enter Last Name:</label><input type="text" onChange={this.handleChange}></input></center>
                    <center><label for="userName">Enter User Name:</label><input type="text" onChange={this.handleChange}></input></center>
                    <center><label for="Password">Create Password:</label><input type="password" onChange={this.handleChange}></input></center>
                    <center><label for="Email">Enter Email Address:</label><input type="text" onChange={this.handleChange}></input></center>
                    <center><label for="phoneNumber">Enter Phone Number:</label><input type="text" onChange={this.handleChange}></input></center>
                    <center><input type="submit" /></center>
                    </form>
                    </body>
            </div>
        
    )
}    

}















