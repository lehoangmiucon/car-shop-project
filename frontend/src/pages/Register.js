import React from 'react';
import { Link } from 'react-router-dom';
import { motion } from 'framer-motion';
import { FaUserPlus } from 'react-icons/fa';

const Register = () => {
    return (
        <div className="auth-container" style={{ 
            backgroundImage: "url('/assets/banner1.jpg')",
            backgroundSize: 'cover',
            backgroundPosition: 'center',
            minHeight: '100vh',
            /* SỬA LẠI: Layout padding top */
            display: 'flex',
            justifyContent: 'center',
            alignItems: 'flex-start',
            paddingTop: '120px', 
            position: 'relative'
        }}>
            <div style={{position: 'absolute', inset: 0, background: 'rgba(0,0,0,0.85)', backdropFilter: 'blur(5px)'}}></div>

            <motion.div 
                className="glass-panel auth-box"
                initial={{ opacity: 0, scale: 0.95 }}
                animate={{ opacity: 1, scale: 1 }}
                transition={{ duration: 0.5 }}
                style={{ 
                    position: 'relative', 
                    zIndex: 1, 
                    padding: '3rem', 
                    borderRadius: '16px', 
                    maxWidth: '450px', 
                    width: '100%',
                    marginTop: '50px' /* Cách top 50px */
                }}
            >
                <div style={{ textAlign: 'center', marginBottom: '2rem' }}>
                    <FaUserPlus size={40} color="#C62828" style={{ marginBottom: '10px' }} />
                    <h2 style={{ fontSize: '2rem', fontWeight: '800' }}>Join The Club</h2>
                    <p style={{ color: '#888' }}>Experience the pinnacle of automotive excellence</p>
                </div>

                <form>
                    <div className="form-group">
                        <label style={{ color: '#ccc', fontSize: '0.85rem' }}>Full Name</label>
                        <input type="text" placeholder="John Doe" className="input-premium" />
                    </div>
                    <div className="form-group">
                        <label style={{ color: '#ccc', fontSize: '0.85rem' }}>Email</label>
                        <input type="email" placeholder="vip@hyperdrive.com" className="input-premium" />
                    </div>
                    <div className="form-group">
                        <label style={{ color: '#ccc', fontSize: '0.85rem' }}>Password</label>
                        <input type="password" placeholder="••••••••" className="input-premium" />
                    </div>
                    
                    <button type="submit" className="btn-racing-red" style={{ width: '100%', marginTop: '1rem' }}>
                        Create Membership
                    </button>
                </form>

                <p style={{ textAlign: 'center', marginTop: '1.5rem', color: '#666', fontSize: '0.9rem' }}>
                    Already a member? <Link to="/login" style={{ color: '#C62828', fontWeight: '600' }}>Login</Link>
                </p>
            </motion.div>
        </div>
    );
};

export default Register;