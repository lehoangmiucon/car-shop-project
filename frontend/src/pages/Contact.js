import React, { useEffect } from 'react';
import { motion } from 'framer-motion';
import { FaPhoneAlt, FaEnvelope, FaMapMarkerAlt, FaPaperPlane } from 'react-icons/fa';

const Contact = () => {
  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  return (
    <div className="contact-page">
      {/* 1. HERO */}
      <div className="page-hero" style={{ backgroundImage: "url('/assets/banner1.jpg')" }}>
        <div className="hero-overlay"></div>
        <div className="container hero-content-center">
          <motion.h1 
            initial={{ y: 30, opacity: 0 }} animate={{ y: 0, opacity: 1 }} transition={{ duration: 0.8 }}
          >
            Contact <span style={{ color: '#C62828' }}>HyperDrive</span>
          </motion.h1>
          <motion.p className="hero-subtitle">We are here to assist you 24/7.</motion.p>
        </div>
      </div>

      {/* 2. CONTACT INFO CARDS */}
      <div className="container section-padding" style={{ paddingBottom: 0 }}>
        <div className="contact-grid">
          {[
            { icon: <FaPhoneAlt />, title: "Hotline", text: "+84 999 888 777" },
            { icon: <FaEnvelope />, title: "Email", text: "vip@hyperdrive.com" },
            { icon: <FaMapMarkerAlt />, title: "Showroom", text: "123 Supercar Blvd, HCMC" }
          ].map((item, idx) => (
            <motion.div 
              key={idx} 
              className="glass-panel contact-card"
              whileHover={{ y: -5, borderColor: '#C62828' }}
            >
              <div className="icon-circle">{item.icon}</div>
              <h3>{item.title}</h3>
              <p>{item.text}</p>
            </motion.div>
          ))}
        </div>
      </div>

      {/* 3. FORM & MAP */}
      <div className="container section-padding">
        <div className="contact-layout">
          {/* Left: Form */}
          <motion.div 
            className="glass-panel" 
            style={{ padding: '3rem' }}
            initial={{ x: -50, opacity: 0 }} whileInView={{ x: 0, opacity: 1 }} viewport={{ once: true }}
          >
            <h2 style={{ marginBottom: '2rem' }}>Send Us A Message</h2>
            <form>
              <div className="form-group">
                <label>Full Name</label>
                <input type="text" className="input-premium" placeholder="Your Name" />
              </div>
              <div className="form-row">
                <div className="form-group">
                  <label>Email</label>
                  <input type="email" className="input-premium" placeholder="email@example.com" />
                </div>
                <div className="form-group">
                  <label>Phone</label>
                  <input type="text" className="input-premium" placeholder="+84..." />
                </div>
              </div>
              <div className="form-group">
                <label>Interested In</label>
                <select className="input-premium">
                  <option>General Inquiry</option>
                  <option>Buying a Car</option>
                  <option>Service & Maintenance</option>
                  <option>Partnership</option>
                </select>
              </div>
              <div className="form-group">
                <label>Message</label>
                <textarea className="input-premium" rows="4" placeholder="How can we help?"></textarea>
              </div>
              <button className="btn-racing-red" style={{ width: '100%' }}>
                <FaPaperPlane style={{ marginRight: '10px' }} /> Send Message
              </button>
            </form>
          </motion.div>

          {/* Right: Map with Neon Glow */}
          <motion.div 
            className="map-container"
            initial={{ x: 50, opacity: 0 }} whileInView={{ x: 0, opacity: 1 }} viewport={{ once: true }}
          >
             {/* Wrapper tạo hiệu ứng viền neon */}
            <div className="map-glow-wrapper">
                <iframe
                    title="showroom-map"
                    src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3919.494576356784!2d106.69947607570417!3d10.773380259250085!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x31752f4744d014ad%3A0x629577552994c965!2zQ2jhu68gQuG6v24gVGjDoW5o!5e0!3m2!1svi!2s!4v1700000000000!5m2!1svi!2s"
                    width="100%"
                    height="500"
                    style={{ border: 0, borderRadius: '12px', filter: 'invert(90%) hue-rotate(180deg)' }} // Map tối màu
                    allowFullScreen=""
                    loading="lazy"
                ></iframe>
            </div>
          </motion.div>
        </div>
      </div>

      {/* 4. CTA FOOTER */}
      <div className="cta-bar">
        <h3>Need Immediate Assistance?</h3>
        <button className="btn-outline">Call 24/7 Support</button>
      </div>
    </div>
  );
};

export default Contact;