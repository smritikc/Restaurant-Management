import React from 'react';

const Menu = () => {
  return (
    <section className="max-w-6xl mx-auto py-16 px-4">
      <h2 className="text-3xl font-bold text-center mb-12">Our Menu</h2>

      {/* Two-column layout */}
      <div className="flex flex-col md:flex-row gap-8">

        {/* Left side - 4 small food photos */}
        <div className="flex flex-col gap-4 md:w-1/3">
          <img src="/food1.jpg" alt="Food 1" className="w-full object-cover rounded-lg shadow-md hover:scale-105 transition"/>
          <img src="/food2.jpg" alt="Food 2" className="w-full object-cover rounded-lg shadow-md hover:scale-105 transition"/>
          <img src="/food4.jpg" alt="Food 4" className="w-full object-cover rounded-lg shadow-md hover:scale-105 transition"/>
        </div>

        {/* Right side - large menu photo */}
        <div className="md:w-2/3">
          <img src="/menu.jpg" alt="Main Menu" className="w-full object-cover rounded-lg shadow-lg"/>
        </div>

      </div>
    </section>
  );
};

export default Menu;
