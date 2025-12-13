import React, { useEffect, useState, useRef } from 'react';
import { useParams, Link, useNavigate } from 'react-router-dom'; // <--- FIX 1: Thêm useNavigate
import { getCarById, getCars } from '../services/api';
import CarCard from '../components/CarCard';
import { motion } from 'framer-motion';
import { FaTachometerAlt, FaCogs, FaGasPump, FaRoad, FaVolumeUp, FaStop, FaCheckCircle, FaGlobe, FaTools } from 'react-icons/fa';

const CarDetail = () => {
  const { id } = useParams();
  const navigate = useNavigate(); // <--- FIX 2: Khai báo hàm navigate
  const [car, setCar] = useState(null);
  const [relatedCars, setRelatedCars] = useState([]);
  const [heroImage, setHeroImage] = useState('');
  const [activeColor, setActiveColor] = useState('red');
  const [isPlaying, setIsPlaying] = useState(false);
  
  // Dùng useRef để giữ instance của Audio
  const audioRef = useRef(null);

  // --- HÀM TẠO THÔNG SỐ RIÊNG CHO TỪNG XE ---
  const generateSpecs = (carData) => {
    if (!carData) return {};
    const baseHp = 500 + (carData.id * 15); 
    return {
      hp: `${baseHp} HP`,
      torque: `${600 + (carData.id * 10)} Nm`,
      topSpeed: `${180 + (carData.id * 2)} mph`,
      engine: carData.brand === 'Tesla' || carData.brand === 'Lucid' ? 'Electric Motor' : (carData.id % 2 === 0 ? '4.0L V8 Twin-Turbo' : '5.2L V10 N/A'),
      transmission: carData.brand === 'Tesla' ? '1-Speed' : '7-Speed DCT',
      accel: `2.${9 - (carData.id % 5)}s` 
    };
  };

  const specs = generateSpecs(car);

  useEffect(() => {
    window.scrollTo(0, 0);
    const fetchData = async () => {
      const data = await getCarById(id);
      setCar(data);
      if(data) setHeroImage(data.image);

      const allCars = await getCars();
      const related = allCars.filter(c => c.id !== parseInt(id)).slice(0, 4);
      setRelatedCars(related);
    };
    fetchData();

    // Cleanup function: Tắt âm thanh khi rời trang
    return () => {
      if (audioRef.current) {
        audioRef.current.pause();
        audioRef.current.currentTime = 0;
      }
    };
  }, [id]);

  // --- XỬ LÝ ÂM THANH ---
  const handleAudio = () => {
    if (isPlaying) {
        if (audioRef.current) {
            audioRef.current.pause();
            audioRef.current.currentTime = 0;
        }
        setIsPlaying(false);
        return;
    }

    if (!car) return;
    
    const soundPath = `/sounds/${car.brand.toLowerCase()}.mp3`; 
    
    if (!audioRef.current || audioRef.current.src !== window.location.origin + soundPath) {
        audioRef.current = new Audio(soundPath);
    }

    setIsPlaying(true);
    
    audioRef.current.play()
      .then(() => {
        setTimeout(() => {
            if (audioRef.current) { 
                audioRef.current.pause();
                audioRef.current.currentTime = 0;
                setIsPlaying(false);
            }
        }, 8000); 
      })
      .catch((err) => {
        console.error("Audio Error:", err);
        alert(`Vroom! (Chưa có file âm thanh cho ${car.brand}. Cần chép file vào public/sounds/${car.brand.toLowerCase()}.mp3)`);
        setIsPlaying(false);
      });
  };

  if (!car) return <div className="loading" style={{marginTop: '100px', color:'white', textAlign:'center'}}>Loading beast...</div>;

  const galleryImages = [car.image, car.image, car.image, car.image];

  return (
    <div className="detail-page">
      {/* 1. BREADCRUMB */}
      <div className="container" style={{paddingTop: '100px', paddingBottom: '10px'}}>
        <p className="breadcrumb">Home / Cars / <span>{car.name}</span></p>
      </div>

      {/* 2. HERO SECTION */}
      <motion.div 
        className="detail-hero"
        initial={{ opacity: 0 }} animate={{ opacity: 1 }}
        style={{ position: 'relative', height: '70vh', overflow: 'hidden' }}
      >
        <div style={{
          backgroundImage: `url('${heroImage}')`,
          backgroundSize: 'cover',
          backgroundPosition: 'center',
          position: 'absolute', inset: 0,
          zIndex: -1,
          transition: 'all 0.5s ease'
        }}></div>
        
        <div style={{
          position: 'absolute', inset: 0,
          background: 'linear-gradient(to top, #0D0D0D 10%, rgba(198,40,40,0.1) 50%, rgba(0,0,0,0.4) 100%)'
        }}></div>
        <div style={{position: 'absolute', inset: 0, boxShadow: 'inset 0 0 100px black'}}></div>

        <div className="container" style={{position: 'relative', height: '100%', display: 'flex', alignItems: 'flex-end', paddingBottom: '3rem'}}>
          <motion.div initial={{ y: 50, opacity: 0 }} animate={{ y: 0, opacity: 1 }} transition={{ delay: 0.2 }}>
            <h4 style={{ color: '#C62828', fontWeight: '800', letterSpacing: '3px', textTransform: 'uppercase' }}>{car.brand}</h4>
            <h1 style={{ fontSize: '4.5rem', fontWeight: '900', lineHeight: 1, textTransform: 'uppercase', textShadow: '0 5px 15px rgba(0,0,0,0.8)' }}>
              {car.name}
            </h1>
            
            {/* NÚT NGHE TIẾNG PÔ */}
            <button 
                className={`btn-racing-red ${isPlaying ? 'revving' : ''}`} 
                onClick={handleAudio}
                style={{marginTop: '20px', display: 'flex', alignItems: 'center', gap: '10px', minWidth: '200px', justifyContent: 'center'}}
            >
              {isPlaying ? <FaStop /> : <FaVolumeUp />} 
              {isPlaying ? 'Stop Engine' : 'Hear Engine Rev'}
            </button>
          </motion.div>
        </div>
      </motion.div>

      {/* 3. MAIN CONTENT */}
      <div className="detail-content container" style={{ display: 'grid', gridTemplateColumns: '2fr 1fr', gap: '4rem', padding: '3rem 20px' }}>
        
        {/* --- LEFT COLUMN --- */}
        <div className="left-col">
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

          <h3 style={{ color: 'white', marginBottom: '1.5rem', borderLeft: '4px solid #C62828', paddingLeft: '10px' }}>Performance Highlights</h3>
          <div className="spec-grid" style={{ display: 'grid', gridTemplateColumns: 'repeat(3, 1fr)', gap: '15px', marginBottom: '3rem' }}>
            {[
              { icon: <FaTachometerAlt />, label: 'Horsepower', val: specs.hp },
              { icon: <FaRoad />, label: 'Top Speed', val: specs.topSpeed },
              { icon: <FaCogs />, label: 'Torque', val: specs.torque },
              { icon: <FaGasPump />, label: 'Engine', val: specs.engine },
              { icon: <FaTachometerAlt />, label: '0-60 mph', val: specs.accel },
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
            initial={{ x: 50, opacity: 0 }}
            animate={{ x: 0, opacity: 1 }}
            transition={{ delay: 0.4 }}
            style={{ padding: '2.5rem', borderRadius: '12px', position: 'sticky', top: '100px' }}
          >
            <span style={{ color: '#888', display: 'block', marginBottom: '5px' }}>Current Price</span>
            <span style={{ fontSize: '2.5rem', color: '#C62828', fontWeight: '800', display: 'block', marginBottom: '2rem' }}>
              ${car.price.toLocaleString()}
            </span>

            {/* --- FIX 3: NÚT BOOK TEST DRIVE ĐÃ SỬA LỖI --- */}
            <button 
                className="btn-buy"
                onClick={() => navigate('/test-drive', { state: { car: car } })} 
            >
                Book Test Drive
            </button>

            <button 
                className="btn-contact"
                onClick={() => navigate('/contact-sales', { state: { car: car } })} // <-- ĐÃ SỬA
            >
                Contact Sales
            </button>

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

            <div style={{ marginTop: '2rem' }}>
              <p style={{ color: '#ccc', marginBottom: '10px', fontSize: '0.9rem' }}>Est. Monthly Payment</p>
              <div style={{ fontSize: '1.5rem', fontWeight: 'bold' }}>$ {(car.price / 60).toFixed(0)} / mo</div>
              <div style={{ fontSize: '0.8rem', color: '#666' }}>60 months, $5000 down</div>
            </div>
            
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