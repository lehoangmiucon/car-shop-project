import React, { useEffect, useState } from 'react';
import { useParams, Link } from 'react-router-dom';
import { getCarById, getCars } from '../services/api';
import CarCard from '../components/CarCard';
import { motion } from 'framer-motion';

const CarDetail = () => {
    const { id } = useParams();
    const [car, setCar] = useState(null);
    const [relatedCars, setRelatedCars] = useState([]);

    useEffect(() => {
        window.scrollTo(0, 0);
        const fetchData = async () => {
            const data = await getCarById(id);
            setCar(data);
            
            // Lấy xe liên quan (cùng brand hoặc random)
            const allCars = await getCars();
            const related = allCars.filter(c => c.id !== parseInt(id)).slice(0, 3);
            setRelatedCars(related);
        };
        fetchData();
    }, [id]);

    if (!car) return <div className="loading" style={{marginTop: '100px', color:'white'}}>Loading beast...</div>;

    return (
        <div className="detail-page">
            {/* 1. Hero Image Background */}
            <div className="detail-hero">
                <img src={car.image} alt={car.name} className="detail-bg" />
                <div className="detail-header">
                    <motion.div
                        initial={{ opacity: 0, y: 30 }}
                        animate={{ opacity: 1, y: 0 }}
                        transition={{ duration: 0.6 }}
                    >
                        <h4 className="detail-brand">{car.brand}</h4>
                        <h1 className="detail-name">{car.name}</h1>
                    </motion.div>
                </div>
            </div>

            <div className="detail-content">
                {/* 2. Main Info & Specs */}
                <div className="left-col">
                    <div className="spec-grid">
                        <div className="spec-box">
                            <span className="spec-value">{car.year}</span>
                            <span className="spec-label">Model Year</span>
                        </div>
                        <div className="spec-box">
                            <span className="spec-value">Automatic</span>
                            <span className="spec-label">Transmission</span>
                        </div>
                        <div className="spec-box">
                            <span className="spec-value">3.2s</span>
                            <span className="spec-label">0-60 mph</span>
                        </div>
                    </div>

                    <h3 style={{marginBottom: '1rem', color: 'white'}}>Vehicle Description</h3>
                    <p style={{lineHeight: '1.8', color: '#ccc', marginBottom: '3rem'}}>
                        {car.description}. This masterpiece of engineering represents the pinnacle of {car.brand}'s performance division. 
                        Equipped with advanced aerodynamics and a race-inspired interior, it offers an driving experience unlike any other.
                    </p>

                    <h3 style={{marginBottom: '1.5rem', color: 'white'}}>You Might Also Like</h3>
                    <div className="car-grid">
                        {relatedCars.map(relCar => (
                            <CarCard key={relCar.id} car={relCar} />
                        ))}
                    </div>
                </div>

                {/* 3. Sidebar Price Box */}
                <div className="right-col">
                    <div className="price-box">
                        <span style={{color: '#888', display: 'block', marginBottom: '5px'}}>Current Price</span>
                        <span className="price-tag">${car.price.toLocaleString()}</span>
                        
                        <button className="btn-buy">Book Test Drive</button>
                        <button className="btn-contact">Contact Sales</button>
                        
                        <div style={{marginTop: '20px', fontSize: '0.85rem', color: '#666', lineHeight: '1.5'}}>
                            <p>✓ 1 Year Warranty Included</p>
                            <p>✓ Worldwide Shipping Available</p>
                            <p>✓ Flexible Financing Options</p>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default CarDetail;