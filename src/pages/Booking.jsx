import React from 'react';

const Booking = () => {
  return (
    <section className="max-w-3xl mx-auto py-12 px-4">
      <h2 className="text-2xl font-bold mb-6 text-center">Room & Table Booking</h2>
      <form className="flex flex-col gap-4">
        <input type="text" placeholder="Name" className="p-3 border rounded"/>
        <input type="email" placeholder="Email" className="p-3 border rounded"/>
        <input type="number" placeholder="Number of Guests" className="p-3 border rounded"/>
        <input type="date" className="p-3 border rounded"/>
        <select className="p-3 border rounded">
          <option value="">Select Room Type</option>
          <option value="standard">Standard</option>
          <option value="deluxe">Deluxe</option>
          <option value="suite">Suite</option>
        </select>
        <button className="bg-red-500 text-white py-3 rounded hover:bg-red-600">Book Now</button>
      </form>
    </section>
  );
};

export default Booking;
