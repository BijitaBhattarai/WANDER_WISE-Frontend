import React from "react";
import FeaturesCard from "../common/FeaturesCard";
import { CreditCard, Luggage, MapPin, Star } from "lucide-react";

const featuresData = [
  {
    title: "Destination Information",
    description:
      "Provides detailed information about popular travel destinations including attractions, location, and best time to visit.",
    icon: MapPin,
  },
  {
    title: "Trip Packages",
    description:
      "Offers a variety of travel packages with itinerary, duration, pricing, and included services for easy trip planning.",
    icon: Luggage,
  },
  {
    title: "Online Booking System",
    description:
      "Allows users to book trips and tour packages online in a secure and convenient way.",
    icon: CreditCard,
  },
  {
    title: "User Reviews and Ratings",
    description:
      "Enables travelers to share reviews and ratings to help others make informed travel decisions.",
    icon: Star,
  },
];

const Features = () => {
  return (
    <section className="px-12 py-10">
      {/* heading */}
      <div>
        <h2 className="text-4xl font-bold text-center mb-5">Features</h2>
        <p className="text-center text-gray-600 ">
          Discover the powerful features of WanderWise that make travel planning
          effortless and enjoyable
        </p>
      </div>
      <div className="grid grid-cols-4 gap-6 mt-10">
        {featuresData.map((feature, index) => {
          return (
            <FeaturesCard
              key={index}
              title={feature.title}
              description={feature.description}
              icon={feature.icon}
            />
          );
        })}
      </div>
    </section>
  );
};

export default Features;
