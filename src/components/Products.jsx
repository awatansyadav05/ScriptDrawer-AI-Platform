import React from 'react';
import ProductCard from './ProductCard';
import web from "../assets/web.webp"
import web1 from "../assets/talkingheadvideos.webp"

const Products = () => {
  return (
    <section className="pt-12 sm:pt-80 md:pt-100 lg:pt-120 py-16 bg-gray-50 relative z-10">
      <div className="max-w-6xl mx-auto px-6 text-center">
        <h2 className="text-2xl sm:text-3xl lg:text-4xl font-bold mb-4">Our Products</h2>
        <p className="text-sm sm:text-base lg:text-lg text-gray-600 mb-8 max-w-3xl mx-auto">Your Go-To <strong>AI Video Maker</strong> for Effortless Content Creation</p>
        <div className="mt-10 grid grid-cols-1 md:grid-cols-2 gap-8 text-left">
          <ProductCard
            image={web}
            title="ScriptDrawer"
            description={
              <>
                ScriptDrawer is the AI company website for the students and the office going people and scriptdrawer is the AI... <span className='italic semi-bold cursor-pointer ' >readmore </span>
              </>
            }
          />
          <ProductCard
            image={web1}
            title="Services"
            bgColor="bg-blue-100"
            description={
              <>
                Services include images and text to video and text to image and the more common text to AI image converter....

              </>
            }

          />
        </div>
      </div>
    </section>
  );
};

export default Products;