import React from "react";
import Loader from "../components/Loader";
import Banner from "../components/Banner";
import WhyChooseUs from "../components/WhyChooseUs";
import Product from "../components/Product";
import AboutUs from "../components/AboutUs";
import CustomerReviews from "../components/CustomerReviews";
import BlogSection from "../components/BlogSection";

const Home = () => {
  return (
    <div className="">
      <Banner></Banner>
      <WhyChooseUs></WhyChooseUs>
      <Product></Product>
      <AboutUs></AboutUs>
      <CustomerReviews></CustomerReviews>
      <BlogSection></BlogSection>
      <div className=" "></div>
    </div>
  );
};

export default Home;
