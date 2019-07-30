import React from 'react';
import './Navigation.css';
import { Link } from 'react-router-dom'

const Navigation = (props) => {
    return (
        <nav className="navegacion">
            <Link to='/we'>We</Link>
            <Link to='/product'>Product</Link>
            <Link to='/contact us'>Contact Us</Link>
        </nav>
    );
};

export default Navigation;