import React, { useEffect } from 'react';
import { motion } from 'framer-motion';
import { FaWrench, FaOilCan, FaCogs, FaTools, FaSprayCan, FaCarBattery, FaCheckCircle } from 'react-icons/fa';

const Services = () => {
    useEffect(() => {
        window.scrollTo(0, 0);
    }, []);

    const services = [
        { icon: <FaWrench />, title: "Engine Diagnostics", desc: "Advanced computerized scanning to detect every heartbeat of your beast." },
        { icon: <FaOilCan />, title: "Premium Oil Service", desc: "High-performance synthetic oils dedicated to racing engines." },
        { icon: <FaCogs />, title: "Performance Upgrade", desc: "Turbo tuning, ECU remapping, and exhaust modifications." },
        { icon: <FaCarBattery />, title: "Suspension Tuning", desc: "Precision calibration for track-ready handling." },
        { icon: <FaSprayCan />, title: "Ceramic Coating", desc: "9H Nano ceramic protection for that showroom shine." },
        { icon: <FaTools />, title: "Drivetrain Calibration", desc: "Transmission tuning for lightning-fast gear shifts." }
    ];

    return (
        <div className="services-page">
            {/* 1. HERO SECTION */}
            <div className="page-hero" style={{ backgroundImage: "url('https://images.unsplash.com/photo-1530046339160-ce3e41600f29?q=80&w=2070&auto=format&fit=crop')" }}>
                <div className="hero-overlay"></div>
                <div className="container hero-content-center">
                    <motion.h1 
                        initial={{ y: 30, opacity: 0 }} animate={{ y: 0, opacity: 1 }} transition={{ duration: 0.8 }}
                    >
                        Elite Performance <span style={{ color: '#C62828' }}>Care</span>
                    </motion.h1>
                    <motion.p 
                        initial={{ y: 30, opacity: 0 }} animate={{ y: 0, opacity: 1 }} transition={{ delay: 0.2, duration: 0.8 }}
                        className="hero-subtitle"
                    >
                        Premium maintenance & performance tuning for luxury and high-performance vehicles.
                    </motion.p>
                    <motion.button 
                        initial={{ scale: 0.8, opacity: 0 }} animate={{ scale: 1, opacity: 1 }} transition={{ delay: 0.5 }}
                        className="btn-racing-red"
                        onClick={() => document.getElementById('booking-form').scrollIntoView({ behavior: 'smooth' })}
                    >
                        Book Service Now
                    </motion.button>
                </div>
            </div>

            {/* 2. SERVICES LIST */}
            <div className="container section-padding">
                <div className="section-header">
                    <h2>Our <span style={{color: '#C62828'}}>Services</span></h2>
                    <p>Engineered to keep your machine at peak performance</p>
                </div>
                
                <div className="services-grid">
                    {services.map((item, index) => (
                        <motion.div 
                            key={index} 
                            className="glass-panel service-card"
                            whileHover={{ y: -10, borderBottom: '3px solid #C62828' }}
                        >
                            <div className="service-icon">{item.icon}</div>
                            <h3>{item.title}</h3>
                            <p>{item.desc}</p>
                        </motion.div>
                    ))}
                </div>
            </div>

            {/* 3. PRICING PACKAGES */}
            <div className="section-padding" style={{ background: '#0a0a0a' }}>
                <div className="container">
                    <div className="section-header">
                        <h2>Service <span style={{color: '#C62828'}}>Packages</span></h2>
                    </div>
                    <div className="pricing-grid">
                        {/* Basic */}
                        <div className="glass-panel pricing-card">
                            <h3>Essential</h3>
                            <div className="price">$299</div>
                            <ul>
                                <li><FaCheckCircle color="#C62828"/> Full Inspection</li>
                                <li><FaCheckCircle color="#C62828"/> Oil Change</li>
                                <li><FaCheckCircle color="#C62828"/> Fluid Top-up</li>
                                <li className="disabled">Detailing</li>
                                <li className="disabled">ECU Tuning</li>
                            </ul>
                            <button className="btn-outline">Select</button>
                        </div>

                        {/* Popular */}
                        <div className="glass-panel pricing-card featured">
                            <div className="badge">Recommended</div>
                            <h3>Performance+</h3>
                            <div className="price" style={{color: '#C62828'}}>$599</div>
                            <ul>
                                <li><FaCheckCircle color="#C62828"/> Everything in Essential</li>
                                <li><FaCheckCircle color="#C62828"/> Brake System Check</li>
                                <li><FaCheckCircle color="#C62828"/> Wheel Alignment</li>
                                <li><FaCheckCircle color="#C62828"/> Interior Detailing</li>
                                <li className="disabled">ECU Tuning</li>
                            </ul>
                            <button className="btn-racing-red">Select</button>
                        </div>

                        {/* Elite */}
                        <div className="glass-panel pricing-card">
                            <h3>Elite Black</h3>
                            <div className="price">$1200</div>
                            <ul>
                                <li><FaCheckCircle color="#C62828"/> Full Performance Audit</li>
                                <li><FaCheckCircle color="#C62828"/> Dyno Run Test</li>
                                <li><FaCheckCircle color="#C62828"/> Ceramic Coating</li>
                                <li><FaCheckCircle color="#C62828"/> ECU Optimization</li>
                                <li><FaCheckCircle color="#C62828"/> 24/7 Concierge</li>
                            </ul>
                            <button className="btn-outline">Select</button>
                        </div>
                    </div>
                </div>
            </div>

            {/* 4. BOOKING FORM */}
            <div id="booking-form" className="container section-padding">
                <div className="glass-panel booking-wrapper">
                    <div className="section-header">
                        <h2 style={{fontSize: '2rem'}}>Schedule Your <span style={{color: '#C62828'}}>Appointment</span></h2>
                    </div>
                    <form className="booking-form">
                        <div className="form-group">
                            <label>Full Name</label>
                            <input type="text" className="input-premium" placeholder="John Doe" />
                        </div>
                        <div className="form-group">
                            <label>Email Address</label>
                            <input type="email" className="input-premium" placeholder="vip@hyperdrive.com" />
                        </div>
                        <div className="form-group">
                            <label>Car Model</label>
                            <input type="text" className="input-premium" placeholder="e.g. Lamborghini Huracan" />
                        </div>
                        <div className="form-group">
                            <label>Service Needed</label>
                            <select className="input-premium">
                                <option>Essential Maintenance</option>
                                <option>Performance Tuning</option>
                                <option>Detailing & Coating</option>
                                <option>Other</option>
                            </select>
                        </div>
                        <div className="form-group" style={{gridColumn: '1 / -1'}}>
                            <button type="button" className="btn-racing-red" style={{width: '100%'}}>Confirm Booking</button>
                        </div>
                    </form>
                </div>
            </div>
        </div>
    );
};

export default Services;