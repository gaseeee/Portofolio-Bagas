import React from 'react';
import { Outlet } from 'react-router-dom';
import Navbar from './Navbar';
import Footer from './Footer';

function Layout() {
  return (
    <div className="min-h-screen flex flex-col selection:bg-primary-container selection:text-on-primary-container">
      <Navbar />
      <Outlet />
      <Footer />
    </div>
  );
}

export default Layout;
