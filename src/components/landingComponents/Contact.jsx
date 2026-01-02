import { Mail, MapPin, Phone } from "lucide-react";
import React from "react";

const ContactUs = () => {
  return (
    <section className="bg-gray-50 py-12 px-14 md:px-16">
      <div className="max-w-7xl mx-auto grid md:grid-cols-2 gap-12 items-center">
        {/* Left: Description */}
        <div>
          <h2 className="text-4xl font-bold mb-4 text-gray-800">
            Get in Touch
          </h2>
          <p className="text-gray-600 mb-6">
            Have questions or need help planning your next adventure? Our
            WanderWise team is here to help you. Fill out the form and we’ll get
            back to you as soon as possible.
          </p>
          <div className="space-y-4">
            <div className="flex items-center space-x-3">
              <span className="text-green-700">
                <Mail />
              </span>
              <span className="text-gray-700">support@wanderwise.com</span>
            </div>
            <div className="flex items-center space-x-3">
              <span className="text-green-700">
                <Phone />
              </span>
              <span className="text-gray-700">+977 9812367036</span>
            </div>
            <div className="flex items-center space-x-3">
              <span className="text-green-700">
                <MapPin />
              </span>
              <span className="text-gray-700">Biratnagar, Nepal</span>
            </div>
          </div>
        </div>

        {/* Right: Form */}
        <form className="bg-white p-8 rounded-lg shadow-md">
          <div className="mb-4">
            <label className="block text-gray-700 font-medium mb-2">Name</label>
            <input
              type="text"
              placeholder="Your Name"
              className="w-full border border-gray-300 rounded px-4 py-2 focus:outline-none focus:ring-2 focus:ring-green-600"
            />
          </div>
          <div className="mb-4">
            <label className="block text-gray-700 font-medium mb-2">
              Email
            </label>
            <input
              type="email"
              placeholder="Your Email"
              className="w-full border border-gray-300 rounded px-4 py-2 focus:outline-none focus:ring-2 focus:ring-green-600"
            />
          </div>
          <div className="mb-4">
            <label className="block text-gray-700 font-medium mb-2">
              Message
            </label>
            <textarea
              placeholder="Your Message"
              rows="5"
              className="w-full border border-gray-300 rounded px-4 py-2 focus:outline-none focus:ring-2 focus:ring-green-600"
            ></textarea>
          </div>
          <button
            type="submit"
            className="w-full bg-green-700 hover:bg-green-600 text-white font-medium py-3 rounded transition"
          >
            Send Message
          </button>
        </form>
      </div>
    </section>
  );
};

export default ContactUs;
