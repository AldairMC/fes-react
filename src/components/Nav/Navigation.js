import React from 'react';
import './Navigation.css';
import { NavLink } from 'react-router-dom'

const Navigation = (props) => {
    return (
        <nav className="navegacion">
            <NavLink to='/we' activeClassName="activo">We</NavLink>
            <NavLink to='/product' activeClassName="activo">Product</NavLink>
            <NavLink to='/contact' activeClassName="activo">Contact Us</NavLink>
        </nav>
    );
};

export default Navigation;