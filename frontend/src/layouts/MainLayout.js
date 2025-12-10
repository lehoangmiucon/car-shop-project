import React from 'react';
import Navbar from '../components/Navbar';
import Footer from '../components/Footer';

const MainLayout = ({ children }) => {
    return (
        <div className="main-layout">
            <Navbar />
            <div className="content-wrapper">
                {children}
            </div>
            <Footer />
        </div>
    );
};

export default MainLayout;