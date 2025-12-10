import React from 'react';
import { Link } from 'react-router-dom';
import { motion } from 'framer-motion';
import { FaStar, FaShieldAlt, FaShippingFast } from 'react-icons/fa';

const Home = () => {
  return (
      <div className="home-page">
      {/* 1. HERO SECTION - Đã thêm style background trực tiếp tại đây */}
      <div 
        className="hero-section"
        style={{
            backgroundImage: `linear-gradient(to right, rgba(0,0,0,0.9) 0%, rgba(0,0,0,0.6) 50%, rgba(198,40,40,0.2) 100%), url('/assets/banner1.jpg')`
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
            <p>Experience the thrill of driving the world's most exclusive supercars. Precision engineering meets luxury lifestyle.</p>
            <Link to="/cars" className="btn-hero">Explore Inventory</Link>
          </motion.div>
        </div>
      </div>

      {/* 2. BRANDS BAR */}
      <div className="brands-section">
        <div className="container brands-grid">
            <span className="brand-item">Ferrari</span>
            <span className="brand-item">Lamborghini</span>
            <span className="brand-item">Porsche</span>
            <span className="brand-item">McLaren</span>
            <span className="brand-item">Bugatti</span>
            <span className="brand-item">Audi RS</span>
        </div>
      </div>

      {/* 3. WHY CHOOSE US */}
      <div className="container section-padding">
        <div className="section-header">
            <h2>Why <span>HyperDrive?</span></h2>
        </div>
        <div className="spec-grid">
            <motion.div className="spec-box" whileHover={{ y: -5 }}>
                <FaShieldAlt size={40} color="#C62828" />
                <h3 style={{marginTop: '15px'}}>Verified Quality</h3>
                <p style={{fontSize: '0.9rem', color:'#888', marginTop: '10px'}}>Every vehicle undergoes a 150-point inspection.</p>
            </motion.div>
            <motion.div className="spec-box" whileHover={{ y: -5 }}>
                <FaStar size={40} color="#C62828" />
                <h3 style={{marginTop: '15px'}}>Premium Service</h3>
                <p style={{fontSize: '0.9rem', color:'#888', marginTop: '10px'}}>24/7 concierge service for our VIP clients.</p>
            </motion.div>
            <motion.div className="spec-box" whileHover={{ y: -5 }}>
                <FaShippingFast size={40} color="#C62828" />
                <h3 style={{marginTop: '15px'}}>Global Delivery</h3>
                <p style={{fontSize: '0.9rem', color:'#888', marginTop: '10px'}}>We ship your dream car anywhere in the world.</p>
            </motion.div>
        </div>
      </div>

      {/* 4. TESTIMONIALS */}
      <div className="container section-padding" style={{borderTop: '1px solid #222'}}>
        <div className="section-header">
            <h2>Client <span>Stories</span></h2>
        </div>
        <div className="testimonials-grid">
            <div className="testi-card">
                <p className="testi-text">"The collection at HyperDrive is unmatched. Found my dream 911 GT3 RS here in mint condition."</p>
                <p className="testi-author">- Alex H., Racing Enthusiast</p>
            </div>
            <div className="testi-card">
                <p className="testi-text">"Professional, fast, and transparent. Buying a Ferrari has never been this smooth."</p>
                <p className="testi-author">- Michael T., CEO</p>
            </div>
            <div className="testi-card">
                <p className="testi-text">"Top notch service. The team really knows their engines. Highly recommended."</p>
                <p className="testi-author">- Sarah L., Collector</p>
            </div>
        </div>
      </div>

      {/* 5. NEWSLETTER */}
      <div className="section-padding" style={{background: '#C62828', textAlign: 'center'}}>
        <div className="container">
            <h2 style={{color: 'white', marginBottom: '20px'}}>Join The Exclusive Club</h2>
            <p style={{color: 'rgba(255,255,255,0.8)', marginBottom: '30px'}}>Get early access to new arrivals and private events.</p>
            <form style={{display: 'flex', justifyContent: 'center', gap: '10px'}}>
                <input type="email" placeholder="Enter your email" style={{padding: '12px 20px', borderRadius: '50px', border: 'none', width: '300px'}} />
                <button style={{padding: '12px 30px', borderRadius: '50px', border: '2px solid white', background: 'black', color: 'white', fontWeight: 'bold', cursor: 'pointer'}}>SUBSCRIBE</button>
            </form>
        </div>
      </div>
    </div>
  );
};

export default Home;