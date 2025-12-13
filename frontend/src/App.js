import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import MainLayout from './layouts/MainLayout';
import Home from './pages/Home';
import CarList from './pages/CarList';
import CarDetail from './pages/CarDetail';
import Login from './pages/Login';
import Register from './pages/Register';
import Services from './pages/Services';
import About from './pages/About';
import Contact from './pages/Contact';
import TestDrive from './pages/TestDrive';
import BookingSuccess from './pages/BookingSuccess';
import ContactSales from './pages/ContactSales';

function App() {
  return (
    <Router>
      <MainLayout> {/* Bọc toàn bộ route bằng MainLayout */}
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/cars" element={<CarList />} />
          <Route path="/cars/:id" element={<CarDetail />} />
          <Route path="/login" element={<Login />} />
          <Route path="/register" element={<Register />} />
          <Route path="/services" element={<Services />} />
          <Route path="/about" element={<About />} />
          <Route path="/contact" element={<Contact />} />
          <Route path="/test-drive" element={<TestDrive />} />
          <Route path="/booking-success" element={<BookingSuccess />} />
          <Route path="/contact-sales" element={<ContactSales />} />
        </Routes>
      </MainLayout>
    </Router>
  );
}

export default App;