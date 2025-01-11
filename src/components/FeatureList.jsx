import React from 'react';

function FeatureList() {
  return (
    <section className="py-16 px-4 bg-gray-100 text-center">
      <h2 className="text-3xl font-semibold mb-8">Our Features</h2>
      <div className="flex flex-wrap justify-center gap-8">
        <div className="w-80 bg-white shadow-md p-6 rounded-lg">
          <h3 className="text-xl font-semibold mb-4">Fresh Ingredients</h3>
          <p>We use only the freshest ingredients for every dish.</p>
        </div>
        <div className="w-80 bg-white shadow-md p-6 rounded-lg">
          <h3 className="text-xl font-semibold mb-4">Fast Delivery</h3>
          <p>Your food is delivered to your door within 30 minutes!</p>
        </div>
        <div className="w-80 bg-white shadow-md p-6 rounded-lg">
          <h3 className="text-xl font-semibold mb-4">Healthy Options</h3>
          <p>Choose from a variety of healthy and nutritious meals.</p>
        </div>
      </div>
    </section>
  );
}

export default FeatureList;
