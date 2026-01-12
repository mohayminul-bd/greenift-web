import React from "react";
import { GiHandOk, GiStamper, GiCardboardBox } from "react-icons/gi";
import { SlBadge } from "react-icons/sl";

const WhyChooseUs = () => {
  const features = [
    {
      id: 1,
      title: "Sustainable Products",
      description:
        "Explore our carefully curated selection of sustainable products, each designed to reduce your carbon footprint.",
      icon: <GiStamper className="w-10 h-10 text-green-600" />,
    },
    {
      id: 2,
      title: "Eco-Friendly Choices",
      description:
        "Make conscious choices with our eco-friendly products, knowing that your purchases promote ethical sourcing and responsible manufacturing practices.",
      icon: <GiHandOk className="w-10 h-10 text-green-600" />,
    },
    {
      id: 3,
      title: "High-Quality Selection",
      description:
        "Invest in long-lasting and reliable products that meet our stringent quality standards, ensuring your satisfaction and the longevity of your purchases.",
      icon: <SlBadge className="w-10 h-10 text-green-600" />,
    },
    {
      id: 4,
      title: "Sustainable Packaging",
      description:
        "Our sustainable packaging ensures that your orders arrive safely while minimizing their impact on the planet.",
      icon: <GiCardboardBox className="w-10 h-10 text-green-600" />,
    },
  ];

  return (
    <section className="relative py-16 px-4 bg-white overflow-hidden">
      {/* Background Decorations (Top Left Lightbulb & Bottom Right Leaf) */}
      <div className="absolute top-0 left-0 opacity-20 -translate-x-10 -translate-y-10">
        <div className="w-40 h-40 bg-yellow-200 rounded-full blur-3xl"></div>
      </div>
      <div className="absolute bottom-0 right-0 opacity-10 translate-x-10 translate-y-10">
        <div className="w-64 h-64 bg-green-300 rounded-full blur-3xl"></div>
      </div>

      <div className="container mx-auto max-w-7xl relative z-10">
        {/* Section Title */}
        <h2 className="text-3xl md:text-4xl font-bold text-center text-gray-800 mb-16">
          Why Choose Greenify?
        </h2>

        {/* Features Grid */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-12">
          {features.map((item) => (
            <div
              key={item.id}
              className="flex flex-col items-center text-center group"
            >
              {/* Icon Container */}
              <div className="w-24 h-24 mb-6 rounded-full border border-green-100 flex items-center justify-center bg-white shadow-sm transition-transform duration-300 group-hover:scale-110 relative">
                <div className="absolute inset-0 rounded-full border-2 border-green-500 opacity-20 scale-90"></div>
                {item.icon}
              </div>

              {/* Text Content */}
              <h3 className="text-xl font-bold text-gray-800 mb-4 px-2">
                {item.title}
              </h3>
              <p className="text-gray-600 text-sm leading-relaxed max-w-[250px]">
                {item.description}
              </p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default WhyChooseUs;
