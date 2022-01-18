import React from "react";
import Navbar from "../components/Navbar";
import HeroImage from "../components/HeroImage";
import TrainingSection from "../components/Training";
import Footer from "../components/Footer";

const Training = () => {
  return (
    <>
      <Navbar />
      <HeroImage heading='Training' text='Pre-Flight & In-Flight Training' />
      <TrainingSection />
      <Footer />
    </>
  );
};

export default Training;
