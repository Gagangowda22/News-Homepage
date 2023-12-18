import React from "react";
import HeroImageDesktop from "../assets/images/image-web-3-desktop.jpg";
import HeroImageMobile from "../assets/images/image-web-3-mobile.jpg";

const HeroLeft = () => {
  return (
    <div className="hero-left">
      <div className="img-container">
        <img src={HeroImageDesktop} alt="Hero Image" />
      </div>
      <div className="hero-desc">
        <div className="title">
          <h1>The Bright Future of Web 3.0?</h1>
        </div>
        <div className="description">
          <p>
            We dive into the next evolution of the web that claims to put the
            power of the platforms back into the hands of the people. But is it
            really fulfilling its promise?
          </p>
          <button> Read more</button>
        </div>
      </div>
    </div>
  );
};

export default HeroLeft;
