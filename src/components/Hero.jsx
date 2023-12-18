import React from "react";
import HeroLeft from "./HeroLeft";
import HeroRight from "./HeroRight";

const Hero = () => {
  return (
    <section className="hero-container">
      <HeroLeft />
      <HeroRight />
    </section>
  );
};

export default Hero;
