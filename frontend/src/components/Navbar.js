import React, { useState, useEffect } from 'react';
import { Link, useLocation } from 'react-router-dom';
import { FaTachometerAlt } from 'react-icons/fa';

const Navbar = () => {
    const [scrolled, setScrolled] = useState(false);
    const location = useLocation();

    useEffect(() => {
        const handleScroll = () => {
            setScrolled(window.scrollY > 50);
        };
        window.addEventListener('scroll', handleScroll);
        return () => window.removeEventListener('scroll', handleScroll);
    }, []);

    const isHome = location.pathname === '/';
    const navbarClass = `navbar ${scrolled || !isHome ? 'scrolled' : ''}`;

    // Style chung cho nút Auth
    const authBtnStyle = {
        padding: '8px 20px',
        borderRadius: '4px',
        fontWeight: '700',
        transition: 'all 0.3s ease',
        textTransform: 'uppercase',
        fontSize: '0.85rem',
        border: '1px solid transparent'
    };

    return (
        <nav className={navbarClass}>
            <div className="container nav-content">
                <Link to="/" className="logo">
                    <FaTachometerAlt /> Hyper<span>Drive</span>
                </Link>
                <div className="nav-links">
                    <Link to="/">Home</Link>
                    <Link to="/cars">Inventory</Link>
                    <Link to="services">Services</Link>
                    <Link to="about">About</Link>
                    <Link to="/contact">Contact</Link>
                </div>
                <div className="auth-buttons" style={{ display: 'flex', gap: '15px' }}>
                    {/* Nút Login - Outline */}
                    <Link to="/login" className="btn-racing-red" style={{ padding: '8px 24px', fontSize: '0.85rem' }}>
                        Login
                    </Link>
                    
                    {/* Nút Register - Red Racing */}
                    <Link to="/register" className="btn-racing-red" style={{ padding: '8px 24px', fontSize: '0.85rem' }}>
                        Register
                    </Link>
                </div>
            </div>
        </nav>
    );
};

export default Navbar;