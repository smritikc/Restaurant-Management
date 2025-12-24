import React from 'react';
import { Link } from 'react-router-dom';

const Navbar = () => {
  return (
    <nav className="bg-white shadow-lg">
      <div className="max-w-7xl mx-auto px-4">
        <div className="flex justify-between h-16 items-center">
          <div className="flex-shrink-0">
            <img className="h-12 w-12" src="/logo.png" alt="Restaurant Logo" />
          </div>
          <div className="flex space-x-6">
            <Link to="/" className="hover:text-red-500 font-medium">Home</Link>
            <Link to="/menu" className="hover:text-red-500 font-medium">Menu</Link>
            <Link to="/booking" className="hover:text-red-500 font-medium">Booking</Link>
            <Link to="/about" className="hover:text-red-500 font-medium">About Us</Link>
            <a href="/contact" className="hover:text-red-500 font-medium">Contact Us</a>
          </div>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;
