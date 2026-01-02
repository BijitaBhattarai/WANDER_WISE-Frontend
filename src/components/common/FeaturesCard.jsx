import React from "react";

const FeaturesCard = ({ image, title, description, icon: Icon }) => {
  return (
    <div
      className="border border-gray-200 rounded p-4 hover:scale-105 transition-transform duration-300
"
    >
      {/* show image ONLY if it exists */}
      {image && (
        <img
          src={image}
          alt={title}
          className="w-full h-32 sm:h-40 md:h-48 object-cover rounded-lg mb-4"
        />
      )}
      {Icon && <Icon className="w-10 h-10 text-green-700 my-4" />}
      <h3 className="text-xl font-semibold mb-1">{title}</h3>
      <p className="text-gray-600 text-sm line-clamp-2 leading-relaxed">
        {description}
      </p>
    </div>
  );
};

export default FeaturesCard;
