import React, { useState } from "react";
import { HiOutlineShoppingBag } from "react-icons/hi";
import { NavLink, Link } from "react-router";
import user from "../assets/blog/user.png";

const Navbar = () => {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  const navLinks = (
    <>
      <li>
        <NavLink
          to="/"
          className={({ isActive }) =>
            isActive ? "text-primary font-semibold" : "font-medium"
          }
          onClick={() => setMobileMenuOpen(false)}
        >
          Home
        </NavLink>
      </li>
      <li>
        <NavLink
          to="/shop"
          className={({ isActive }) =>
            isActive ? "text-primary font-semibold" : "font-medium"
          }
          onClick={() => setMobileMenuOpen(false)}
        >
          Shop
        </NavLink>
      </li>

      <li>
        <details>
          <summary className="font-medium cursor-pointer">Categories</summary>
          <ul className="p-2 bg-base-100 rounded-box w-40 mt-2">
            <li onClick={() => setMobileMenuOpen(false)}>
              <NavLink to="/products/perfume">Perfume</NavLink>
            </li>
            <li onClick={() => setMobileMenuOpen(false)}>
              <NavLink to="/products/attar">Attar</NavLink>
            </li>
          </ul>
        </details>
      </li>

      <li>
        <NavLink
          to="/about"
          className={({ isActive }) =>
            isActive ? "text-primary font-semibold" : "font-medium"
          }
          onClick={() => setMobileMenuOpen(false)}
        >
          About
        </NavLink>
      </li>

      <li>
        <NavLink
          to="/contact"
          className={({ isActive }) =>
            isActive ? "text-primary font-semibold" : "font-medium"
          }
          onClick={() => setMobileMenuOpen(false)}
        >
          Contact
        </NavLink>
      </li>
    </>
  );

  return (
    <nav className=" shadow-md px-4 md:px-12 bg-green-400  ">
      <div className="max-w-7xl mx-auto h-16 flex items-center justify-between">
        {/* LEFT - Mobile Hamburger & Logo */}
        <div className="flex items-center lg:hidden gap-4">
          <button
            className="btn btn-ghost"
            onClick={() => setMobileMenuOpen(true)}
          >
            <svg
              xmlns="http://www.w3.org/2000/svg"
              className="h-6 w-6"
              fill="none"
              viewBox="0 0 24 24"
              stroke="currentColor"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth="2"
                d="M4 6h16M4 12h16M4 18h16"
              />
            </svg>
          </button>
          <Link to="/" className="text-2xl font-bold text-black ">
            Greenify
          </Link>
        </div>

        {/* LEFT - Desktop Logo */}
        <div className="hidden lg:flex">
          <Link to="/" className="text-2xl font-bold text-black">
            Greenify
          </Link>
        </div>

        {/* CENTER - Menu (Desktop) */}
        <div className="hidden lg:flex">
          <ul className="menu menu-horizontal gap-6">{navLinks}</ul>
        </div>

        {/* RIGHT - Auth Buttons */}
        <div className="flex gap-2">
          <Link
            to="/my-booking"
            className="  text-3xl p-1 rounded-full hover:bg-blue-800  hover:text-white"
          >
            <HiOutlineShoppingBag />
          </Link>
          <Link to="/login" className="rounded-full">
            <img className="w-9  rounded-full " src={user} alt="" />
          </Link>
        </div>
      </div>

      {/* Mobile Sidebar */}
      {mobileMenuOpen && (
        <div className="fixed inset-0 z-50 flex">
          <div className="w-64 bg-base-100 h-full p-6 shadow-lg animate-slide-in">
            <div className="flex justify-between items-center mb-6">
              <Link to="/" className="text-2xl font-bold text-primary">
                Greenify
              </Link>
              <button
                className="btn btn-ghost"
                onClick={() => setMobileMenuOpen(false)}
              >
                ✕
              </button>
            </div>

            <ul className="menu flex flex-col gap-3">{navLinks}</ul>
          </div>

          <div
            className="flex-1 bg-black bg-opacity-50"
            onClick={() => setMobileMenuOpen(false)}
          />
        </div>
      )}

      <style>
        {`
          @keyframes slide-in {
            from { transform: translateX(-100%); }
            to { transform: translateX(0); }
          }
          .animate-slide-in {
            animation: slide-in 0.3s ease-out forwards;
          }
        `}
      </style>
    </nav>
  );
};

export default Navbar;
