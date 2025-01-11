import React from 'react'
import mobile from '../assets/mobile.webp';
import laptop from '../assets/laptop.png';
const DeviceSection = () => {
  return (
    <>
    
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
          {/* <div className="relative transform-gpu transition-transform duration-700 ease-out hover:scale-105 hover:translate-x-4 hover:translate-y-4">
            <img
              src={laptop}
              alt="Laptop"
              className="w-72 md:w-96"
            />
          </div> */}
        </div>
    </>
  )
}

export default DeviceSection