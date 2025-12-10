import React from 'react';
import { Link } from 'react-router-dom';

const Footer = () => {
    return (
        <footer className="footer">
            <div className="container footer-content">
                <div className="footer-col">
                    <h3>HyperDrive</h3>
                    <p>The premier destination for luxury and performance vehicles. We help you find the car of your dreams.</p>
                </div>
                <div className="footer-col">
                    <h4>Quick Links</h4>
                    <ul>
                        <li><Link to="/">Home</Link></li>
                        <li><Link to="/cars">Shop Cars</Link></li>
                        <li><Link to="/login">Login</Link></li>
                        <li><Link to="/register">Register</Link></li>
                    </ul>
                </div>
                <div className="footer-col">
                    <h4>Contact Us</h4>
                    <p>📍 123 Supercar Blvd, Ho Chi Minh City</p>
                    <p>📞 +84 999 888 777</p>
                    <p>✉️ sales@hyperdrive.com</p>
                </div>
                <div className="footer-col">
                    <h4>Showroom Location</h4>
                    {/* Placeholder Google Maps - Bạn có thể thay bằng iframe thật sau này */}
                    <div className="map-placeholder">
                        <iframe 
                            title="map"
                            src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3919.239409074092!2d106.69050231480096!3d10.793446992309852!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x317528d4948e3d67%3A0x629555c425028059!2sLandmark%2081!5e0!3m2!1sen!2s!4v1634567890123!5m2!1sen!2s" 
                            width="100%" 
                            height="150" 
                            style={{border:0}} 
                            allowFullScreen="" 
                            loading="lazy">
                        </iframe>
                    </div>
                </div>
            </div>
            <div className="footer-bottom">
                <p>&copy; {new Date().getFullYear()} HyperDrive Shop. All rights reserved.</p>
            </div>
        </footer>
    );
};

export default Footer;