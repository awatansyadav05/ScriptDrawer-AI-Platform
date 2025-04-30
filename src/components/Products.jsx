import React from 'react';
import ProductCard from './ProductCard';
import web from "../assets/web.webp"
import web1 from "../assets/talkingheadvideos.webp"

const Products = () => {
  return (
    <section className="pt-12 md:pt-40 lg:pt-60 py-16 bg-gray-50 relative z-10">
      <div className="max-w-6xl mx-auto px-4 text-center">
        <h2 className="text-3xl font-bold">Our Products</h2>
        <p className="mt-2 text-gray-600">Your Go-To <strong>AI Video Maker</strong> for Effortless Content Creation</p>
        <div className="mt-10 grid grid-cols-1 md:grid-cols-2 gap-8 text-left">
          <ProductCard
            image={web}
            title="ScriptDrawer"
            description={
              <>
               ScriptDrawer is the AI company website for the students and the office going people and scriptdrawer is the AI... 
              </>
            }
          />
          <ProductCard
        image={web1}
        title="Services"
        bgColor="bg-blue-100"
        description=  {
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