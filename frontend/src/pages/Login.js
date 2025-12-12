import React from 'react';
import { Link } from 'react-router-dom';
import { motion } from 'framer-motion';
import { FaTachometerAlt } from 'react-icons/fa';

const Login = () => {
    return (
        <div className="auth-container" style={{ 
            backgroundImage: "url('/assets/banner1.jpg')",
            backgroundSize: 'cover',
            backgroundPosition: 'center',
            minHeight: '100vh',
            /* SỬA LẠI: Layout để tránh bị Navbar che */
            display: 'flex',
            justifyContent: 'center',
            alignItems: 'flex-start', /* Căn từ trên xuống thay vì giữa */
            paddingTop: '120px',      /* Đẩy xuống khỏi navbar */
            position: 'relative'
        }}>
            <div style={{position: 'absolute', inset: 0, background: 'rgba(0,0,0,0.85)', backdropFilter: 'blur(5px)'}}></div>

            <motion.div 
                className="glass-panel auth-box"
                initial={{ opacity: 0, y: 30 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6 }}
                style={{ 
                    position: 'relative', 
                    zIndex: 1, 
                    padding: '3rem', 
                    borderRadius: '16px', 
                    maxWidth: '450px', 
                    width: '100%',
                    marginTop: '30px'
                }}
            >
                <div style={{ textAlign: 'center', marginBottom: '2rem' }}>
                    <FaTachometerAlt size={40} color="#C62828" style={{ marginBottom: '10px' }} />
                    <h2 style={{ fontSize: '2rem', fontWeight: '800', letterSpacing: '-1px' }}>HYPER<span style={{color: '#C62828'}}>DRIVE</span></h2>
                    <p style={{ color: '#888', fontSize: '0.9rem' }}>Access your luxury garage</p>
                </div>

                <form>
                    <div className="form-group">
                        <label style={{ color: '#ccc', fontSize: '0.85rem', marginBottom: '8px', display: 'block' }}>Email Address</label>
                        <input type="email" placeholder="vip@hyperdrive.com" className="input-premium" />
                    </div>
                    <div className="form-group">
                        <label style={{ color: '#ccc', fontSize: '0.85rem', marginBottom: '8px', display: 'block' }}>Password</label>
                        <input type="password" placeholder="••••••••" className="input-premium" />
                    </div>
                    
                    <button 
                        type="submit" 
                        className="btn-racing-red" 
                        style={{ width: '80%', display: 'block', margin: '1rem auto' }}
                    >
                        Access Account
                    </button>
                </form>

                <p style={{ textAlign: 'center', marginTop: '1.5rem', color: '#666', fontSize: '0.9rem' }}>
                    New to the club? <Link to="/register" style={{ color: '#C62828', fontWeight: '600' }}>Join Membership</Link>
                </p>
            </motion.div>
        </div>
    );
};

export default Login;