import React, { useEffect, useState } from 'react';
import { useLocation, useNavigate, Link } from 'react-router-dom';
import { motion } from 'framer-motion';
import { FaPhoneAlt, FaEnvelope, FaWhatsapp, FaMapMarkerAlt, FaUserTie, FaCheckCircle, FaPaperPlane } from 'react-icons/fa';

const ContactSales = () => {
  const location = useLocation();
  const navigate = useNavigate();
  const selectedCar = location.state?.car; // Nhận thông tin xe từ trang trước

  // State cho form
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    phone: '',
    carInterest: selectedCar ? `${selectedCar.year} ${selectedCar.name}` : '',
    budget: '',
    method: 'Phone',
    message: ''
  });

  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  const handleSubmit = (e) => {
    e.preventDefault();
    // Giả lập gửi form thành công
    alert(`Thank you, ${formData.name}! Our sales team will contact you regarding the ${formData.carInterest || 'inquiry'} shortly.`);
    navigate('/');
  };

  // Ảnh nền: Dùng ảnh xe đã chọn hoặc ảnh mặc định
  const heroBg = selectedCar ? selectedCar.image : '/assets/banner1.jpg';

  return (
    <div className="contact-sales-page">
      {/* 1. HERO SECTION */}
      <div className="sales-hero" style={{ backgroundImage: `url('${heroBg}')` }}>
        <div className="sales-hero-overlay"></div>
        <div className="container" style={{ position: 'relative', zIndex: 2, height: '100%', display: 'flex', alignItems: 'center' }}>
          <motion.div 
            initial={{ opacity: 0, x: -50 }} animate={{ opacity: 1, x: 0 }} transition={{ duration: 0.8 }}
            style={{ maxWidth: '700px' }}
          >
            <h4 className="text-gradient" style={{ textTransform: 'uppercase', letterSpacing: '2px', fontWeight: 'bold' }}>Exclusive Concierge</h4>
            <h1 style={{ fontSize: '3.5rem', fontWeight: '800', margin: '10px 0', textTransform: 'uppercase', lineHeight: 1.1 }}>
              Contact Sales <span style={{ color: '#FF002F' }}>Department</span>
            </h1>
            <p style={{ fontSize: '1.2rem', color: '#ccc', maxWidth: '500px' }}>
              Our dedicated team of automotive experts is ready to assist you 24/7.
            </p>
          </motion.div>
        </div>
      </div>

      {/* 2. MAIN CONTENT (FORM & SIDEBAR) */}
      <div className="container section-padding">
        <div className="sales-layout">
          
          {/* LEFT: FORM */}
          <motion.div 
            className="glass-panel" 
            style={{ padding: '3rem' }}
            initial={{ y: 50, opacity: 0 }} whileInView={{ y: 0, opacity: 1 }} viewport={{ once: true }}
          >
            <h2 style={{ marginBottom: '2rem', fontSize: '1.8rem' }}>Inquiry Details</h2>
            <form onSubmit={handleSubmit}>
              <div className="form-group">
                <label>Full Name <span style={{color:'red'}}>*</span></label>
                <input required type="text" className="input-premium" placeholder="Mr. John Doe" 
                  value={formData.name} onChange={e => setFormData({...formData, name: e.target.value})} />
              </div>

              <div className="form-row">
                <div className="form-group">
                  <label>Email Address <span style={{color:'red'}}>*</span></label>
                  <input required type="email" className="input-premium" placeholder="vip@hyperdrive.com" 
                    value={formData.email} onChange={e => setFormData({...formData, email: e.target.value})} />
                </div>
                <div className="form-group">
                  <label>Phone Number <span style={{color:'red'}}>*</span></label>
                  <input required type="text" className="input-premium" placeholder="+84 909..." 
                    value={formData.phone} onChange={e => setFormData({...formData, phone: e.target.value})} />
                </div>
              </div>

              <div className="form-row">
                <div className="form-group">
                  <label>Car of Interest</label>
                  <input type="text" className="input-premium" placeholder="General Inquiry" 
                    value={formData.carInterest} onChange={e => setFormData({...formData, carInterest: e.target.value})} />
                </div>
                <div className="form-group">
                  <label>Budget Range</label>
                  <select className="input-premium" value={formData.budget} onChange={e => setFormData({...formData, budget: e.target.value})}>
                    <option value="">Select Range</option>
                    <option value="<100k">Under $100,000</option>
                    <option value="100k-200k">$100,000 - $200,000</option>
                    <option value="200k-500k">$200,000 - $500,000</option>
                    <option value=">500k">Over $500,000</option>
                  </select>
                </div>
              </div>

              <div className="form-group">
                <label>Preferred Contact Method</label>
                <div style={{ display: 'flex', gap: '20px', marginTop: '10px' }}>
                  {['Phone', 'Email', 'WhatsApp', 'Zalo'].map(m => (
                    <label key={m} style={{ display: 'flex', alignItems: 'center', gap: '8px', cursor: 'pointer', color: formData.method === m ? 'white' : '#888' }}>
                      <input type="radio" name="method" value={m} checked={formData.method === m} 
                        onChange={e => setFormData({...formData, method: e.target.value})} 
                        style={{ accentColor: '#FF002F' }} />
                      {m}
                    </label>
                  ))}
                </div>
              </div>

              <div className="form-group">
                <label>Message / Special Requests</label>
                <textarea className="input-premium" rows="4" placeholder="I am interested in..."
                  value={formData.message} onChange={e => setFormData({...formData, message: e.target.value})}></textarea>
              </div>

              <div style={{ marginTop: '2rem', display: 'flex', flexDirection: 'column', gap: '15px' }}>
                <button type="submit" className="btn-racing-red" style={{ width: '100%', fontSize: '1.1rem' }}>
                  <FaPaperPlane style={{ marginRight: '10px' }} /> Send Inquiry
                </button>
                <a href="tel:1800888999" className="btn-outline" style={{ width: '100%', textAlign: 'center', display: 'block' }}>
                  Or Call Hotline: 1800-888-999
                </a>
              </div>
            </form>
          </motion.div>

          {/* RIGHT: SIDEBAR INFO */}
          <div className="sales-sidebar">
            {/* Sales Manager Card */}
            <motion.div 
              className="glass-panel" 
              style={{ textAlign: 'center', padding: '2.5rem' }}
              initial={{ x: 50, opacity: 0 }} whileInView={{ x: 0, opacity: 1 }} viewport={{ once: true }}
            >
              <div style={{ width: '100px', height: '100px', borderRadius: '50%', overflow: 'hidden', margin: '0 auto 1.5rem', border: '3px solid #FF002F' }}>
                <img src="/profile4.jpg" alt="Manager" style={{ width: '100%', height: '100%', objectFit: 'cover' }} onError={(e) => e.target.src='https://via.placeholder.com/150'} />
              </div>
              <h3 style={{ fontSize: '1.3rem', marginBottom: '5px' }}>DeepSeek</h3>
              <p style={{ color: '#FF002F', fontWeight: 'bold', fontSize: '0.9rem', marginBottom: '1.5rem', textTransform: 'uppercase' }}>Senior Sales Manager</p>
              
              <div style={{ textAlign: 'left', color: '#ccc', fontSize: '0.95rem', display: 'flex', flexDirection: 'column', gap: '12px' }}>
                <p><FaPhoneAlt color="#FF002F" style={{marginRight:'10px'}}/> +84 999 888 777</p>
                <p><FaEnvelope color="#FF002F" style={{marginRight:'10px'}}/> deepseek@hyperdrive.com</p>
                <p><FaWhatsapp color="#FF002F" style={{marginRight:'10px'}}/> +84 999 888 777</p>
              </div>

              <div style={{ marginTop: '1.5rem', paddingTop: '1.5rem', borderTop: '1px solid rgba(255,255,255,0.1)', fontSize: '0.85rem', color: '#888' }}>
                <p style={{display:'flex', alignItems:'center', justifyContent:'center', gap:'5px'}}><FaCheckCircle color="#FF002F"/> 15-min Response Time</p>
                <p style={{display:'flex', alignItems:'center', justifyContent:'center', gap:'5px', marginTop:'5px'}}><FaCheckCircle color="#FF002F"/> 24/7 VIP Support</p>
              </div>
            </motion.div>

            {/* Mini Map */}
            <motion.div 
              className="map-glow-wrapper" style={{ marginTop: '2rem', width: '100%' }}
              initial={{ x: 50, opacity: 0 }} whileInView={{ x: 0, opacity: 1 }} transition={{ delay: 0.2 }} viewport={{ once: true }}
            >
               <iframe
                  title="showroom-map-mini"
                  src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3919.494576356784!2d106.69947607570417!3d10.773380259250085!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x31752f4744d014ad%3A0x629577552994c965!2zQ2jhu68gQuG6v24gVGjDoW5o!5e0!3m2!1svi!2s!4v1700000000000!5m2!1svi!2s"
                  width="100%" height="250"
                  style={{ border: 0, borderRadius: '12px', filter: 'invert(90%) hue-rotate(180deg)' }}
                  allowFullScreen="" loading="lazy"
              ></iframe>
              <div style={{ padding: '15px', background: '#111', borderBottomLeftRadius: '12px', borderBottomRightRadius: '12px', textAlign: 'center' }}>
                  <p style={{ color: 'white', fontWeight: 'bold' }}><FaMapMarkerAlt color="#FF002F"/> HyperDrive Showroom</p>
                  <p style={{ fontSize: '0.85rem', color: '#888' }}>123 Supercar Blvd, District 1, HCMC</p>
              </div>
            </motion.div>
          </div>
        </div>
      </div>

      {/* 5. CTA FOOTER */}
      <div className="section-padding" style={{ textAlign: 'center', background: 'linear-gradient(to top, #000, #111)' }}>
        <h2 style={{ marginBottom: '2rem' }}>Not ready to buy yet?</h2>
        <div style={{ display: 'flex', justifyContent: 'center', gap: '20px' }}>
          <button onClick={() => navigate('/test-drive', {state: {car: selectedCar}})} className="btn-outline">
            Book a Test Drive
          </button>
          <button onClick={() => navigate('/cars')} className="btn-racing-red">
            View All Inventory
          </button>
        </div>
      </div>
    </div>
  );
};

export default ContactSales;