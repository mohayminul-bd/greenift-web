import React, { useState } from "react";
import { FaStar, FaArrowLeft, FaArrowRight } from "react-icons/fa";
import { HiOutlineEmojiHappy } from "react-icons/hi";

const CustomerReviews = () => {
  const reviews = [
    {
      id: 1,
      name: "Sarah Johnson",
      image: "https://randomuser.me/api/portraits/women/44.jpg",
      comment:
        "I absolutely love my Organic Cotton Tote Bag from Greenify! It's not only stylish but also eco-friendly. Highly recommend this sustainable accessory!",
      rating: 5,
    },
    {
      id: 2,
      name: "Mark Anderson",
      image: "https://randomuser.me/api/portraits/men/32.jpg",
      comment:
        "The Bamboo Toothbrushes from Greenify are a game-changer! The quality is outstanding, and I love the fact that they are made from renewable bamboo.",
      rating: 5,
    },
    {
      id: 3,
      name: "Emily Lee",
      image: "https://randomuser.me/api/portraits/women/68.jpg",
      comment:
        "I recently bought the Hemp Backpack from Greenify, and I must say it's a fantastic investment. Thumbs up for the eco-conscious design!",
      rating: 5,
    },
    {
      id: 4,
      name: "John Doe",
      image: "https://randomuser.me/api/portraits/men/45.jpg",
      comment:
        "Great experience shopping here. The packaging was plastic-free and the delivery was very fast. Will buy again!",
      rating: 4,
    },
  ];

  const [activeIndex, setActiveIndex] = useState(0);

  const nextSlide = () => {
    setActiveIndex((prev) => (prev === reviews.length - 1 ? 0 : prev + 1));
  };

  const prevSlide = () => {
    setActiveIndex((prev) => (prev === 0 ? reviews.length - 1 : prev - 1));
  };

  return (
    <section className="py-20 px-4 bg-white overflow-hidden">
      <div className="container mx-auto max-w-6xl">
        <h2 className="text-3xl md:text-4xl font-bold text-center text-gray-800 mb-20">
          Customer Reviews
        </h2>

        {/* Slider Container */}
        <div className="relative h-[480px] flex items-center justify-center">
          {reviews.map((review, index) => {
            const lastIndex =
              (activeIndex - 1 + reviews.length) % reviews.length;
            const nextIndex = (activeIndex + 1) % reviews.length;

            let position = "hidden";
            let zIndex = "z-10";
            let translateX = "translate-x-0";
            let scale = "scale-100";
            let opacity = "opacity-0";

            if (index === activeIndex) {
              position = "active";
              zIndex = "z-30";
              translateX = "translate-x-0";
              scale = "scale-100";
              opacity = "opacity-100";
            } else if (index === lastIndex) {
              position = "prev";
              zIndex = "z-20";
              translateX = "-translate-x-[110%]";
              scale = "scale-90";
              opacity = "opacity-60";
            } else if (index === nextIndex) {
              position = "next";
              position;
              zIndex = "z-20";
              translateX = "translate-x-[110%]";
              scale = "scale-90";
              opacity = "opacity-60";
            }

            return (
              <article
                key={review.id}
                className={`absolute w-full max-w-[350px] transition-all duration-700 ease-in-out transform ${translateX} ${scale} ${opacity} ${zIndex}`}
              >
                <div className="bg-white border-2 border-green-200 rounded-[2.5rem] p-8 pt-12 shadow-xl flex flex-col items-center text-center relative">
                  <div className="absolute -top-10 left-1/2 -translate-x-1/2">
                    <div className="relative">
                      <img
                        src={review.image}
                        alt={review.name}
                        className="w-24 h-24 rounded-full border-4 border-white shadow-lg object-cover"
                      />
                      <div className="absolute top-1 right-1 w-5 h-5 bg-green-500 rounded-full border-2 border-white"></div>
                    </div>
                  </div>

                  <h3 className="text-xl font-bold text-gray-800 mb-4">
                    {review.name}
                  </h3>
                  <p className="text-gray-600 text-sm leading-relaxed mb-6 italic">
                    "{review.comment}"
                  </p>

                  <div className="mt-auto w-full flex justify-between items-center border-t border-gray-100 pt-4">
                    <div className="flex gap-1 text-yellow-400">
                      {[...Array(review.rating)].map((_, i) => (
                        <FaStar key={i} />
                      ))}
                    </div>
                    <HiOutlineEmojiHappy className="text-green-400 text-2xl" />
                  </div>
                </div>
              </article>
            );
          })}
        </div>

        {/* Navigation Controls */}
        <div className="flex items-center justify-center gap-8 mt-12">
          <button
            onClick={prevSlide}
            className="p-4 rounded-full bg-white shadow-lg text-gray-400 hover:text-green-600 hover:scale-110 transition-all active:scale-90"
          >
            <FaArrowLeft size={24} />
          </button>

          <div className="flex gap-3">
            {reviews.map((_, index) => (
              <div
                key={index}
                className={`h-2 rounded-full transition-all duration-300 ${
                  index === activeIndex
                    ? "w-8 bg-green-500"
                    : "w-2 bg-green-200"
                }`}
              ></div>
            ))}
          </div>

          <button
            onClick={nextSlide}
            className="p-4 rounded-full bg-white shadow-lg text-gray-400 hover:text-green-600 hover:scale-110 transition-all active:scale-90"
          >
            <FaArrowRight size={24} />
          </button>
        </div>
      </div>
    </section>
  );
};

export default CustomerReviews;
