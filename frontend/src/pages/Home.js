import React from 'react';
import { Link } from 'react-router-dom';
import { motion } from 'framer-motion';
import { FaStar, FaShieldAlt, FaShippingFast } from 'react-icons/fa';

const Home = () => {
  return (
    <div className="home-page">
      {/* 1. HERO SECTION - Fixed Background Parallax */}
      <div 
        className="hero-section"
        style={{
            backgroundImage: `linear-gradient(to right, rgba(0,0,0,0.9) 0%, rgba(0,0,0,0.6) 50%, rgba(198,40,40,0.2) 100%), url('/banner1.jpg')`,
            backgroundAttachment: 'fixed', // Giữ ảnh đứng yên khi scroll
            backgroundPosition: 'center',
            backgroundSize: 'cover',
            height: '100vh',
            display: 'flex',
            alignItems: 'center'
        }}
      >
        <div className="container">
          <motion.div 
            className="hero-content"
            initial={{ opacity: 0, x: -50 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8 }}
          >
            <h1>Unleash The<br/>Speed Demon</h1>
            <p>Experience the thrill of driving the world's most exclusive supercars</p>
            <Link to="/cars" className="btn-hero">Explore Inventory</Link>
          </motion.div>
        </div>
      </div>

      {/* 2. BRANDS BAR - Hover White */}
      <div className="brands-section" style={{background: '#0a0a0a'}}>
        <div className="container brands-grid">
            {['Ferrari', 'Lamborghini', 'Porsche', 'McLaren', 'Bugatti', 'Audi RS'].map((brand, index) => (
                <span key={index} className="brand-item" style={{cursor: 'pointer'}}>
                    {brand}
                </span>
            ))}
        </div>
      </div>

      {/* 3. WHY CHOOSE US */}
      <div className="container section-padding">
        <div className="section-header">
            <h2>Why <span>HyperDrive?</span></h2>
        </div>
        <div className="spec-grid">
            <motion.div className="spec-box" whileHover={{ y: -10 }}>
                <FaShieldAlt size={40} color="#C62828" />
                <h3>Verified Quality</h3>
                <p style={{color:'#888'}}>150-point inspection check.</p>
            </motion.div>
            <motion.div className="spec-box" whileHover={{ y: -10 }}>
                <FaStar size={40} color="#C62828" />
                <h3>Premium Service</h3>
                <p style={{color:'#888'}}>24/7 concierge service.</p>
            </motion.div>
            <motion.div className="spec-box" whileHover={{ y: -10 }}>
                <FaShippingFast size={40} color="#C62828" />
                <h3>Global Delivery</h3>
                <p style={{color:'#888'}}>Worldwide shipping available.</p>
            </motion.div>
        </div>
      </div>

      {/* 4. NEWSLETTER - Button Hover */}
      <div className="section-padding" style={{background: '#C62828', textAlign: 'center'}}>
        <div className="container">
            <h2 style={{color: 'white', marginBottom: '20px'}}>Join The Exclusive Club</h2>
            <form style={{display: 'flex', justifyContent: 'center', gap: '10px', flexWrap: 'wrap'}}>
                <input type="email" placeholder="Enter your email" className="input-premium" style={{width: '300px', background: 'white', color: 'black'}} />
                <motion.button 
                    whileHover={{ scale: 1.05, backgroundColor: '#000' }}
                    style={{padding: '12px 30px', borderRadius: '50px', border: '2px solid white', background: 'black', color: 'white', fontWeight: 'bold', cursor: 'pointer'}}
                >
                    SUBSCRIBE
                </motion.button>
            </form>
        </div>
      </div>
    </div>
  );
};

export default Home;