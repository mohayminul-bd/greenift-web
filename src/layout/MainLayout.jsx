import React from "react";
import { Outlet } from "react-router";
import Navbar from "../components/Navbar";
import Footer from "../components/Footer";

const MainLayout = () => {
  return (
    <div>
      <div className="fixed w-full z-50 pb-22">
        <Navbar />
      </div>
      <div className="min-h-screen bg-white pt-10">
        <div className="max-w-[1280px] mx-auto ">
          <Outlet />
        </div>
      </div>
      <Footer />
    </div>
  );
};

export default MainLayout;
