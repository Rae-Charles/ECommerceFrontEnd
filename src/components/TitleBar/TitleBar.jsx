import React from 'react';
import { Link } from 'react-router-dom';
import './TitleBar.css'



function TitleBar(){
    return (
        <nav>
            <ul>
               
                
                
                
                <Link className='scart' to='/shoppingcart'>
                    <li className='shoppingcart'>Shopping Cart</li>
                </Link>

            </ul>
            </nav>
    );
}

export default TitleBar;