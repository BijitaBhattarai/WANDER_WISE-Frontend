import React from "react";
import Navbar from "../components/landingComponents/Navbar";
import Hero from "../components/landingComponents/hero";
import Features from "../components/landingComponents/Features";
import FeaturesCard from "../components/common/FeaturesCard";
import FamousTrip from "../components/landingComponents/FamousTrip";
import About from "../components/landingComponents/About";
import Contact from "../components/landingComponents/Contact";
import Footer from "../components/landingComponents/Footer";

const LandingPage = () => {
  return (
    <>
      <Navbar />
      <Hero />
      <Features />
      <FamousTrip />
      <About />
      <Contact />
      <Footer />
    </>
  );
};

export default LandingPage;
