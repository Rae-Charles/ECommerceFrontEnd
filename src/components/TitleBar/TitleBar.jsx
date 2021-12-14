import React from 'react';
import { Link } from 'react-router-dom';
import './TitleBar.css'



function TitleBar(){
    return (
        <nav>
            <ul>

                <Link className='login' to='/login'>
                    <li> Login </li>
                </Link>

            </ul>
            </nav>
    );
}

export default TitleBar;