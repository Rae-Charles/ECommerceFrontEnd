import React from 'react';
import { Link } from 'react-router-dom';
import './TitleBar.css'

function TitleBar(){
    return (
        <nav>
            <ul>
                <Link to='/'>
                    <li>Main Page</li>
                </Link>
                <Link to='/homepage'>
                    <li>Home Page </li>
                        </Link>
                <Link to='/newuser'>
                    <li>Register user</li>
                </Link>
                <Link to='/shoppingcart'>
                    <li>Shopping Cart</li>
                </Link>

            </ul>
            </nav>
    );
}

export default TitleBar;