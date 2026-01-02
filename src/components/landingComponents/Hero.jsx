import React from "react";
import CustomButton from "../common/CustomButton";

const Hero = () => {
  return (
    <section className="h-150 flex items-center justify-center px-40 relative overflow-hidden ">
      <div className="flex flex-col items-center gap-5 text-gray-100">
        <h1 className="text-5xl font-bold ">Plan your trip with wanderwise</h1>
        <p>
          Your adventure starts here. Discover new destinations and make
          unforgettable memories.
        </p>
        <CustomButton text="Get Started" />
      </div>
      {/* background image */}
      <div className="absolute -z-10 left-0 top-0 w-full h-full overflow-hidden">
        <img
          className="w-full h-full object-cover"
          src="https://upload.wikimedia.org/wikipedia/commons/thumb/4/41/Swayambhunath_temple_-_an_ancient_religious_architecture_of_Nepal.jpg/2560px-Swayambhunath_temple_-_an_ancient_religious_architecture_of_Nepal.jpg"
          alt="WanderWise"
        />
      </div>
      {/* black overlay */}
      <div className="absolute -z-5 left-0 top-0 w-full h-full bg-black opacity-60"></div>
    </section>
  );
};

export default Hero;
