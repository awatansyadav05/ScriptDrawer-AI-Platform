import React from 'react';
import Navbar from '../components/Navbar';
import Hero from '../components/Hero';
import Products from '../components/Products';
import Services from '../components/Services';
import MainLayout from '../layouts/mainlayout';


const Home = () => {
  return (
    <MainLayout>
      <div className="relative">
        <Hero />
        <Navbar />
      </div>
      <Products />
      <Services />
    </MainLayout>
  );
};

export default Home;