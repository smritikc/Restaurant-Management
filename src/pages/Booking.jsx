import React, { useState } from 'react';

const Booking = () => {
  const [bookingData, setBookingData] = useState({
    name: '',
    email: '',
    guests: '',
    date: '',
    roomType: ''
  });
  
  const [errors, setErrors] = useState({});
  const [bookings, setBookings] = useState([]);
  const [showSuccess, setShowSuccess] = useState(false);

  const handleChange = (e) => {
    const { name, value } = e.target;
    setBookingData({
      ...bookingData,
      [name]: value
    });
    
    // Clear error when user starts typing
    if (errors[name]) {
      setErrors({
        ...errors,
        [name]: ''
      });
    }
  };

  const validateBooking = () => {
    const newErrors = {};
    
    // Name validation
    if (!bookingData.name.trim()) {
      newErrors.name = 'Name is required';
    } else if (bookingData.name.length < 2) {
      newErrors.name = 'Name must be at least 2 characters';
    }
    
    // Email validation
    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    if (!bookingData.email) {
      newErrors.email = 'Email is required';
    } else if (!emailRegex.test(bookingData.email)) {
      newErrors.email = 'Please enter a valid email address';
    }
    
    // Guests validation
    if (!bookingData.guests) {
      newErrors.guests = 'Number of guests is required';
    } else if (parseInt(bookingData.guests) < 1 || parseInt(bookingData.guests) > 20) {
      newErrors.guests = 'Number of guests must be between 1 and 20';
    }
    
    // Date validation
    if (!bookingData.date) {
      newErrors.date = 'Date is required';
    } else {
      const selectedDate = new Date(bookingData.date);
      const today = new Date();
      today.setHours(0, 0, 0, 0);
      
      if (selectedDate < today) {
        newErrors.date = 'Booking date cannot be in the past';
      }
    }
    
    // Room type validation
    if (!bookingData.roomType) {
      newErrors.roomType = 'Please select a room type';
    }
    
    return newErrors;
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    
    const validationErrors = validateBooking();
    
    if (Object.keys(validationErrors).length > 0) {
      setErrors(validationErrors);
      
      // Show alert for first error
      const firstError = Object.values(validationErrors)[0];
      alert(`Booking Error: ${firstError}`);
      
      return;
    }
    
    // Create new booking
    const newBooking = {
      id: Date.now(),
      name: bookingData.name,
      email: bookingData.email,
      guests: bookingData.guests,
      date: new Date(bookingData.date).toLocaleDateString('en-US', {
        weekday: 'short',
        year: 'numeric',
        month: 'short',
        day: 'numeric'
      }),
      roomType: bookingData.roomType,
      bookingTime: new Date().toLocaleString(),
      status: 'Confirmed'
    };
    
    // Add to bookings list
    setBookings([newBooking, ...bookings]);
    
    // Show success message
    setShowSuccess(true);
    setTimeout(() => setShowSuccess(false), 3000);
    
    // Reset form
    setBookingData({
      name: '',
      email: '',
      guests: '',
      date: '',
      roomType: ''
    });
    setErrors({});
    
    // Success alert
    alert(`Booking Confirmed! Thank you ${bookingData.name}. Your ${bookingData.roomType} room for ${bookingData.guests} guests on ${newBooking.date} has been reserved.`);
  };

  const roomTypes = [
    { value: '', label: 'Select Room Type' },
    { value: 'standard', label: 'Standard Table (₹1000)' },
    { value: 'deluxe', label: 'Deluxe Table (₹2000)' },
    { value: 'suite', label: 'Private Suite (₹5000)' },
    { value: 'family', label: 'Family Section (₹3000)' },
    { value: 'outdoor', label: 'Outdoor Seating (₹1500)' }
  ];

  const getRoomPrice = (type) => {
    switch(type) {
      case 'standard': return '₹1000';
      case 'deluxe': return '₹2000';
      case 'suite': return '₹5000';
      case 'family': return '₹3000';
      case 'outdoor': return '₹1500';
      default: return '₹0';
    }
  };

  return (
    <section className="max-w-4xl mx-auto py-12 px-4">
      <h2 className="text-3xl font-bold mb-2 text-center text-gray-800">Room & Table Booking</h2>
      <p className="text-center text-gray-600 mb-8">Reserve your perfect dining experience</p>
      
      {/* Success Message */}
      {showSuccess && (
        <div className="mb-6 p-4 bg-green-100 text-green-800 rounded-lg text-center animate-fadeIn">
          ✅ Booking Confirmed! Check your email for details.
        </div>
      )}
      
      <form onSubmit={handleSubmit} className="flex flex-col gap-4 bg-white p-6 rounded-lg shadow-lg">
        <div>
          <input 
            type="text" 
            name="name"
            placeholder="Full Name" 
            value={bookingData.name}
            onChange={handleChange}
            className={`p-3 border rounded w-full focus:ring-2 focus:ring-red-500 ${errors.name ? 'border-red-500' : ''}`}
          />
          {errors.name && <p className="text-red-500 text-sm mt-1">{errors.name}</p>}
        </div>
        
        <div>
          <input 
            type="email" 
            name="email"
            placeholder="Email Address" 
            value={bookingData.email}
            onChange={handleChange}
            className={`p-3 border rounded w-full focus:ring-2 focus:ring-red-500 ${errors.email ? 'border-red-500' : ''}`}
          />
          {errors.email && <p className="text-red-500 text-sm mt-1">{errors.email}</p>}
        </div>
        
        <div>
          <input 
            type="number" 
            name="guests"
            placeholder="Number of Guests" 
            value={bookingData.guests}
            onChange={handleChange}
            min="1"
            max="20"
            className={`p-3 border rounded w-full focus:ring-2 focus:ring-red-500 ${errors.guests ? 'border-red-500' : ''}`}
          />
          {errors.guests && <p className="text-red-500 text-sm mt-1">{errors.guests}</p>}
        </div>
        
        <div>
          <input 
            type="date" 
            name="date"
            value={bookingData.date}
            onChange={handleChange}
            className={`p-3 border rounded w-full focus:ring-2 focus:ring-red-500 ${errors.date ? 'border-red-500' : ''}`}
          />
          {errors.date && <p className="text-red-500 text-sm mt-1">{errors.date}</p>}
        </div>
        
        <div>
          <select 
            name="roomType"
            value={bookingData.roomType}
            onChange={handleChange}
            className={`p-3 border rounded w-full focus:ring-2 focus:ring-red-500 ${errors.roomType ? 'border-red-500' : ''}`}
          >
            {roomTypes.map((room, index) => (
              <option key={index} value={room.value}>
                {room.label}
              </option>
            ))}
          </select>
          {errors.roomType && <p className="text-red-500 text-sm mt-1">{errors.roomType}</p>}
        </div>
        
        <button 
          type="submit" 
          className="bg-red-500 text-white py-3 rounded-lg hover:bg-red-600 transition font-semibold text-lg"
        >
          Book Now
        </button>
      </form>

      {/* Booking Summary */}
      {bookingData.roomType && (
        <div className="mt-6 p-4 bg-blue-50 rounded-lg">
          <h3 className="font-bold text-lg mb-2">Booking Summary:</h3>
          <p><span className="font-medium">Room Type:</span> {roomTypes.find(r => r.value === bookingData.roomType)?.label}</p>
          <p><span className="font-medium">Price:</span> {getRoomPrice(bookingData.roomType)}</p>
          {bookingData.guests && <p><span className="font-medium">Total for {bookingData.guests} guests:</span> ₹{parseInt(bookingData.guests) * parseInt(getRoomPrice(bookingData.roomType).replace('₹', ''))}</p>}
        </div>
      )}

      {/* Bookings Table */}
      {bookings.length > 0 && (
        <div className="mt-12">
          <h3 className="text-2xl font-bold mb-4 text-gray-800">Recent Bookings</h3>
          <div className="overflow-x-auto rounded-lg shadow">
            <table className="min-w-full bg-white">
              <thead className="bg-gray-800 text-white">
                <tr>
                  <th className="py-3 px-4 text-left">Booking ID</th>
                  <th className="py-3 px-4 text-left">Name</th>
                  <th className="py-3 px-4 text-left">Guests</th>
                  <th className="py-3 px-4 text-left">Date</th>
                  <th className="py-3 px-4 text-left">Room Type</th>
                  <th className="py-3 px-4 text-left">Status</th>
                </tr>
              </thead>
              <tbody>
                {bookings.map((booking) => (
                  <tr key={booking.id} className="border-b hover:bg-gray-50">
                    <td className="py-3 px-4 font-mono text-sm">#{booking.id.toString().slice(-6)}</td>
                    <td className="py-3 px-4">{booking.name}</td>
                    <td className="py-3 px-4 text-center">{booking.guests}</td>
                    <td className="py-3 px-4">{booking.date}</td>
                    <td className="py-3 px-4">
                      <span className={`px-2 py-1 rounded-full text-xs ${
                        booking.roomType === 'suite' ? 'bg-purple-100 text-purple-800' :
                        booking.roomType === 'deluxe' ? 'bg-blue-100 text-blue-800' :
                        booking.roomType === 'family' ? 'bg-green-100 text-green-800' :
                        'bg-gray-100 text-gray-800'
                      }`}>
                        {booking.roomType.charAt(0).toUpperCase() + booking.roomType.slice(1)}
                      </span>
                    </td>
                    <td className="py-3 px-4">
                      <span className="px-2 py-1 bg-green-100 text-green-800 rounded-full text-xs">
                        {booking.status}
                      </span>
                    </td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
          <p className="text-sm text-gray-500 mt-2">Showing {bookings.length} booking{bookings.length !== 1 ? 's' : ''}</p>
        </div>
      )}
    </section>
  );
};

export default Booking;