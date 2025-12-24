import React from 'react';

const Footer = () => {
  return (
    <footer className="bg-gray-900 text-white py-8 mt-12">
      <div className="max-w-7xl mx-auto px-4 grid grid-cols-1 md:grid-cols-3 gap-6">
        <div>
          <h2 className="font-bold text-lg">Restaurant Name</h2>
          <p>Best dining experience in town.</p>
        </div>
        <div>
          <h2 className="font-bold text-lg">Contact</h2>
          <p>Email: info@restaurant.com</p>
          <p>Phone: +977-123456789</p>
        </div>
        <div>
          <h2 className="font-bold text-lg">Location</h2>
          <iframe src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d29450.24939089084!2d85.34826369120921!3d27.633418680213925!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x39eb116b9efad86d%3A0xa4cbf972da7ee185!2sBhat-Bhateni%20Super%20Store%20-%20Siddhipur!5e0!3m2!1sen!2snp!4v1766507419325!5m2!1sen!2snp" width="500" height="300"  allowfullscreen="" loading="lazy" referrerpolicy="no-referrer-when-downgrade"></iframe>
        </div>
      </div>
      <p className="text-center mt-6">© 2025 Restaurant. All rights reserved.</p>
    </footer>
  );
};

export default Footer;
