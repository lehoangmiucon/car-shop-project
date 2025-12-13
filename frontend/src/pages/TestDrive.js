import React, { useEffect, useState } from 'react';
import { useLocation, useNavigate } from 'react-router-dom';
import { motion } from 'framer-motion';
import { FaCalendarAlt, FaClock, FaCar, FaCheckCircle } from 'react-icons/fa';

const TestDrive = () => {
    const location = useLocation();
    const navigate = useNavigate();
    const selectedCar = location.state?.car; // Nhận object car từ trang trước

    const [formData, setFormData] = useState({
        name: '', email: '', phone: '', date: '', time: '', showroom: 'HCM District 1', notes: ''
    });

    useEffect(() => {
        window.scrollTo(0, 0);
    }, []);

    const handleSubmit = (e) => {
        e.preventDefault();
        // Giả lập gửi API thành công -> Chuyển hướng
        navigate('/booking-success', { 
            state: { 
                bookingData: formData, 
                car: selectedCar 
            } 
        });
    };

    return (
        <div className="test-drive-page">
            <div className="page-hero" style={{ height: '40vh', backgroundImage: "url('/assets/banner2.jpg')" }}>
                <div className="hero-overlay"></div>
                <div className="container hero-content-center">
                    <motion.h1 initial={{ y: 20, opacity: 0 }} animate={{ y: 0, opacity: 1 }}>
                        Book A <span style={{ color: '#C62828' }}>Test Drive</span>
                    </motion.h1>
                    <p className="hero-subtitle">Experience the power before you own it</p>
                </div>
            </div>

            <div className="container section-padding">
                <div className="test-drive-layout">
                    {/* LEFT: BOOKING FORM */}
                    <motion.div 
                        className="glass-panel" 
                        style={{ padding: '2.5rem' }}
                        initial={{ x: -30, opacity: 0 }} animate={{ x: 0, opacity: 1 }} transition={{ delay: 0.2 }}
                    >
                        <h2 style={{ marginBottom: '1.5rem', borderBottom: '1px solid #333', paddingBottom: '10px' }}>
                            Your Information
                        </h2>
                        <form onSubmit={handleSubmit}>
                            <div className="form-group">
                                <label>Full Name</label>
                                <input required type="text" className="input-premium" 
                                    onChange={e => setFormData({...formData, name: e.target.value})} />
                            </div>
                            <div className="form-row">
                                <div className="form-group">
                                    <label>Email</label>
                                    <input required type="email" className="input-premium" 
                                        onChange={e => setFormData({...formData, email: e.target.value})} />
                                </div>
                                <div className="form-group">
                                    <label>Phone Number</label>
                                    <input required type="text" className="input-premium" 
                                        onChange={e => setFormData({...formData, phone: e.target.value})} />
                                </div>
                            </div>

                            <h3 style={{ marginTop: '2rem', marginBottom: '1rem', color: '#C62828' }}>Schedule</h3>
                            <div className="form-group">
                                <label>Preferred Showroom</label>
                                <select className="input-premium" onChange={e => setFormData({...formData, showroom: e.target.value})}>
                                    <option>HCM District 1 - Flagship</option>
                                    <option>Hanoi Ba Dinh - Luxury Center</option>
                                    <option>Da Nang - Coastal Hub</option>
                                </select>
                            </div>
                            <div className="form-row">
                                <div className="form-group">
                                    <label><FaCalendarAlt /> Date</label>
                                    <input required type="date" className="input-premium" 
                                        onChange={e => setFormData({...formData, date: e.target.value})} />
                                </div>
                                <div className="form-group">
                                    <label><FaClock /> Time</label>
                                    <select className="input-premium" onChange={e => setFormData({...formData, time: e.target.value})}>
                                        <option>09:00 AM</option>
                                        <option>11:00 AM</option>
                                        <option>02:00 PM</option>
                                        <option>04:00 PM</option>
                                    </select>
                                </div>
                            </div>
                            
                            <div className="form-group" style={{marginTop: '1rem'}}>
                                <label style={{display: 'flex', alignItems: 'center', gap: '10px', cursor: 'pointer'}}>
                                    <input type="checkbox" required style={{accentColor: '#C62828'}} />
                                    <span style={{fontSize: '0.9rem', color: '#888'}}>I agree to the <span style={{color: 'white'}}>Terms & Conditions</span> and valid driving license requirement.</span>
                                </label>
                            </div>

                            <button type="submit" className="btn-racing-red" style={{ width: '100%', marginTop: '1rem' }}>
                                Confirm Booking
                            </button>
                        </form>
                    </motion.div>

                    {/* RIGHT: CAR SUMMARY */}
                    <motion.div 
                        className="car-summary-panel"
                        initial={{ x: 30, opacity: 0 }} animate={{ x: 0, opacity: 1 }} transition={{ delay: 0.4 }}
                    >
                        <div className="glass-panel" style={{ padding: '2rem', position: 'sticky', top: '100px' }}>
                            <h3 style={{ marginBottom: '1rem' }}>Selected Vehicle</h3>
                            {selectedCar ? (
                                <>
                                    <div className="summary-img">
                                        <img src={selectedCar.image} alt={selectedCar.name} style={{ width: '100%', borderRadius: '8px' }} />
                                    </div>
                                    <h2 style={{ fontSize: '1.8rem', marginTop: '1rem' }}>{selectedCar.name}</h2>
                                    <p style={{ color: '#C62828', fontWeight: 'bold' }}>{selectedCar.brand}</p>
                                    
                                    <div className="summary-specs" style={{ marginTop: '1.5rem' }}>
                                        <div className="spec-row">
                                            <span>Price</span>
                                            <strong>${selectedCar.price.toLocaleString()}</strong>
                                        </div>
                                        <div className="spec-row">
                                            <span>Year</span>
                                            <strong>{selectedCar.year}</strong>
                                        </div>
                                        <div className="spec-row">
                                            <span>Est. Power</span>
                                            <strong>700+ HP</strong>
                                        </div>
                                    </div>
                                </>
                            ) : (
                                <div style={{ textAlign: 'center', padding: '2rem 0' }}>
                                    <FaCar size={40} color="#333" />
                                    <p style={{ marginTop: '1rem', color: '#888' }}>No car selected.</p>
                                    <button onClick={() => navigate('/cars')} className="btn-outline" style={{ marginTop: '1rem' }}>Select a Car</button>
                                </div>
                            )}
                        </div>
                    </motion.div>
                </div>
            </div>
        </div>
    );
};

export default TestDrive;