import React from "react";
import mobile from "../assets/mobile.webp";
import laptop from "../assets/laptop.png";

const Pcsection = () => {
  return (
    <section className="py-20 bg-gray-100">
        <div class  Name="max-w-screen-xl mx-auto">

            {/* PC Section */}
        <div className="flex flex-col md:flex-row justify-center items-center md:space-x-8 mt-8">
          <div className="md:w-1/2 flex justify-center items-center">
            <div className="relative transform transition-transform duration-700 ease-out hover:-rotate-6">
              <img src={laptop} alt="Laptop" className="w-72 md:w-96" />
            </div>
          </div>
        </div>
        </div>
    </section>
  );
};

export default Pcsection;
