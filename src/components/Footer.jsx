import React from "react";
import {
  FaFacebookF,
  FaInstagram,
  FaLinkedinIn,
  FaTwitter,
  FaPhoneAlt,
  FaRegEnvelope,
} from "react-icons/fa";
import sub from "../assets/sub.jpg";
import { IoLocationOutline } from "react-icons/io5";

const Footer = () => {
  return (
    <footer className="bg-[#2C2C2C] text-white py-16 px-6 relative overflow-hidden">
      <section className="bg-[#2C2C2C] py-20 px-4 relative overflow-hidden">
        {/* Decorative Background Elements */}
        <div className="absolute top-0 left-0 w-32 h-32 opacity-20">
          <img
            src="https://cdn-icons-png.flaticon.com/512/188/188333.png"
            alt="leaf"
            className="w-full rotate-45"
          />
        </div>
        <div className="absolute bottom-[-50px] right-[-50px] w-64 h-64 bg-green-500/20 rounded-full blur-3xl"></div>

        {/* Globe Decoration */}
        <div className="absolute bottom-10 right-10 w-40 h-40 opacity-40 hidden md:block">
          <svg viewBox="0 0 200 200" fill="#5CB36D">
            <path d="M100,0C44.8,0,0,44.8,0,100s44.8,100,100,100s100-44.8,100-100S155.2,0,100,0z M100,180c-44.1,0-80-35.9-80-80 s35.9-80,80-80s80,35.9,80,80S144.1,180,100,180z M110,50h-20v100h20V50z M50,90v20h100V90H50z" />
          </svg>
        </div>

        <div className="container mx-auto max-w-5xl relative z-10">
          {/* Main Card */}
          <div className="bg-white rounded-[2.5rem] overflow-hidden shadow-2xl flex flex-col md:flex-row items-stretch min-h-[450px]">
            {/* Left Side: Product Image */}
            <div className="md:w-5/12 relative">
              <img
                src={sub}
                alt="Eco Friendly Products"
                className="w-full h-full object-cover "
              />
              {/* Overlay Gradient for Image */}
              <div className="absolute inset-0 bg-black/5 md:hidden"></div>
            </div>

            {/* Right Side: Form Content */}
            <div className="md:w-7/12 p-8 md:p-16 flex flex-col justify-center text-center">
              <h2 className="text-2xl md:text-3xl font-bold text-gray-800 mb-4 italic">
                "Subscribe to our Newsletter"
              </h2>
              <p className="text-gray-600 text-sm md:text-base mb-10 leading-relaxed">
                Join our green community and receive exclusive offers and
                insightful content straight to your inbox!
              </p>

              <form className="space-y-6 max-w-sm mx-auto w-full">
                <div className="relative border-b-2 border-gray-300 focus-within:border-green-500 transition-colors">
                  <input
                    type="text"
                    placeholder="Enter your name"
                    className="w-full py-3 bg-transparent outline-none text-gray-700 placeholder-gray-400"
                    required
                  />
                </div>

                <div className="relative border-b-2 border-gray-300 focus-within:border-green-500 transition-colors">
                  <input
                    type="email"
                    placeholder="Enter your e-mail"
                    className="w-full py-3 bg-transparent outline-none text-gray-700 placeholder-gray-400"
                    required
                  />
                </div>

                <div className="pt-6">
                  <button
                    type="submit"
                    className="bg-[#5CB36D] hover:bg-[#4a9459] text-white font-bold py-3 px-12 rounded-lg shadow-lg transition-all uppercase tracking-widest text-sm active:scale-95"
                  >
                    Subscribe
                  </button>
                </div>
              </form>
            </div>
          </div>
        </div>
      </section>
      {/* Background Decoration (Globe) */}
      <div className="absolute top-[-50px] right-[-50px] w-64 h-64 opacity-20 pointer-events-none">
        <svg viewBox="0 0 200 200" fill="#5CB36D">
          <path d="M100,0C44.8,0,0,44.8,0,100s44.8,100,100,100s100-44.8,100-100S155.2,0,100,0z M100,180c-44.1,0-80-35.9-80-80 s35.9-80,80-80s80,35.9,80,80S144.1,180,100,180z M110,50h-20v100h20V50z M50,90v20h100V90H50z" />
        </svg>
      </div>

      <div className="container mx-auto max-w-6xl relative z-10">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-12">
          {/* Column 1: Logo & Links */}
          <div className="space-y-8">
            {/* Logo Wrapper */}
            <div className="bg-white inline-block px-6 py-2 rounded-lg shadow-sm">
              <h1 className="text-2xl font-bold text-green-600 flex items-center gap-1">
                Gr<span className="text-green-500">ee</span>nify
              </h1>
            </div>

            <div className="space-y-4">
              <h3 className="text-xl font-bold mb-4">Pages</h3>
              <nav className="flex flex-wrap gap-x-6 gap-y-2 text-gray-300 text-sm">
                <a href="#" className="hover:text-green-400 transition-colors">
                  Home
                </a>
                <a href="#" className="hover:text-green-400 transition-colors">
                  Shop
                </a>
                <a href="#" className="hover:text-green-400 transition-colors">
                  Categories
                </a>
                <a href="#" className="hover:text-green-400 transition-colors">
                  About us
                </a>
                <a href="#" className="hover:text-green-400 transition-colors">
                  Contact us
                </a>
              </nav>
            </div>

            {/* Social Icons */}
            <div className="flex gap-4">
              {[FaFacebookF, FaInstagram, FaLinkedinIn, FaTwitter].map(
                (Icon, index) => (
                  <a
                    key={index}
                    href="#"
                    className="w-10 h-10 rounded-full border border-gray-500 flex items-center justify-center hover:bg-green-500 hover:border-green-500 transition-all text-white"
                  >
                    <Icon size={18} />
                  </a>
                )
              )}
            </div>
          </div>

          {/* Column 2: Empty space for center (As per Image) */}
          <div className="hidden lg:block"></div>

          {/* Column 3: Contact Us */}
          <div className="space-y-6">
            <h3 className="text-xl font-bold">Contact us</h3>
            <ul className="space-y-4 text-gray-300 text-sm">
              <li className="flex items-center gap-4">
                <FaPhoneAlt className="text-white" size={18} />
                <span>+91 123456789</span>
              </li>
              <li className="flex items-center gap-4">
                <FaRegEnvelope className="text-white" size={18} />
                <span>info@greenify.com</span>
              </li>
              <li className="flex items-start gap-4">
                <IoLocationOutline className="text-white shrink-0" size={22} />
                <span>
                  102-Complex, Xyz Road
                  <br />
                  City name, State, 136458
                </span>
              </li>
            </ul>
          </div>
        </div>

        {/* Bottom Bar */}
        <div className="mt-16 pt-8 border-t border-gray-700 flex flex-col md:flex-row justify-between items-center gap-4 text-xs text-gray-500">
          <p className="hover:text-white cursor-pointer uppercase tracking-widest">
            Terms & Services
          </p>
          <p>Greenify @ All Rights Reserved 2023</p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
