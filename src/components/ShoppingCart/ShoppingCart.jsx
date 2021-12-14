import React from 'react';
import useState from 'react'
import axios from 'axios';

    
// function shoppingcart(){

    export default class ShoppingCart extends React.Component {
        state = {
            userName: '',
            ProductId: '',
            Quantity: '',
          }
            
        
          handleChange = event => {
            this.setState({ 
                [event.target.name] : event.target.value
            });
          }
              
        
          handleSubmit = async event => {
            event.preventDefault();
             
        
            await axios ({
                method:"post", 
                url:"https://localhost:44394/api/authentication/login",
                data:{          
                    "userId": this.state.userId,
                    "ProductId": this.state.ProductId,
                    "Quantity" : this.state.Quantity,                            
                }
            })
          }

          render(){
            return (
                        <div>
                            <body>
                            <center><h3> Shopping Cart </h3></center>
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



