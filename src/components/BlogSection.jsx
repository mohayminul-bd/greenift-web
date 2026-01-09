import React from "react";
import image1 from "../assets/blog/1.jpg";
import image2 from "../assets/blog/2.jpg";
import image3 from "../assets/blog/3.jpg";

const BlogSection = () => {
  const blogs = [
    {
      id: 1,
      title: "Embracing Sustainability",
      description: "The Power of Eco-Friendly Products at Greenify",
      image: image1,
    },
    {
      id: 2,
      title: "Sustainable Living Made Simple",
      description: "How Greenify Helps You Make a Difference",
      image: image2,
    },
    {
      id: 3,
      title: "Greenify's Guide to Eco-Friendly Shopping",
      description: "Reducing Your Carbon Footprint One Purchase at a Time",
      image: image3,
    },
  ];

  return (
    <section className="bg-[#5CB36D] py-16 px-4 relative overflow-hidden">
      {/* Decorative Butterflies */}
      <div className="absolute top-10 left-10 text-white/40 rotate-[-15deg]">
        <svg width="60" height="60" viewBox="0 0 24 24" fill="currentColor">
          <path d="M12 10c-1.1-2.48-3.5-4-5.5-4C3.5 6 2 8 2 10.5c0 4 4.5 7.5 10 11.5 5.5-4 10-7.5 10-11.5 0-2.5-1.5-4.5-4.5-4.5-2 0-4.4 1.52-5.5 4Z" />
        </svg>
      </div>
      <div className="absolute bottom-5 right-10 text-white/30 rotate-[20deg]">
        <svg width="80" height="80" viewBox="0 0 24 24" fill="currentColor">
          <path d="M12 10c-1.1-2.48-3.5-4-5.5-4C3.5 6 2 8 2 10.5c0 4 4.5 7.5 10 11.5 5.5-4 10-7.5 10-11.5 0-2.5-1.5-4.5-4.5-4.5-2 0-4.4 1.52-5.5 4Z" />
        </svg>
      </div>

      <div className="container mx-auto max-w-6xl relative z-10">
        <h2 className="text-3xl md:text-4xl font-bold text-center text-white mb-12">
          Blogs
        </h2>

        {/* Blog Grid */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8">
          {blogs.map((blog) => (
            <div
              key={blog.id}
              className="bg-white rounded-[2rem] overflow-hidden shadow-xl flex flex-col items-center text-center pb-8 group"
            >
              {/* Blog Image */}
              <div className="w-full h-64 overflow-hidden  pb-0">
                <img
                  src={blog.image}
                  alt={blog.title}
                  className="w-full h-full object-cover rounded-[1.5rem] group-hover:scale-105 transition-transform duration-500"
                />
              </div>

              {/* Text Content */}
              <div className="p-6 space-y-3">
                <h3 className="text-xl font-bold text-gray-800 h-14 flex items-center justify-center">
                  {blog.title}
                </h3>
                <p className="text-gray-500 text-sm leading-relaxed px-2">
                  {blog.description}
                </p>
              </div>

              {/* Read More Button */}
              <button className="bg-[#5CB36D] hover:bg-[#4a9459] text-white font-bold py-2 px-8 rounded-lg shadow-md transition-colors uppercase text-xs tracking-widest mt-auto">
                Read More
              </button>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default BlogSection;
