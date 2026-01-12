import React from "react";
import image from "../assets/card/f8c1a514ee7de31c9e91d6714a9987e89ce78c63 (1).jpg";
import { PiButterflyLight } from "react-icons/pi";
import { NavLink } from "react-router";

const Banner = () => {
  return (
    <div>
      <div className="relative min-h-screen px-4 pt-14 md:pt-20  flex items-center justify-center  md:pb-12 overflow-hidden">
        {/* Background Decorative Elements */}
        <div className="absolute top-10 left-[40%] text-green-400 opacity-60 animate-pulse">
          <PiButterflyLight className="text-8xl rotate-10" />
        </div>

        <div className="container mx-auto grid grid-cols-1 md:grid-cols-2 gap-8 items-center max-w-7xl">
          {/* Left Side Content */}
          <div className="space-y-6 z-10 md:pl-12">
            <h1 className="text-4xl md:text-6xl font-bold text-black leading-tight">
              Welcome to <span className="block">Greenify</span>
            </h1>

            <div className="space-y-2">
              <h2 className="text-3xl md:text-4xl font-light text-gray-800">
                Your Sustainable
              </h2>
              <h2 className="text-4xl md:text-5xl font-extrabold text-green-600 uppercase tracking-wide">
                Shopping <br /> Destination
              </h2>
            </div>

            <p className="text-gray-600 italic text-sm md:text-base max-w-md border-l-2 border-green-500 pl-4">
              "Discover Sustainability. Embrace Greenify. <br />
              Your Eco-Friendly Haven for Conscious Shopping."
            </p>

            <NavLink
              to="/shop"
              className="bg-green-600  hover:bg-green-700 text-white font-bold cursor-pointer py-3 px-10 rounded-md shadow-lg transition duration-300 uppercase text-sm tracking-widest"
            >
              Shop Now
            </NavLink>
            {/* Small Butterfly Icon below button */}
            <div className="text-green-300 ml-20">
              <PiButterflyLight className="text-8xl rotate-10" />
            </div>
          </div>

          {/* Right Side Image Box */}
          <div className="relative flex justify-center items-center">
            {/* Outer Border/Frame */}
            <div className="absolute -inset-4 border-l-2 border-b-2 border-black rounded-bl-3xl transform translate-x-4 translate-y-4 hidden md:block"></div>

            {/* Main Green Container */}
            <div className="relative md:ml-3 bg-green-500 p-4 md:p-8 rounded-3xl shadow-2xl z-10 overflow-hidden">
              {/* Inner White/Grey Rounded Image Area */}
              <div className="bg-gray-100 rounded-2xl overflow-hidden aspect-[4/5] flex items-center justify-center relative">
                <img
                  src={image}
                  alt="Sustainable Bag"
                  className="w-full h-full object-cover object-center"
                />
                {/* Overlay Leaf Pattern at bottom */}
                <div className="absolute bottom-0 left-0 right-0 h-24 bg-gradient-to-t from-green-600/40 to-transparent pointer-events-none"></div>
              </div>
            </div>

            {/* Floating Leaf at bottom left of image */}
            <div className="absolute -bottom-6 -left-6 w-24 h-24 bg-green-200 rounded-full blur-2xl opacity-50"></div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Banner;
