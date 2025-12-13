import React, { useEffect, useState } from 'react';
import { motion } from 'framer-motion';
import { FaWrench, FaBolt, FaGem, FaCrown, FaCheck, FaTimes, FaCalendarCheck } from 'react-icons/fa';

const Services = () => {
  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  const [serviceType, setServiceType] = useState('Maintenance');

  const containerVariants = {
    hidden: { opacity: 0 },
    visible: { opacity: 1, transition: { staggerChildren: 0.2 } }
  };

  const itemVariants = {
    hidden: { y: 20, opacity: 0 },
    visible: { y: 0, opacity: 1 }
  };

  return (
    <div className="services-page-v2">
      
      {/* 1. HERO SECTION */}
      <div className="service-hero">
        <div className="hero-overlay-dark"></div>
        <div className="container hero-content-center">
          <motion.h4 
            initial={{ opacity: 0 }} animate={{ opacity: 1 }} 
            style={{ color: '#C62828', letterSpacing: '3px', fontWeight: 'bold', textTransform: 'uppercase' }}
          >
            World Class Engineering
          </motion.h4>
          <motion.h1 
            initial={{ y: 30, opacity: 0 }} animate={{ y: 0, opacity: 1 }} transition={{ delay: 0.2 }}
            style={{ fontSize: '4rem', fontWeight: '800', textTransform: 'uppercase', margin: '1rem 0' }}
          >
            HyperDrive <span className="text-stroke">Elite Services</span>
          </motion.h1>
          <motion.p 
            initial={{ opacity: 0 }} animate={{ opacity: 1 }} transition={{ delay: 0.4 }}
            className="hero-subtitle" style={{ maxWidth: '600px', margin: '0 auto 2rem' }}
          >
            Premium maintenance & performance tuning for exotic machines <br/>
            We treat your car like royalty
          </motion.p>
          <motion.button 
            whileHover={{ scale: 1.05 }}
            className="btn-racing-red"
            onClick={() => document.getElementById('mini-booking').scrollIntoView({ behavior: 'smooth' })}
          >
            Book Service Appointment
          </motion.button>
        </div>
      </div>

      {/* 2. FOUR SERVICE CATEGORIES */}
      <div className="container section-padding">
        <motion.div 
          className="service-categories-grid"
          variants={containerVariants} initial="hidden" whileInView="visible" viewport={{ once: true }}
        >
          {/* Card 1: Maintenance */}
          <motion.div className="service-card-premium" variants={itemVariants}>
            <div className="icon-box"><FaWrench /></div>
            <h3>Maintenance</h3>
            <ul>
              <li>Full Diagnostics</li>
              <li>Premium Oil Service</li>
              <li>Brake Inspection</li>
              <li>Multi-point Check</li>
            </ul>
            <button className="btn-text-link" onClick={() => setServiceType('Maintenance')}>Learn More &rarr;</button>
          </motion.div>

          {/* Card 2: Upgrade */}
          <motion.div className="service-card-premium" variants={itemVariants}>
            <div className="icon-box"><FaBolt /></div>
            <h3>Upgrade & Tuning</h3>
            <ul>
              <li>ECU Remap</li>
              <li>Turbo Upgrade</li>
              <li>Exhaust Tuning</li>
              <li>Dyno Test Run</li>
            </ul>
            <button className="btn-text-link" onClick={() => setServiceType('Tuning')}>Performance Upgrade &rarr;</button>
          </motion.div>

          {/* Card 3: Ceramic */}
          <motion.div className="service-card-premium" variants={itemVariants}>
            <div className="icon-box"><FaGem /></div>
            <h3>Ceramic Coating</h3>
            <ul>
              <li>9H Nano Ceramic</li>
              <li>Paint Protection Film</li>
              <li>Hydrophobic Layer</li>
              <li>Gloss Enhancement</li>
            </ul>
            <button className="btn-text-link" onClick={() => setServiceType('Detailing')}>Detailing Service &rarr;</button>
          </motion.div>

          {/* Card 4: VIP */}
          <motion.div className="service-card-premium active" variants={itemVariants}>
            <div className="icon-box"><FaCrown /></div>
            <h3>VIP Car Care</h3>
            <ul>
              <li>Interior Deep-clean</li>
              <li>Leather Restoration</li>
              <li>Engine Bay Cleaning</li>
              <li>Concierge Pickup</li>
            </ul>
            <button className="btn-text-link" onClick={() => setServiceType('VIP Care')}>VIP Treatment &rarr;</button>
          </motion.div>
        </motion.div>
      </div>

      {/* 3. COMPARISON TABLE */}
      <div className="section-padding" style={{ background: '#0a0a0a' }}>
        <div className="container">
          <div className="section-header">
            <h2>Service <span style={{ color: '#C62828' }}>Packages</span></h2>
          </div>
          <div className="comparison-table-wrapper glass-panel">
            <table className="comparison-table">
              <thead>
                <tr>
                  <th style={{ textAlign: 'left', fontSize: '1.2rem' }}>Features</th>
                  <th>Essential</th>
                  <th>Performance+</th>
                  <th className="highlight-col">Elite Black</th>
                </tr>
              </thead>
              <tbody>
                {[
                  { name: 'Multi-point Inspection', ess: true, perf: true, elite: true },
                  { name: 'Oil & Filter Change', ess: true, perf: true, elite: true },
                  { name: 'Fluid Top-up', ess: true, perf: true, elite: true },
                  { name: 'Exterior Wash', ess: true, perf: true, elite: true },
                  { name: 'Computer Diagnostics', ess: false, perf: true, elite: true },
                  { name: 'Wheel Alignment', ess: false, perf: true, elite: true },
                  { name: 'Interior Detailing', ess: false, perf: true, elite: true },
                  { name: 'Ceramic Coating', ess: false, perf: false, elite: true },
                  { name: 'ECU Tuning', ess: false, perf: false, elite: true },
                  { name: 'Priority Support', ess: false, perf: false, elite: true },
                ].map((row, i) => (
                  <tr key={i}>
                    <td className="feature-name">{row.name}</td>
                    <td>{row.ess ? <FaCheck color="#4CAF50"/> : <FaTimes color="#333"/>}</td>
                    <td>{row.perf ? <FaCheck color="#4CAF50"/> : <FaTimes color="#333"/>}</td>
                    <td className="highlight-col">{row.elite ? <FaCheck color="#FF002F"/> : <FaTimes color="#333"/>}</td>
                  </tr>
                ))}
              </tbody>
              <tfoot>
                <tr>
                  <td></td>
                  <td>$299</td>
                  <td>$599</td>
                  <td className="highlight-col" style={{ color: '#FF002F', fontSize: '1.5rem', fontWeight: 'bold' }}>$1200</td>
                </tr>
              </tfoot>
            </table>
          </div>
        </div>
      </div>

      {/* 4. FULL WIDTH CTA */}
      <div className="cta-full-width">
        <div className="cta-overlay"></div>
        <div className="container" style={{ position: 'relative', zIndex: 2 }}>
          <h2>Your machine deserves the best.</h2>
          <p>Schedule your premium service today and experience the difference.</p>
          <button className="btn-racing-red" onClick={() => document.getElementById('mini-booking').scrollIntoView({ behavior: 'smooth' })}>
            Book Appointment Now
          </button>
        </div>
      </div>

      {/* 5. MINI BOOKING FORM */}
      <div id="mini-booking" className="container section-padding">
        <div className="mini-booking-box glass-panel">
          <div className="section-header" style={{marginBottom: '1rem'}}>
            <h2 style={{ fontSize: '1.8rem' }}>Fast <span style={{ color: '#C62828' }}>Booking</span></h2>
          </div>
          <form className="mini-form" onSubmit={(e) => { e.preventDefault(); alert("Booking request sent!"); }}>
            <div className="form-group">
              <label>Full Name</label>
              <input type="text" className="input-premium" placeholder="Your Name" required />
            </div>
            <div className="form-group">
              <label>Phone</label>
              <input type="text" className="input-premium" placeholder="Phone Number" required />
            </div>
            <div className="form-group">
              <label>Car Model</label>
              <input type="text" className="input-premium" placeholder="e.g. Porsche 911" />
            </div>
            <div className="form-group">
              <label>Service Type</label>
              <select className="input-premium" value={serviceType} onChange={(e) => setServiceType(e.target.value)}>
                <option value="Maintenance">Maintenance Service</option>
                <option value="Tuning">Upgrade & Tuning</option>
                <option value="Detailing">Ceramic Coating</option>
                <option value="VIP Care">VIP Car Care</option>
              </select>
            </div>
            <div className="form-group" style={{ display: 'flex', alignItems: 'flex-end' }}>
              <button type="submit" className="btn-racing-red" style={{ width: '100%', height: '50px' }}>
                <FaCalendarCheck style={{ marginRight: '8px' }} /> Confirm Booking
              </button>
            </div>
          </form>
        </div>
      </div>

    </div>
  );
};

export default Services;