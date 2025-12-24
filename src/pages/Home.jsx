import React, { useState } from 'react';
import { Link } from 'react-router-dom';

const Home = () => {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    message: ''
  });
  
  const [errors, setErrors] = useState({});
  const [submissions, setSubmissions] = useState([]);
  const [showSuccess, setShowSuccess] = useState(false);

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData({
      ...formData,
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

  const validateForm = () => {
    const newErrors = {};
    
    // Name validation
    if (!formData.name.trim()) {
      newErrors.name = 'Name is required';
    } else if (formData.name.length < 2) {
      newErrors.name = 'Name must be at least 2 characters';
    }
    
    // Email validation
    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    if (!formData.email) {
      newErrors.email = 'Email is required';
    } else if (!emailRegex.test(formData.email)) {
      newErrors.email = 'Please enter a valid email address';
    }
    
    // Message validation
    if (!formData.message.trim()) {
      newErrors.message = 'Message is required';
    } else if (formData.message.length < 10) {
      newErrors.message = 'Message must be at least 10 characters';
    }
    
    return newErrors;
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    
    const validationErrors = validateForm();
    
    if (Object.keys(validationErrors).length > 0) {
      setErrors(validationErrors);
      
      // Show alert for first error
      const firstError = Object.values(validationErrors)[0];
      alert(`Validation Error: ${firstError}`);
      
      return;
    }
    
    // Add submission to table
    const newSubmission = {
      id: Date.now(),
      name: formData.name,
      email: formData.email,
      message: formData.message,
      date: new Date().toLocaleString()
    };
    
    setSubmissions([newSubmission, ...submissions]);
    
    // Show success message
    setShowSuccess(true);
    setTimeout(() => setShowSuccess(false), 3000);
    
    // Reset form
    setFormData({ name: '', email: '', message: '' });
    setErrors({});
    
    // Optional: Show success alert
    alert('Thank you for your feedback! Your message has been submitted successfully.');
  };

  return (
    <div>
      {/* ... existing hero and photo sections ... */}

      {/* Feedback & Query Form */}
      <section className="bg-gray-50 py-16 px-4 max-w-4xl mx-auto rounded-lg shadow-lg">
        <h2 className="text-3xl font-bold mb-6 text-center text-gray-800">We'd Love to Hear From You</h2>
        <p className="text-center text-gray-600 mb-8">
          Share your thoughts, ask questions, or give feedback about your experience. Your opinion matters!
        </p>
        
        {/* Success Message Popup */}
        {showSuccess && (
          <div className="mb-6 p-4 bg-green-100 text-green-800 rounded-lg text-center animate-fadeIn">
            ✅ Thank you! Your feedback has been submitted successfully.
          </div>
        )}
        
        <form onSubmit={handleSubmit} className="flex flex-col gap-4">
          <div>
            <input 
              type="text" 
              name="name"
              placeholder="Your Name" 
              value={formData.name}
              onChange={handleChange}
              className={`p-3 border rounded w-full focus:ring-2 focus:ring-red-500 ${errors.name ? 'border-red-500' : ''}`}
            />
            {errors.name && <p className="text-red-500 text-sm mt-1">{errors.name}</p>}
          </div>
          
          <div>
            <input 
              type="email" 
              name="email"
              placeholder="Your Email" 
              value={formData.email}
              onChange={handleChange}
              className={`p-3 border rounded w-full focus:ring-2 focus:ring-red-500 ${errors.email ? 'border-red-500' : ''}`}
            />
            {errors.email && <p className="text-red-500 text-sm mt-1">{errors.email}</p>}
          </div>
          
          <div>
            <textarea 
              name="message"
              placeholder="Your Message" 
              value={formData.message}
              onChange={handleChange}
              className={`p-3 border rounded w-full h-32 focus:ring-2 focus:ring-red-500 ${errors.message ? 'border-red-500' : ''}`}
            ></textarea>
            {errors.message && <p className="text-red-500 text-sm mt-1">{errors.message}</p>}
          </div>
          
          <button 
            type="submit" 
            className="bg-red-500 text-white py-3 rounded hover:bg-red-600 transition font-semibold"
          >
            Send Message
          </button>
        </form>

        {/* Display Submitted Data in Table */}
        {submissions.length > 0 && (
          <div className="mt-12">
            <h3 className="text-2xl font-bold mb-4 text-gray-800">Recent Feedback</h3>
            <div className="overflow-x-auto">
              <table className="min-w-full bg-white border rounded-lg">
                <thead className="bg-gray-100">
                  <tr>
                    <th className="py-3 px-4 border-b text-left">S.N.</th>
                    <th className="py-3 px-4 border-b text-left">Name</th>
                    <th className="py-3 px-4 border-b text-left">Email</th>
                    <th className="py-3 px-4 border-b text-left">Message</th>
                    <th className="py-3 px-4 border-b text-left">Date</th>
                  </tr>
                </thead>
                <tbody>
                  {submissions.map((submission, index) => (
                    <tr key={submission.id} className="hover:bg-gray-50">
                      <td className="py-3 px-4 border-b">{index + 1}</td>
                      <td className="py-3 px-4 border-b">{submission.name}</td>
                      <td className="py-3 px-4 border-b">{submission.email}</td>
                      <td className="py-3 px-4 border-b max-w-xs truncate">{submission.message}</td>
                      <td className="py-3 px-4 border-b">{submission.date}</td>
                    </tr>
                  ))}
                </tbody>
              </table>
            </div>
          </div>
        )}
      </section>
    </div>
  );
};

export default Home;