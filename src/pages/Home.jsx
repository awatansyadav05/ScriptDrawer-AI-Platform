import React from 'react';
import Navbar from '../components/Navbar';
import Hero from '../components/Hero';
import Products from '../components/Products';
import Services from '../components/Services';
import Footer from '../components/Footer';
import MainLayout from '../layouts/MainLayout.jsx';


const Home = () => {
  return (
    <MainLayout>
      <div className="relative">
        <Hero />
        <Navbar />
      </div>
      <Products />
      <Services />
      <Footer />
    </MainLayout>
  );
};

export default Home;