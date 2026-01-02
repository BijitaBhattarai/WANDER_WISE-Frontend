import React from "react";
import FeaturesCard from "../common/FeaturesCard";

// Mini features for About section
const aboutFeatures = [
  {
    title: "Discover Destinations",
    description:
      "Explore mountains, lakes, and cultural landmarks across Nepal.",
  },
  {
    title: "Plan Your Trip",
    description: "Access itineraries, travel packages, and expert tips easily.",
  },
  {
    title: "Travel With Ease",
    description: "Book trips, read reviews, and make every journey seamless.",
  },
  {
    title: "Adventure & Culture",
    description:
      "Experience trekking, wildlife, festivals, and local traditions.",
  },
];

const AboutSection = () => {
  return (
    <section className="px-12 py-15 bg-gray-20">
      <div className="max-w-7xl mx-auto flex flex-col lg:flex-row items-center gap-12">
        {/* Left Image */}
        <div className="lg:w-1/2 ">
          <img
            src="https://www.stjernegaard-rejser.dk/media/puvllynm/nepal_kathmandu_patan-gamle-by_01.jpg?rxy=0.505,0.49625935162094764&width=1200&height=900&rnd=133235617602370000"
            alt="Travel Nepal"
            className="w-150 h-90 rounded-2xl shadow-xl object-cover"
          />
        </div>

        {/* Right Text */}
        <div className="lg:w-1/2 flex flex-col gap-6">
          {/* Heading */}
          <h2 className="text-4xl font-bold text-gray-800">
            Explore Nepal Like Never Before!
          </h2>

          {/* Description */}
          <p className="text-gray-600 text-md leading-relaxed">
            WanderWise is your ultimate travel companion. Discover Nepal’s most
            iconic destinations, plan trips effortlessly, and create
            unforgettable memories — whether you’re seeking adventure, culture,
            or serene nature escapes.
          </p>

          {/* Reuse FeaturesCard for mini feature highlights */}
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-6 mt-4">
            {aboutFeatures.map((feature, index) => (
              <FeaturesCard
                key={index}
                title={feature.title}
                description={feature.description}
              />
            ))}
          </div>
          {/* 
          <button className="mt-6 bg-green-700 text-white px-8 py-3 rounded-xl hover:bg-green-600 transition text-lg">
            Learn More
          </button> */}
        </div>
      </div>
    </section>
  );
};

export default AboutSection;
