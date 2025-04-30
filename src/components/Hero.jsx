import React from 'react';
import Amazon from "../assets/amazon.png"
import Truist from "../assets/truist.jpg"

const Hero = () => {
  return (
    <section className="relative bg-gradient-to-b from-[rgb(30,13,39)] to-[#0A7FC4] text-white pt-32 pb-64">
      <div className="relative z-10 max-w-6xl mx-auto px-4 text-center">
        <h1 className="text-4xl md:text-5xl font-bold">An AI Tool Beyond</h1>
        <p className="mt-4 text-lg">Script Drawer isn't just AI tool, it's that beyond of that</p>
        <button className="mt-6 px-6 py-3 cursor-pointer bg-black text-[#ffffff] font-semibold rounded-full  relative
  before:content-[''] before:absolute before:-inset-[1.5px] before:rounded-full before:z-[-1]
  before:bg-gradient-to-r before:from-[#00cfff] before:to-[#e46cff]
  hover:shadow-lg transition-all duration-200">Create Videos with AI</button>
        {/* 50,000 div */}
        <div className="mt-10 flex flex-col md:flex-row justify-center items-center gap-8">
          <div className='flex flex-col gap-y-[5px]'>
            <span className="text-3xl font-bold">50,000 </span>
            <span className="text-sm font-regular opacity-80">Users</span>
          </div>

          <div className="h-12  w-[1px] md:w-[2px] bg-slate-800 bg-opacity-50 mx-3 md:rotate-0 rotate-90 transform origin-center"></div>
          <div className="flex gap-6 text-sm opacity-70">
            <img src={Truist} alt="Truist" className="h-6" />
            <img src={Amazon} alt="Amazon" className="h-6" />
          </div>
        </div>
      </div>

      {/* Bottom Curve SVG with more rounded shape */}
      <div className="absolute bottom-0 left-0 w-full">
        <svg
          viewBox="0 0 1440 120"
          className="w-full h-24"
          preserveAspectRatio="none"
        >
          <path
            fill="#0A7FC4"
            d="M0,0 C150,80 350,0 500,40 C650,80 850,0 1000,40 C1150,80 1300,0 1440,40 L1440,120 L0,120 Z"
          ></path>
        </svg>
      </div>

      {/* Video overlapping Hero and Products */}
      <div
        className="absolute left-1/2 transform -translate-x-1/2 z-30 px-4 pt-10 w-full max-w-5xl"
      >
        <div className="aspect-[16/9] w-full shadow-2xl rounded-lg overflow-hidden border-4 border-white">
          <iframe
            className="w-full h-full"
            src="https://www.youtube.com/embed/dQw4w9WgXcQ"
            title="YouTube video"
            frameBorder="0"
            allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
            allowFullScreen
          ></iframe>
        </div>
      </div>

    </section>
  );
};

export default Hero;
