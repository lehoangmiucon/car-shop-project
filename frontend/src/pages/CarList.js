import React, { useEffect, useState } from 'react';
import { getCars } from '../services/api';
import CarCard from '../components/CarCard';

const CarList = () => {
  const [cars, setCars] = useState([]);

  useEffect(() => {
    const fetchCars = async () => {
      const data = await getCars();
      setCars(data);
    };
    fetchCars();
  }, []);

  return (
    <div className="container page-spacing">
      <div className="section-header">
        <h2>Latest Arrivals</h2>
        <p>Choose from our finest selection of vehicles</p>
      </div>
      
      <div className="car-grid">
        {cars.length > 0 ? (
          cars.map((car) => <CarCard key={car.id} car={car} />)
        ) : (
          <p className="loading">Loading amazing cars...</p>
        )}
      </div>
    </div>
  );
};

export default CarList;