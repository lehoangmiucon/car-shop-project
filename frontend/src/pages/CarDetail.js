import React, { useEffect, useState } from 'react';
import { useParams, Link } from 'react-router-dom';
import { getCarById, getCars } from '../services/api';
import CarCard from '../components/CarCard';
import { motion } from 'framer-motion';
import { FaTachometerAlt, FaCogs, FaGasPump, FaRoad, FaVolumeUp, FaCheckCircle, FaGlobe, FaTools } from 'react-icons/fa';

const CarDetail = () => {
    const { id } = useParams();
    const [car, setCar] = useState(null);
    const [relatedCars, setRelatedCars] = useState([]);
    const [heroImage, setHeroImage] = useState('');
    const [activeColor, setActiveColor] = useState('red');

    // Giả lập dữ liệu specs vì backend chưa có
    const specs = {
        hp: '710 HP',
        torque: '770 Nm',
        topSpeed: '211 mph',
        engine: '4.0L V8',
        transmission: '7-Speed DCT',
        range: 'N/A'
    };

    useEffect(() => {
        window.scrollTo(0, 0);
        const fetchData = async () => {
            const data = await getCarById(id);
            setCar(data);
            setHeroImage(data.image);
            
            const allCars = await getCars();
            // Lấy 4 xe thay vì 3
            const related = allCars.filter(c => c.id !== parseInt(id)).slice(0, 4);
            setRelatedCars(related);
        };
        fetchData();
    }, [id]);

    if (!car) return <div className="loading" style={{marginTop: '100px', color:'white', textAlign:'center'}}>Loading beast...</div>;

    // Giả lập ảnh gallery (dùng lại ảnh chính vì chưa có nhiều ảnh)
    const galleryImages = [car.image, car.image, car.image, car.image];

    return (
        <div className="detail-page">
            {/* 1. BREADCRUMB */}
            <div className="container" style={{paddingTop: '80px', paddingBottom: '10px'}}>
                <p className="breadcrumb">Home / Cars / <span>{car.name}</span></p>
            </div>

            {/* 2. PREMIUM HERO SECTION */}
            <motion.div 
                className="detail-hero" 
                initial={{ opacity: 0 }} animate={{ opacity: 1 }}
                style={{ position: 'relative', height: '70vh', overflow: 'hidden' }}
            >
                {/* Background Image với hiệu ứng Parallax nhẹ */}
                <div style={{
                    backgroundImage: `url('${heroImage}')`,
                    backgroundSize: 'cover',
                    backgroundPosition: 'center',
                    position: 'absolute', inset: 0,
                    zIndex: -1,
                    transition: 'all 0.5s ease'
                }}></div>

                {/* Layer Gradient Overlay Đỏ - Đen */}
                <div style={{
                    position: 'absolute', inset: 0,
                    background: 'linear-gradient(to top, #0D0D0D 10%, rgba(198,40,40,0.1) 50%, rgba(0,0,0,0.4) 100%)'
                }}></div>

                {/* Vignette (Tối góc) */}
                <div style={{position: 'absolute', inset: 0, boxShadow: 'inset 0 0 100px black'}}></div>

                <div className="container" style={{position: 'relative', height: '100%', display: 'flex', alignItems: 'flex-end', paddingBottom: '3rem'}}>
                    <motion.div initial={{ y: 50, opacity: 0 }} animate={{ y: 0, opacity: 1 }} transition={{ delay: 0.2 }}>
                        <h4 style={{ color: '#C62828', fontWeight: '800', letterSpacing: '3px', textTransform: 'uppercase' }}>{car.brand}</h4>
                        <h1 style={{ fontSize: '4.5rem', fontWeight: '900', lineHeight: 1, textTransform: 'uppercase', textShadow: '0 5px 15px rgba(0,0,0,0.8)' }}>
                            {car.name}
                        </h1>
                        <button className="btn-racing-red" style={{marginTop: '20px', display: 'flex', alignItems: 'center', gap: '10px'}}>
                             <FaVolumeUp /> Hear Engine Rev
                        </button>
                    </motion.div>
                </div>
            </motion.div>

            {/* 3. MAIN CONTENT */}
            <div className="detail-content container" style={{ display: 'grid', gridTemplateColumns: '2fr 1fr', gap: '4rem', padding: '3rem 20px' }}>
                
                {/* --- LEFT COLUMN --- */}
                <div className="left-col">
                    {/* GALLERY THUMBNAILS */}
                    <div style={{ display: 'flex', gap: '10px', marginBottom: '3rem' }}>
                        {galleryImages.map((img, idx) => (
                            <img 
                                key={idx} 
                                src={img} 
                                alt="thumb" 
                                className={`gallery-thumb ${heroImage === img ? 'active' : ''}`}
                                onClick={() => setHeroImage(img)} 
                            />
                        ))}
                    </div>

                    {/* PERFORMANCE HIGHLIGHTS (6 GRID) */}
                    <h3 style={{ color: 'white', marginBottom: '1.5rem', borderLeft: '4px solid #C62828', paddingLeft: '10px' }}>Performance Highlights</h3>
                    <div className="spec-grid" style={{ display: 'grid', gridTemplateColumns: 'repeat(3, 1fr)', gap: '15px', marginBottom: '3rem' }}>
                        {[
                            { icon: <FaTachometerAlt />, label: 'Horsepower', val: specs.hp },
                            { icon: <FaRoad />, label: 'Top Speed', val: specs.topSpeed },
                            { icon: <FaCogs />, label: 'Torque', val: specs.torque },
                            { icon: <FaGasPump />, label: 'Engine', val: specs.engine },
                            { icon: <FaTachometerAlt />, label: '0-60 mph', val: '3.2s' },
                            { icon: <FaCogs />, label: 'Transmission', val: specs.transmission },
                        ].map((item, i) => (
                            <motion.div 
                                key={i} 
                                className="glass-panel" 
                                style={{ padding: '20px', textAlign: 'center', borderRadius: '8px' }}
                                whileHover={{ y: -5, borderColor: '#C62828' }}
                            >
                                <div style={{ color: '#C62828', fontSize: '1.5rem', marginBottom: '10px' }}>{item.icon}</div>
                                <div style={{ fontSize: '1.2rem', fontWeight: 'bold', color: 'white' }}>{item.val}</div>
                                <div style={{ fontSize: '0.8rem', color: '#888', textTransform: 'uppercase' }}>{item.label}</div>
                            </motion.div>
                        ))}
                    </div>

                    <h3 style={{ color: 'white', marginBottom: '1rem' }}>Description</h3>
                    <p style={{ lineHeight: '1.8', color: '#ccc', marginBottom: '3rem', fontSize: '1.05rem' }}>
                        {car.description}. Engineered for perfection, this {car.name} combines raw power with sophisticated luxury. 
                        A true masterpiece for the discerning collector.
                    </p>

                    {/* RELATED CARS (4 CARS) */}
                    <h3 style={{ color: 'white', marginBottom: '1.5rem' }}>You Might Also Like</h3>
                    <div className="car-grid" style={{gridTemplateColumns: 'repeat(auto-fill, minmax(250px, 1fr))'}}> 
                        {relatedCars.map(relCar => (
                            <CarCard key={relCar.id} car={relCar} />
                        ))}
                    </div>
                </div>

                {/* --- RIGHT COLUMN (SIDEBAR) --- */}
                <div className="right-col">
                    <motion.div 
                        className="glass-panel active-border price-box"
                        /* ... animation props ... */
                        style={{ padding: '2.5rem', borderRadius: '12px', position: 'sticky', top: '100px' }}
                    >
                        <span style={{ color: '#888', display: 'block', marginBottom: '5px' }}>Current Price</span>
                        <span style={{ fontSize: '2.5rem', color: '#C62828', fontWeight: '800', display: 'block', marginBottom: '2rem' }}>
                            ${car.price.toLocaleString()}
                        </span>

                        {/* BUTTON 1: Book Test Drive (Giữ nguyên class btn-buy đã update CSS) */}
                        <button className="btn-buy" style={{ display: 'flex', justifyContent: 'center', alignItems: 'center', gap: '10px' }}>
                            Book Test Drive
                        </button>

                        {/* BUTTON 2: Contact Sales - SỬA LẠI ở đây */}
                        {/* Xóa style inline cũ, dùng class btn-contact */}
                        <button className="btn-contact">
                            Contact Sales
                        </button>

                        {/* COLOR PICKER */}
                        <div style={{ marginTop: '2rem', paddingTop: '1.5rem', borderTop: '1px solid rgba(255,255,255,0.1)' }}>
                            <p style={{ color: '#ccc', marginBottom: '10px', fontSize: '0.9rem' }}>Exterior Color</p>
                            <div style={{ display: 'flex', gap: '10px' }}>
                                {['#C62828', '#000000', '#FFFFFF', '#0047AB'].map(color => (
                                    <div 
                                        key={color}
                                        onClick={() => setActiveColor(color)}
                                        style={{ 
                                            width: '25px', height: '25px', borderRadius: '50%', background: color, 
                                            cursor: 'pointer', border: activeColor === color ? '2px solid white' : '2px solid transparent',
                                            boxShadow: activeColor === color ? `0 0 10px ${color}` : 'none'
                                        }}
                                    ></div>
                                ))}
                            </div>
                        </div>

                        {/* FINANCE CALCULATOR (UI Only) */}
                        <div style={{ marginTop: '2rem' }}>
                             <p style={{ color: '#ccc', marginBottom: '10px', fontSize: '0.9rem' }}>Est. Monthly Payment</p>
                             <div style={{ fontSize: '1.5rem', fontWeight: 'bold' }}>$ {(car.price / 60).toFixed(0)} / mo</div>
                             <div style={{ fontSize: '0.8rem', color: '#666' }}>60 months, $5000 down</div>
                        </div>

                        {/* GUARANTEE ICONS */}
                        <div style={{ marginTop: '2rem', display: 'flex', flexDirection: 'column', gap: '10px', fontSize: '0.85rem', color: '#aaa' }}>
                            <div style={{ display: 'flex', alignItems: 'center', gap: '10px' }}><FaGlobe color="#C62828"/> Global Delivery</div>
                            <div style={{ display: 'flex', alignItems: 'center', gap: '10px' }}><FaCheckCircle color="#C62828"/> Certified Warranty</div>
                            <div style={{ display: 'flex', alignItems: 'center', gap: '10px' }}><FaTools color="#C62828"/> VIP Maintenance</div>
                        </div>

                    </motion.div>
                </div>
            </div>
        </div>
    );
};

export default CarDetail;