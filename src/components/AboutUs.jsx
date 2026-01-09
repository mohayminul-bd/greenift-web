import React from "react";
import { FaLeaf } from "react-icons/fa";
import { IoMdClose } from "react-icons/io";

const AboutUs = () => {
  return (
    <section className="relative min-h-[600px] flex items-center justify-center overflow-hidden py-16 px-4">
      {/* Background Image with Overlay */}
      <div className="absolute inset-0 z-0">
        <img
          src="https://images.unsplash.com/photo-1542601906990-b4d3fb778b09?auto=format&fit=crop&q=80&w=1600"
          alt="Eco Team"
          className="w-full h-full object-cover opacity-30 grayscale-[50%]"
        />
        <div className="absolute inset-0 bg-white/40 backdrop-blur-[2px]"></div>
      </div>

      {/* Decorative Icons */}
      <div className="absolute top-10 right-10 text-green-500 opacity-60 animate-pulse">
        <svg width="60" height="60" viewBox="0 0 24 24" fill="currentColor">
          <path d="M12 10c-1.1-2.48-3.5-4-5.5-4C3.5 6 2 8 2 10.5c0 4 4.5 7.5 10 11.5 5.5-4 10-7.5 10-11.5 0-2.5-1.5-4.5-4.5-4.5-2 0-4.4 1.52-5.5 4Z" />
        </svg>
      </div>

      <div className="absolute bottom-5 left-5 text-green-600 opacity-40">
        <FaLeaf size={80} />
      </div>

      {/* Content Container */}
      <div className="relative z-10 max-w-4xl w-full text-center space-y-8">
        <h2 className="text-4xl font-bold text-gray-800">About us</h2>

        {/* Logo Box */}
        <div className="flex justify-center">
          <div className="bg-white px-8 py-3 rounded-lg shadow-sm border border-gray-100">
            <h1 className="text-3xl font-bold text-green-600 flex items-center gap-1">
              Gr<span className="text-green-500">ee</span>nify
            </h1>
          </div>
        </div>

        {/* Text Content */}
        <div className="space-y-6 text-gray-700 leading-relaxed px-4">
          <p className="text-sm md:text-base font-medium">
            At Greenify, we are more than just an e-commerce website; we are a
            passionate community dedicated to fostering a sustainable and
            eco-friendly lifestyle. Our mission is to empower environmentally
            conscious consumers by offering a curated selection of high-quality,
            sustainable products that inspire positive change and make a
            difference in the world.
          </p>

          <div>
            <h3 className="text-xl font-bold text-gray-800 mb-2">
              Mission Statement
            </h3>
            <p className="text-sm md:text-base italic">
              "To be the leading platform for sustainable living, providing
              eco-friendly products and fostering a green community that
              promotes conscious consumption and environmental responsibility."
            </p>
          </div>

          <div>
            <h3 className="text-xl font-bold text-gray-800 mb-2">
              Vision Statement
            </h3>
            <p className="text-sm md:text-base italic">
              "To create a greener future for generations to come, where every
              choice matters, and sustainability is at the core of everyday
              living. We envision a world where eco-friendly practices are the
              norm, and together, we can make a significant impact on the health
              of our planet."
            </p>
          </div>
        </div>

        {/* Read More Button */}
        <div className="pt-4">
          <button className="bg-green-500 hover:bg-green-600 text-white font-bold py-3 px-12 rounded shadow-lg transition-all uppercase tracking-widest text-sm">
            Read More
          </button>
        </div>
      </div>
    </section>
  );
};

export default AboutUs;
