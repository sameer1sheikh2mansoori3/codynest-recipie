import React from 'react';

function HeroSection() {
  return (
    <section className="bg-yellow-color text-white py-20 h-[90vh]">
      <div className="max-w-screen-xl mx-auto flex flex-col md:flex-row items-center">
        {/* Text Section */}
        <div className="md:w-1/2 text-center md:text-left mb-8 md:mb-0">
          <h1 className="text-4xl md:text-5xl font-bold mb-4">
            Are you starving?
          </h1>
          <p className="text-3xl text-slate-600 font-medium  mb-6">
            Within a few clicks, find meals that are accessible near you.
          </p>
          <button className="bg-orange-color hover:bg-orange-600 text-white px-8 py-3 rounded-full text-lg font-medium">
            Order Now
          </button>
        </div>
        {/* Image Section */}
        <div className="md:w-1/2">
          <img
            src="https://themewagon.github.io/foodwagon/v1.0.0/assets/img/gallery/hero-header.png"
            alt="Food Hero"
            className="w-[80%] h-[80%]"
          />
        </div>
      </div>
    </section>
  );
}

export default HeroSection;
