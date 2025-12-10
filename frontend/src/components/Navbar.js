import React from 'react';
import { Link } from 'react-router-dom';

const Navbar = () => {
    return (
        <nav className="navbar">
            <div className="container nav-content">
                <Link to="/" className="logo">HyperDrive</Link>
                <div className="nav-links">
                    <Link to="/">Home</Link>
                    <Link to="/cars" className="nav-item">Shop</Link>
                    <Link to="#">About</Link>
                    <Link to="#">Contact</Link>
                </div>
                <div className="auth-buttons">
                    <Link to="/login" className="btn-text">Login</Link>
                    <Link to="/register" className="btn-primary">Register</Link>
                </div>
            </div>
        </nav>
    );
};

export default Navbar;