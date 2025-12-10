import React from 'react';
import { Link } from 'react-router-dom';

const Home = () => {
  return (
    <div className="home-page">
      <div className="hero-section">
        <div className="hero-content">
          <h1>Find Your Dream Car</h1>
          <p>Experience the thrill of driving with our premium collection.</p>
          <Link to="/cars" className="btn-hero">Explore</Link>
        </div>
      </div>
    </div>
  );
};

export default Home;