import React, { useState } from "react";
import "./Home.css";
import HeroSlider from "../../Components/HeroSlider/HeroSlider";
import Slick from "../../Components/Carousel/Slick";
import Myproducts from "../../Components/myproducts/Myproducts";

const Home = () => {
  return (
    <div className="main-home">
      <div className="hero-slider">
        <HeroSlider />
      </div>

      <div className="products-section">
        <h1
          style={{
            textAlign: "center",
            fontSize: "2.2rem",
            color: "rgb(227, 72, 16)",
          }}
        >
          what we have on stock
        </h1>
        <Myproducts />
      </div>
      <div className="testimonial">
        <Slick />
      </div>
    </div>
  );
};

export default Home;
