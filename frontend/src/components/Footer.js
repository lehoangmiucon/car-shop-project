import React from 'react';
import { Link } from 'react-router-dom';

const Footer = () => {
    return (
        <footer className="footer">
            {/* Showroom Location với Viền Gradient Chuẩn */}
            <div className="showroom-header">
                <h3>Showroom Location</h3>
                <div className="container" style={{maxWidth: '800px'}}>
                    <div className="map-glow-wrapper">
                        <iframe 
                            title="map"
                            src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3919.255866195745!2d106.6923!3d10.7915!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x0%3A0x0!2zMTDCsDQ3JzI5LjQiTiAxMDbCsDQxJzMyLjMiRQ!5e0!3m2!1sen!2s!4v16345!5m2!1sen!2s" 
                            width="100%" 
                            height="250" 
                            style={{ border: 0, borderRadius: '12px', display: 'block' }} 
                            allowFullScreen="" 
                            loading="lazy">
                        </iframe>
                    </div>
                </div>
            </div>

            {/* 3 Columns */}
            <div className="container footer-columns">
                <div className="footer-col">
                    <h3 className="footer-title">HyperDrive</h3>
                    <p>The premier destination for luxury and performance vehicles.</p>
                </div>
                <div className="footer-col">
                    <h3 className="footer-title">Quick Links</h3>
                    <ul>
                        <li><Link to="/">Home</Link></li>
                        <li><Link to="/cars">Inventory</Link></li>
                        <li><Link to="/login">Login</Link></li>
                    </ul>
                </div>
                <div className="footer-col">
                    <h3 className="footer-title">Contact Us</h3>
                    <p>📍 123 Supercar Blvd, Ho Chi Minh City</p>
                    <p>📞 +84 999 888 777</p>
                    <p>✉️ sales@hyperdrive.com</p>
                </div>
            </div>
            <div className="footer-bottom">
                <p>© {new Date().getFullYear()} HyperDrive. All rights reserved.</p>
            </div>
        </footer>
    );
};

export default Footer;  