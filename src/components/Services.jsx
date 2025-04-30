import React from 'react';
import servicesImg from '../assets/images.png';

const Services = () => {
  return (
    <section className="py-16 bg-white">
      <div className="max-w-6xl mx-auto px-4">
        <div className="bg-blue-400 rounded-xl overflow-hidden flex flex-col md:flex-row">
          <img src={servicesImg} alt="Services" className="w-full md:w-1/2 h-64 object-cover" />
          <div className="p-6 text-white md:w-1/2">
            <h3 className="text-2xl font-bold mb-4">Services</h3>
            <p className="text-sm">
              Services include images and text to video and text to image and the more common text to AI image converter...read more
            </p>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Services;