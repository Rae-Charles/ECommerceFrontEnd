import React from 'react';
import './TitleBar.css';

function TitleBar(props){
    return (
        <div className="row row-space">
            <div className="col-md-12" style={{padding: 0}}>
                <div className="titlebar-nav">
                    <div><h1>Bicycle World</h1>
                    <ul>
                    <div class="topnav">
                        <li><a class="active" href="home">Home</a></li>
                        <li><a href="list">List Bike</a></li>
                        <div class="topnav-right">
                            <li><a href="search">Search</a></li>
                            <li><a href="logout">Logout</a></li>
                        </div>
                    </div>
                    </ul>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default TitleBar;