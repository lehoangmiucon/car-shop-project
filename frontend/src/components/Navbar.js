import React from 'react';
import { Link } from 'react-router-dom';

const Navbar = () => {
  return (
    <nav className="navbar">
      <div className="container nav-content">
        <Link to="/" className="logo">HyperDrive</Link>
        <div className="nav-links">
          <Link to="/">Home</Link>
          <Link to="/cars" className="btn-primary">Browse Cars</Link>
          <Link to="#">About</Link>
          <Link to="#">Contact</Link>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;