import React from 'react';
import ProductCard from './ProductCard';
import product1 from '../assets/Scriptdrawer.png';

const Products = () => {
  return (
    <section className="pt-44 md:pt-70 py-16 bg-gray-50 relative z-10">
      <div className="max-w-6xl mx-auto px-4 text-center">
        <h2 className="text-3xl font-bold">Our Products</h2>
        <p className="mt-2 text-gray-600">Your Go-To <strong>AI Video Maker</strong> for Effortless Content Creation</p>
        <div className="mt-10 grid grid-cols-1 md:grid-cols-2 gap-8">
          <ProductCard
            image={product1}
            title="ScriptDrawer"
            description="ScriptDrawer is the AI company website for the students and the office going people and scriptdrawer is the AI..."
          />
        </div>
      </div>
    </section>
  );
};

export default Products;