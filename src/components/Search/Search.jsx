import React, { Component } from 'react';
import '../product/products.css';

class Search extends Component {
    constructor(props){
        super(props);
        this.state = {
            category: '',
        }
    }

    handleChange = (event) => {
        this.setState({
            [event.target.name]: event.target.value
         });   
    }

    handleSubmit = (event) => {
        event.preventDefault();
        let category = this.state.category;
        this.props.setSearchCategory(category);
    }

    render(){
        return(
            <React.Fragment>
            <div>
                <form onSubmit={(event) => this.handleSubmit(event)}>
                    <label htmlFor='category'>Choose a filter: </label>
                    <br />
                    <select name='category' value={this.state.category} onChange={this.handleChange}>
                        <option value=''></option>
                        <option value=''></option>
                        <option value=''></option>
                        <option value=''></option>
                        <option value=''></option>
                    </select>
                    <button onclick={this.handleSubmit} type = "submit" value = "Submit"> Search</button>
                </form>
            </div>
            </React.Fragment>
        );
    }
}

export default Filter;

            
        





    









