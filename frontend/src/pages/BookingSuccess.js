import React, { useEffect } from 'react';
import { useLocation, Link } from 'react-router-dom';
import { motion } from 'framer-motion';
import { FaCheckCircle, FaCalendarCheck, FaMapMarkerAlt, FaCar } from 'react-icons/fa';

const BookingSuccess = () => {
    const location = useLocation();
    const { bookingData, car } = location.state || {}; // Lấy dữ liệu từ trang trước

    useEffect(() => {
        window.scrollTo(0, 0);
    }, []);

    // Tạo mã booking giả
    const bookingID = `HD-${Math.floor(Math.random() * 100000)}`;

    return (
        <div className="success-page" style={{ paddingTop: '120px', minHeight: '100vh', paddingBottom: '5rem' }}>
            <div className="container" style={{ maxWidth: '800px' }}>
                
                {/* 1. SUCCESS HEADER */}
                <div style={{ textAlign: 'center', marginBottom: '3rem' }}>
                    <motion.div 
                        initial={{ scale: 0 }} animate={{ scale: 1 }} transition={{ type: 'spring', stiffness: 200 }}
                        style={{ color: '#00E676', fontSize: '5rem', marginBottom: '1rem' }}
                    >
                        <FaCheckCircle />
                    </motion.div>
                    <motion.h1 
                        initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }} transition={{ delay: 0.2 }}
                        style={{ fontSize: '2.5rem', textTransform: 'uppercase' }}
                    >
                        Booking Successful!
                    </motion.h1>
                    <p style={{ color: '#aaa', marginTop: '10px' }}>
                        Thank you, {bookingData?.name || 'Guest'}. Our team will contact you within 24 hours.
                    </p>
                </div>

                {/* 2. BOOKING CARD */}
                <motion.div 
                    className="glass-panel"
                    initial={{ opacity: 0, y: 30 }} animate={{ opacity: 1, y: 0 }} transition={{ delay: 0.4 }}
                    style={{ padding: '0', overflow: 'hidden', borderTop: '4px solid #C62828' }}
                >
                    <div style={{ padding: '2rem', background: 'rgba(255,255,255,0.02)' }}>
                        <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center', marginBottom: '1rem' }}>
                            <span style={{ color: '#888', textTransform: 'uppercase', fontSize: '0.85rem' }}>Booking Reference</span>
                            <span style={{ color: '#C62828', fontWeight: 'bold', fontSize: '1.2rem' }}>#{bookingID}</span>
                        </div>
                        <div style={{ display: 'grid', gridTemplateColumns: '1fr 1fr', gap: '2rem' }}>
                            <div>
                                <h4 style={{ color: 'white', marginBottom: '15px' }}>Customer Details</h4>
                                <p style={{ color: '#ccc', marginBottom: '5px' }}><strong>Name:</strong> {bookingData?.name}</p>
                                <p style={{ color: '#ccc', marginBottom: '5px' }}><strong>Email:</strong> {bookingData?.email}</p>
                                <p style={{ color: '#ccc' }}><strong>Phone:</strong> {bookingData?.phone}</p>
                            </div>
                            <div>
                                <h4 style={{ color: 'white', marginBottom: '15px' }}>Session Details</h4>
                                <div style={{ display: 'flex', alignItems: 'center', gap: '10px', marginBottom: '8px', color: '#ccc' }}>
                                    <FaCalendarCheck color="#C62828"/> {bookingData?.date} at {bookingData?.time}
                                </div>
                                <div style={{ display: 'flex', alignItems: 'center', gap: '10px', color: '#ccc' }}>
                                    <FaMapMarkerAlt color="#C62828"/> {bookingData?.showroom}
                                </div>
                            </div>
                        </div>
                    </div>

                    {car && (
                        <div style={{ padding: '2rem', borderTop: '1px solid rgba(255,255,255,0.1)', display: 'flex', gap: '2rem', alignItems: 'center' }}>
                            <img src={car.image} alt={car.name} style={{ width: '120px', borderRadius: '8px', objectFit: 'cover' }} />
                            <div>
                                <div style={{ display: 'flex', alignItems: 'center', gap: '8px', color: '#C62828', fontWeight: 'bold', textTransform: 'uppercase', fontSize: '0.8rem' }}>
                                    <FaCar /> Vehicle Reserved
                                </div>
                                <h3 style={{ margin: '5px 0' }}>{car.name}</h3>
                                <p style={{ color: '#666', fontSize: '0.9rem' }}>The ultimate driving experience awaits.</p>
                            </div>
                        </div>
                    )}
                </motion.div>

                {/* 3. NEXT STEPS & CTA */}
                <div style={{ textAlign: 'center', marginTop: '4rem' }}>
                    <h4 style={{ color: 'white', marginBottom: '2rem' }}>What Happens Next?</h4>
                    <div style={{ display: 'flex', justifyContent: 'center', gap: '2rem', marginBottom: '3rem', flexWrap: 'wrap' }}>
                         {['Confirmation Call', 'Details Verification', 'Drive Day'].map((step, i) => (
                             <div key={i} style={{ display: 'flex', alignItems: 'center', gap: '10px', opacity: 0.7 }}>
                                 <div style={{ width: '25px', height: '25px', borderRadius: '50%', background: '#333', textAlign: 'center', lineHeight: '25px', fontSize: '0.8rem' }}>{i+1}</div>
                                 <span>{step}</span>
                             </div>
                         ))}
                    </div>

                    <div style={{ display: 'flex', justifyContent: 'center', gap: '20px' }}>
                        <Link to="/" className="btn-outline">Back To Home</Link>
                        <Link to="/cars" className="btn-racing-red">Explore More Cars</Link>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default BookingSuccess;