import React, { useEffect, useState } from 'react';
import { getCars } from '../services/api';
import CarCard from '../components/CarCard';

const CarList = () => {
  const [cars, setCars] = useState([]);
  const [visible, setVisible] = useState(8); // Chỉ hiện 8 xe ban đầu

  useEffect(() => {
    const fetchCars = async () => {
      const data = await getCars();
      setCars(data);
    };
    fetchCars();
  }, []);

  const loadMore = () => {
    setVisible((prev) => prev + 8); // Mỗi lần bấm hiện thêm 8 xe
  };

  return (
    <div className="container page-spacing">
      <div className="section-header">
        <h2>Our Premium Collection</h2>
        <p>Explore the finest selection of luxury and sport vehicles</p>
      </div>
      
      <div className="car-grid">
        {cars.length > 0 ? (
          cars.slice(0, visible).map((car) => <CarCard key={car.id} car={car} />)
        ) : (
          <p className="loading">Loading amazing cars...</p>
        )}
      </div>

      {visible < cars.length && (
        <div className="load-more-container">
            <button onClick={loadMore} className="btn-secondary">Load More Cars</button>
        </div>
      )}
    </div>
  );
};

export default CarList;