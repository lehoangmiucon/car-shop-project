import React from 'react';

const CarCard = ({ car }) => {
  return (
    <div className="car-card">
      <div className="car-image-wrapper">
        <img src={car.image} alt={car.name} className="car-image" />
        <span className="car-year">{car.year}</span>
      </div>
      <div className="car-details">
        <span className="car-brand">{car.brand}</span>
        <h3 className="car-name">{car.name}</h3>
        <p className="car-desc">{car.description}</p>
        <div className="car-footer">
          <span className="car-price">${car.price.toLocaleString()}</span>
          <button className="btn-view">View Details</button>
        </div>
      </div>
    </div>
  );
};

export default CarCard;