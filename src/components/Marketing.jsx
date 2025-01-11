import React from 'react';
import { FaApple, FaGooglePlay } from 'react-icons/fa';
import laptop from '../assets/laptop.png';
import mobile from '../assets/mobile.webp';

function Marketing() {
  return (
    <section className="py-20 bg-gray-100">
      <div className="max-w-screen-xl mx-auto flex flex-col md:flex-row items-center justify-between px-6">
        {/* Text and Buttons Section */}
        <div className="md:w-1/2 mb-10 md:mb-0 text-center md:text-left">
          <h1 className="text-4xl font-semibold mb-4">Install the App</h1>
          <p className="text-lg mb-6">
            It's never been easier to order food. Look for the finest discounts, and you'll be lost in a
            world of delectable food.
          </p>
          <div className="flex flex-col md:flex-row space-y-4 md:space-y-0 md:space-x-4">
            <button className="flex items-center justify-center px-6 py-3 bg-black text-white rounded-md shadow-md hover:bg-gray-800 transition">
              <FaApple className="mr-2" /> Download on the App Store
            </button>
            <button className="flex items-center justify-center px-6 py-3 bg-black text-white rounded-md shadow-md hover:bg-gray-800 transition">
              <FaGooglePlay className="mr-2" /> Get it on Google Play
            </button>
          </div>
        </div>

        {/* Devices Section */}
        <div className="md:w-1/2 flex justify-center items-center space-x-8">
          {/* Mobile Device */}
          <div className="relative transform-gpu transition-transform duration-700 ease-out hover:scale-105 hover:translate-x-4 hover:translate-y-4">
            <img
              src={mobile}
              alt="Mobile"
              className="w-48 md:w-64"
            />
          </div>

          {/* PC Device */}
          <div className="relative transform-gpu transition-transform duration-700 ease-out hover:scale-105 hover:translate-x-4 hover:translate-y-4">
            <img
              src={laptop}
              alt="Laptop"
              className="w-72 md:w-96"
            />
          </div>
        </div>
      </div>
    </section>
  );
}

export default Marketing;
