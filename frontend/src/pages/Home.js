import React from 'react';
import { Link } from 'react-router-dom';

const Home = () => {
  return (
    <div className="home-page">
      {/* Thêm style background trực tiếp tại đây */}
      <div 
        className="hero-section" 
        style={{ backgroundImage: "url('/assets/banner1.jpg')" }}
      >
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