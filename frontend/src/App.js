import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import MainLayout from './layouts/MainLayout'; // Import Layout
import Home from './pages/Home';
import CarList from './pages/CarList';
import Login from './pages/Login';
import Register from './pages/Register';

function App() {
  return (
    <Router>
      <MainLayout> {/* Bọc toàn bộ route bằng MainLayout */}
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/cars" element={<CarList />} />
          <Route path="/login" element={<Login />} />
          <Route path="/register" element={<Register />} />
        </Routes>
      </MainLayout>
    </Router>
  );
}

export default App;