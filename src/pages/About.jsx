import React from "react";

const About = () => {
  return (
    <div className="bg-base-200 min-h-screen">
      {/* Hero Section */}
      <div className="hero bg-gradient-to-r from-primary to-secondary text-white py-20">
        <div className="hero-content text-center">
          <div>
            <h1 className="text-5xl font-bold">About ShopEase</h1>
            <p className="py-4 text-lg">Your Trusted Online Shopping Partner</p>
          </div>
        </div>
      </div>

      {/* Content Section */}
      <div className="max-w-6xl mx-auto px-6 py-16">
        <div className="bg-base-100 shadow-xl rounded-xl p-10">
          <h2 className="text-3xl font-bold text-primary mb-4">Who We Are</h2>
          <p className="text-gray-600 leading-relaxed">
            ShopEase is a modern online product selling platform where customers
            can find high quality products at affordable prices. Our goal is to
            make online shopping simple, fast, and secure for everyone.
          </p>

          <h2 className="text-3xl font-bold text-primary mt-8 mb-4">
            Our Mission
          </h2>
          <p className="text-gray-600 leading-relaxed">
            We aim to deliver the best products with outstanding customer
            service. We believe in honesty, quality, and building long-term
            relationships with our customers.
          </p>

          {/* Features */}
          <div className="grid md:grid-cols-3 gap-6 mt-10">
            <div className="card bg-base-200 shadow-md">
              <div className="card-body text-center">
                <h3 className="text-xl font-bold text-secondary">
                  Quality Products
                </h3>
                <p>We provide 100% original and premium quality products.</p>
              </div>
            </div>

            <div className="card bg-base-200 shadow-md">
              <div className="card-body text-center">
                <h3 className="text-xl font-bold text-secondary">
                  Fast Delivery
                </h3>
                <p>We ensure quick and safe delivery to your doorstep.</p>
              </div>
            </div>

            <div className="card bg-base-200 shadow-md">
              <div className="card-body text-center">
                <h3 className="text-xl font-bold text-secondary">
                  24/7 Support
                </h3>
                <p>Our support team is always ready to help you anytime.</p>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Footer */}
      <footer className="footer footer-center p-6 bg-neutral text-neutral-content">
        <p>© 2026 ShopEase. All rights reserved.</p>
      </footer>
    </div>
  );
};

export default About;
