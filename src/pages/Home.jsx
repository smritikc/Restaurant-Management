import React from 'react';
import { Link } from 'react-router-dom';


const Home = () => {
  return (
    <div>

      {/* Hero Section */}
      <section className="relative bg-cover bg-center h-screen" style={{ backgroundImage: "url('/public/food.jpg')" }}>
        <div className="absolute inset-0 bg-black bg-opacity-50 flex flex-col justify-center items-center text-center px-4">
          <h1 className="text-5xl md:text-6xl font-bold text-white mb-6 animate-fadeIn">
            Welcome to <span className="text-red-500">Our Restaurant</span>
          </h1>
          <p className="text-xl md:text-2xl text-gray-200 max-w-2xl mb-6">
            Experience the finest dining, where taste meets luxury and every meal feels like a celebration.
          </p>
          <Link to="/booking" className="bg-red-500 text-white py-3 px-8 rounded-full font-semibold hover:bg-red-600 transition">
  Book a Table
</Link>


        </div>
      </section>

      {/* Restaurant Photos */}
      <section className="max-w-6xl mx-auto py-16 px-4">
        <h2 className="text-3xl font-bold text-center mb-10">Our Ambiance & Culinary Delights</h2>
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-6">
          <img src="/public/res1.jpg" alt="Restaurant" className="w-full h-64 object-cover rounded-lg shadow-lg hover:scale-105 transition"/>
          <img src="/public/res2.jpg" alt="Restaurant" className="w-full h-64 object-cover rounded-lg shadow-lg hover:scale-105 transition"/>
          <img src="/public/res3.jpg" alt="Restaurant" className="w-full h-64 object-cover rounded-lg shadow-lg hover:scale-105 transition"/>
        </div>
      </section>

      {/* Feedback & Query Form */}
      <section className="bg-gray-50 py-16 px-4 max-w-3xl mx-auto rounded-lg shadow-lg">
        <h2 className="text-3xl font-bold mb-6 text-center text-gray-800">We'd Love to Hear From You</h2>
        <p className="text-center text-gray-600 mb-8">
          Share your thoughts, ask questions, or give feedback about your experience. Your opinion matters!
        </p>
        <form className="flex flex-col gap-4">
          <input type="text" placeholder="Your Name" className="p-3 border rounded focus:ring-2 focus:ring-red-500"/>
          <input type="email" placeholder="Your Email" className="p-3 border rounded focus:ring-2 focus:ring-red-500"/>
          <textarea placeholder="Your Message" className="p-3 border rounded h-32 focus:ring-2 focus:ring-red-500"></textarea>
          <button className="bg-red-500 text-white py-3 rounded hover:bg-red-600 transition font-semibold">
            Send Message
          </button>
        </form>
      </section>

    </div>
  );
};

export default Home;
