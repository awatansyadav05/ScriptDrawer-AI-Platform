import React from 'react';

const ProductCard = ({ image, title, description }) => {
  return (
    <div className="bg-white rounded-xl shadow-md overflow-hidden">
      <img src={image} alt={title} className="w-full h-64 object-cover" />
      <div className="p-4">
        <h3 className="text-xl font-bold mb-2">{title}</h3>
        <p className="text-gray-600 text-sm">{description}</p>
      </div>
    </div>
  );
};

export default ProductCard;
