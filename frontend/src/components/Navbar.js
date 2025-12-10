import React, { useState, useEffect } from 'react';
import { Link, useLocation } from 'react-router-dom';
import { FaTachometerAlt } from 'react-icons/fa'; // Icon tốc độ

const Navbar = () => {
    const [scrolled, setScrolled] = useState(false);
    const location = useLocation();

    // Hiệu ứng đổi màu khi scroll
    useEffect(() => {
        const handleScroll = () => {
            if (window.scrollY > 50) {
                setScrolled(true);
            } else {
                setScrolled(false);
            }
        };
        window.addEventListener('scroll', handleScroll);
        return () => window.removeEventListener('scroll', handleScroll);
    }, []);

    // Nếu không phải trang Home, luôn hiện background đen
    const isHome = location.pathname === '/';
    const navbarClass = `navbar ${scrolled || !isHome ? 'scrolled' : ''}`;

    return (
        <nav className={navbarClass}>
            <div className="container nav-content">
                <Link to="/" className="logo">
                    <FaTachometerAlt /> Hyper<span>Drive</span>
                </Link>
                <div className="nav-links">
                    <Link to="/">Home</Link>
                    <Link to="/cars">Inventory</Link>
                    <Link to="#">Services</Link>
                    <Link to="#">About</Link>
                </div>
                <div className="auth-buttons">
                    <Link to="/login" style={{marginRight: '15px', fontWeight: '600'}}>Login</Link>
                    <Link to="/register" className="btn-primary">Register</Link>
                </div>
            </div>
        </nav>
    );
};

export default Navbar;