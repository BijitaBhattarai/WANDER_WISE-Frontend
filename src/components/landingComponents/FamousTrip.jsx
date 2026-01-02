import React from "react";
import FeaturesCard from "../common/FeaturesCard";

const famousTripData = [
  {
    image: "https://www.holidify.com/images/bgImages/POKHARA.jpg",
    title: "Pokhara",
    description:
      "A beautiful lakeside city famous for Phewa Lake, stunning Annapurna mountain views, adventure sports, and peaceful natural scenery.",
  },
  {
    image: "https://www.holidify.com/images/bgImages/KATHMANDU.jpg",
    title: "Kathmandu",
    description:
      "The capital city of Nepal known for its rich culture, ancient temples, UNESCO World Heritage sites, and vibrant local life.",
  },
  {
    image:
      "https://www.chitwanjungleguides.com/wp-content/uploads/2019/01/jeep-safari-in-chitwan-national-park.jpg",
    title: "Chitwan National Park",
    description:
      "A popular wildlife destination offering jungle safaris, one-horned rhinoceros sightings, bird watching, and Tharu cultural experiences.",
  },
  {
    image: "https://www.holidify.com/images/bgImages/LUMBINI.jpg",
    title: "Lumbini",
    description:
      "The birthplace of Lord Buddha, famous for its peaceful monasteries, spiritual atmosphere, and historical significance.",
  },
  {
    image:
      "https://images.ctfassets.net/83pwon8meh4m/eTxVO309vlKJYVlmQKMUf/eb3a617a3713fd9cd3cd4fb4ec05eb97/Ours_Everest_Base_Camp_EBC_Nepal_Trekkers_Flags_Fun.jpg",
    title: "Everest Base Camp",
    description:
      "One of the most iconic trekking destinations in the world, offering breathtaking Himalayan views, Sherpa culture, and an unforgettable adventure experience.",
  },
  {
    image:
      "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTS9oNV6AC5UYb5uzgJ0UeiIxrGT919jwsh4Q&s",
    title: "Upper Mustang",
    description:
      "A remote and mystical region known for its desert landscapes, ancient caves, Tibetan culture, and dramatic mountain scenery.",
  },
  {
    image: "https://www.holidify.com/images/bgImages/BHAKTAPUR.jpg",
    title: "Bhaktapur",
    description:
      "A well-preserved medieval city famous for its traditional Newari architecture, historic squares, temples, and rich cultural heritage.",
  },
  {
    image:
      "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQNdJeaaNWn2DVe6XIQcgrsfr8746T4QWNbJA&s",
    title: "Gosaikunda",
    description:
      "A sacred alpine lake located in the Langtang region, popular for trekking, religious pilgrimage, and stunning high-altitude natural beauty.",
  },
];

const FamousTrip = () => {
  return (
    <section className="px-12 py-10">
      {/* heading */}
      <div>
        <h2 className="text-4xl font-bold text-center mb-5">Famous Trips</h2>
        <p className="text-center text-gray-600 ">
          Explore Nepal’s most loved destinations, known for their beauty,
          culture, and unforgettable experiences.
        </p>
      </div>
      <div className="grid grid-cols-4 gap-6 mt-10">
        {famousTripData.map((famous, index) => {
          return (
            <FeaturesCard
              key={index}
              image={famous.image}
              title={famous.title}
              description={famous.description}
            />
          );
        })}
      </div>
    </section>
  );
};

export default FamousTrip;
