import React, { useEffect } from 'react';
import { motion } from 'framer-motion';
import { FaBullseye, FaFlagCheckered } from 'react-icons/fa';

const About = () => {
    useEffect(() => {
        window.scrollTo(0, 0);
    }, []);

    return (
        <div className="about-page">
            {/* 1. HERO SECTION */}
            {/* Sửa đường dẫn logo.jpg */}
            <div className="page-hero" style={{ backgroundImage: "url('/banner2.jpg')" }}> 
                <div className="hero-overlay"></div>
                <div className="container hero-content-center">
                    <motion.h1 
                         initial={{ y: 30, opacity: 0 }} animate={{ y: 0, opacity: 1 }} transition={{ duration: 0.8 }}
                    >
                        Driven By <span style={{ color: '#C62828' }}>Passion</span>
                    </motion.h1>
                    <motion.p className="hero-subtitle">Defined By Excellence</motion.p>
                </div>
            </div>

            {/* 2. OUR STORY */}
            <div className="container section-padding">
                <div className="about-grid">
                    <motion.div className="about-img-wrapper" initial={{ x: -50, opacity: 0 }} whileInView={{ x: 0, opacity: 1 }} viewport={{once: true}}>
                        {/* Sửa đường dẫn ảnh */}
                        <img src="/logo.jpg" alt="Showroom" className="about-img"/> 
                        <div className="exp-badge">
                            <span>10+</span> Years Experience
                        </div>
                    </motion.div>
                    <motion.div className="about-text" initial={{ x: 50, opacity: 0 }} whileInView={{ x: 0, opacity: 1 }} viewport={{once: true}}>
                        <h4 style={{color: '#C62828', textTransform: 'uppercase', fontWeight: 'bold'}}>Our Story</h4>
                        <h2 style={{fontSize: '2.5rem', marginBottom: '1.5rem'}}>From A Private Garage To A Global Icon</h2>
                        <p style={{color: '#aaa', lineHeight: '1.8', marginBottom: '1rem'}}>
                            Founded in 2014 by a group of supercar enthusiasts, HyperDrive started with a simple mission: to provide the most exclusive vehicles to the most demanding clients.
                        </p>
                        <p style={{color: '#aaa', lineHeight: '1.8'}}>
                            Today, we are the premier destination for luxury automotive excellence in Vietnam, offering not just cars, but a lifestyle.
                        </p>
                        
                        <div className="timeline" style={{marginTop: '2rem'}}>
                            <div className="timeline-item">
                                <span className="year">2014</span>
                                <p>Founded in Ho Chi Minh City</p>
                            </div>
                            <div className="timeline-item">
                                <span className="year">2018</span>
                                <p>Opened Elite Performance Center</p>
                            </div>
                            <div className="timeline-item">
                                <span className="year">2023</span>
                                <p>Reached 1000+ VIP Clients</p>
                            </div>
                        </div>
                    </motion.div>
                </div>
            </div>

            {/* 3. MISSION & VISION */}
            <div className="section-padding" style={{background: '#0a0a0a'}}>
                <div className="container" style={{display: 'grid', gridTemplateColumns: '1fr 1fr', gap: '2rem'}}>
                    <div className="glass-panel mv-card">
                        <FaBullseye size={40} color="#C62828"/>
                        <h3>Our Mission</h3>
                        <p>To deliver world-class automotive experiences through integrity, passion, and unparalleled service.</p>
                    </div>
                    <div className="glass-panel mv-card">
                        <FaFlagCheckered size={40} color="#C62828"/>
                        <h3>Our Vision</h3>
                        <p>To become Southeast Asia's number one destination for hypercars and luxury lifestyle.</p>
                    </div>
                </div>
            </div>

            {/* 4. TEAM */}
            <div className="container section-padding">
                <div className="section-header">
                    <h2>Leadership <span style={{color: '#C62828'}}>Team</span></h2>
                </div>
                <div className="team-grid">
                    {/* Sửa đường dẫn ảnh profile */}
                    {[
                        {name: "Chjong Chjong", role: "CEO & Founder", img: "/profile1.jpg"},
                        {name: "Gemini", role: "Head of Sales", img: "/profile3.jpg"},
                        {name: "Chat GPT", role: "Master Technician", img: "/profile2.jpg"}
                    ].map((member, i) => (
                        <div key={i} className="team-card">
                            <div className="team-img">
                                <img src={member.img} alt={member.name} />
                            </div>
                            <div className="team-info">
                                <h3>{member.name}</h3>
                                <p>{member.role}</p>
                            </div>
                        </div>
                    ))}
                </div>
            </div>
        </div>
    );
};

export default About;