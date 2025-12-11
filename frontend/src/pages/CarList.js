import React, { useEffect, useState } from 'react';
import { getCars } from '../services/api';
import CarCard from '../components/CarCard';

const CarList = () => {
  const [cars, setCars] = useState([]);
  const [visible, setVisible] = useState(6); // Sửa thành 6 xe

  useEffect(() => {
    const fetchCars = async () => {
      const data = await getCars();
      setCars(data);
    };
    fetchCars();
  }, []);

  const loadMore = () => {
    setVisible((prev) => prev + 6);
  };

  return (
    <div className="container page-spacing" style={{minHeight: '80vh'}}>
      <div className="section-header" style={{marginTop: '4rem'}}>
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
        <div className="load-more-container" style={{textAlign: 'center', marginTop: '4rem', marginBottom: '4rem'}}>
            <button onClick={loadMore} className="btn-racing-red">
                Load More Cars
            </button>
        </div>
      )}
    </div>
  );
};

export default CarList;