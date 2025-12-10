import React from 'react';
import { Link } from 'react-router-dom';
import { motion } from 'framer-motion';

const CarCard = ({ car }) => {
  return (
    <motion.div 
      className="car-card"
      initial={{ opacity: 0, y: 20 }}
      whileInView={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.5 }}
      viewport={{ once: true }}
    >
      <div className="car-image-wrapper">
        <img src={car.image} alt={car.name} className="car-image" />
        <span className="car-badge">{car.year}</span>
      </div>
      <div className="car-details">
        <span className="car-brand">{car.brand}</span>
        <h3 className="car-name">{car.name}</h3>
        <p className="car-price">${car.price.toLocaleString()}</p>
        <Link to={`/cars/${car.id}`}>
          <button className="btn-view">View Specs</button>
        </Link>
      </div>
    </motion.div>
  );
};

export default CarCard;