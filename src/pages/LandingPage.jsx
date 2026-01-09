import React from "react";
import Navbar from "../components/landingComponents/Navbar";
import Hero from "../components/landingComponents/hero";
import Features from "../components/landingComponents/Features";
import FeaturesCard from "../components/common/FeaturesCard";
import FamousTrip from "../components/landingComponents/FamousTrip";
import About from "../components/landingComponents/About";
import Contact from "../components/landingComponents/Contact";
import Footer from "../components/landingComponents/Footer";
import Banner from "@/components/landingComponents/Banner";
import Reviews from "@/components/landingComponents/Reviews";

const LandingPage = () => {
  return (
    <>
      <Navbar />
      <Hero />
      <Banner />
      <Features />
      <FamousTrip />
      <About />
      <Reviews />
      <Contact />
      <Footer />
    </>
  );
};

export default LandingPage;
