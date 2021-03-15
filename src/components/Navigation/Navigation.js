import React from 'react';
import './Navigation.css';
import {Link} from 'react-router-dom'
function Navigation(props) {
    return (
        <nav className="Navigation">
            <Link to="/" className="headerLink">Where in the world?</Link>
        </nav>
    );
}

export default Navigation;