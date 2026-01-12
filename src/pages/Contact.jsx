import React from "react";

const Contact = () => {
  return (
    <div className="bg-base-200 min-h-screen">
      {/* Hero Section */}
      <div className="hero bg-gradient-to-r from-primary to-secondary text-white py-20">
        <div className="hero-content text-center">
          <div>
            <h1 className="text-5xl font-bold">Contact Us</h1>
            <p className="py-4 text-lg">We are here to help you anytime</p>
          </div>
        </div>
      </div>

      {/* Contact Section */}
      <div className="max-w-6xl mx-auto px-6 py-16">
        <div className="grid md:grid-cols-2 gap-10">
          {/* Contact Info */}
          <div className="bg-base-100 shadow-xl rounded-xl p-10">
            <h2 className="text-3xl font-bold text-primary mb-4">
              Get in Touch
            </h2>
            <p className="text-gray-600 mb-6">
              Have any questions, feedback, or need support? Feel free to
              contact us anytime. We’d love to hear from you.
            </p>

            <div className="space-y-4">
              <p>
                <strong>Email:</strong> info@greenify.com
              </p>
              <p>
                <strong>Phone:</strong> +91 123456789
              </p>
              <p>
                <strong>Address:</strong> 102-Complex, Xyz Road City name,
                State, 136458
              </p>
            </div>
          </div>

          {/* Contact Form */}
          <div className="bg-base-100 shadow-xl rounded-xl p-10">
            <h2 className="text-3xl font-bold text-primary mb-6">
              Send a Message
            </h2>

            <form className="space-y-4">
              <input
                type="text"
                placeholder="Your Name"
                className="input input-bordered w-full"
                required
              />
              <input
                type="email"
                placeholder="Your Email"
                className="input input-bordered w-full"
                required
              />
              <textarea
                placeholder="Your Message"
                className="textarea textarea-bordered w-full h-32"
                required
              ></textarea>

              <button className="btn btn-primary w-full">Send Message</button>
            </form>
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

export default Contact;
