import React, { useState } from 'react';

const ProductCard = ({ image, title, description }) => {
  const [showModal , setShowModal] = useState(false);
  return (
    <>
    <div className="bg-white rounded-3xl shadow-md overflow-hidden transition-transform duration-700 ease-in-out transform hover:scale-105 ">
      <img src={image} alt={title} className="w-full h-100 object-full bg-blue-900" />
      <div className="p-4">
        <h3 className="text-xl font-bold mb-2">{title}</h3>
        <p className="text-gray-600 text-sm">{description}
            <span className='italic font-semibold text-slate-600 ml-1 cursor-pointer' onClick={()=>setShowModal(true)} > readmore  </span>
        </p>

      </div>
      
    </div>

    {/* Modal Popup */}
      {
        showModal &&(
          <div className="fixed inset-0 z-50 bg-black bg-opacity-60 flex items-center justify-center">
          <div className="bg-white p-6 rounded-xl shadow-lg max-w-md w-full relative">
            <button
              className="absolute top-2 right-3 text-xl text-gray-600 hover:text-black"
              onClick={() => setShowModal(false)}
            >
              &times;
            </button>
            <h2 className="text-lg font-bold mb-2">{title}</h2>
            <p className="text-gray-700 text-sm">
              Lorem ipsum dolor sit amet, consectetur adipiscing elit. Proin
              scelerisque nisl a nibh porttitor, vitae elementum nisl
          condimentum. Duis convallis. 
          Lorem ipsum dolor sit amet, consectetur adipiscing elit. Proin
              scelerisque nisl a nibh porttitor, vitae elementum nisl
          condimentum. Duis convallis. 
          </p>
          </div>
        </div>
        )
      }
    </>
  );
};

export default ProductCard;
