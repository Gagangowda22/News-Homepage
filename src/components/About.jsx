import React from "react";
import image1 from "../assets/images/image-retro-pcs.jpg";
import image2 from "../assets/images/image-top-laptops.jpg";
import image3 from "../assets/images/image-gaming-growth.jpg";

const About = () => {
  const cardData = [
    {
      img: image1,
      no: "01",
      title: "Reviving Retro PCs",
      desc: "What happens when old PCs are given modern upgrades?",
    },
    {
      img: image2,
      no: "02",
      title: "Top 10 Laptops of 2022",
      desc: "Our best picks for various needs and budgets.",
    },
    {
      img: image3,
      no: "03",
      title: "The Growth of Gaming",
      desc: "How the pandemic has sparked fresh opportunities.",
    },
  ];

  return (
    <div className="about-container">
      {cardData.map((cards, index) => {
        return (
          <div className="card" key={index}>
            <div className="card-img">
              <img src={cards.img} alt={cards.title} height={145} />
            </div>
            <div className="card-about">
              <div className="card-no">
                <p>{cards.no}</p>
              </div>
              <div className="card-title">
                <h2>{cards.title}</h2>
              </div>
              <div className="card-desc">
                <p>{cards.desc}</p>
              </div>
            </div>
          </div>
        );
      })}
    </div>
  );
};

export default About;
