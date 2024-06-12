import React from 'react';
import { Link } from 'react-router-dom';
import './ComponentStyles.css';
import logo from '../assets/logo.png';

const Navbar = () => {
    return (
        <nav className="navbar">
            <div className="navbar-logo">
                <img src={logo} alt="Logo" className="logo-image" />
            </div>
            <ul className="navbar-links">
                <li><Link to="/">Home</Link></li>
                <li><Link to="/about">About</Link></li>
                <li><Link to="/projects">Projects</Link></li>
            </ul>
        </nav>
    );
};

export default Navbar;
