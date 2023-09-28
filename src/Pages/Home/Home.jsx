import React, { useState } from "react";
import "./Home.css";

import HeroSlider from "../../Components/HeroSlider/HeroSlider";

import Models from "../../Components/OurModels/Models";
import CounterSlick from "../../Components/CounterSlick/CounterSlick";
import Values from "../../Components/Values/Values";
import RecentActivities from "../../Components/RecentActivities/RecentActivities";
import BannerCard from "../../Components/BannerCard/BannerCard";

const Home = () => {
  return (
    <div className="main-home">
      <div className="hero-section">
        <HeroSlider />
      </div>

      <div className="mini-banner">
        <BannerCard />
      </div>

      {/* countup section */}
      <div className="countup-container">
        <CounterSlick />
      </div>

      {/* our models */}
      <div className="models-container">
        <Models />
      </div>
      {/* our values */}
      <div className="values-container">
        <Values />
      </div>
      {/*Recent activities */}
      <div className="activity-container">
        <h2 style={{ textAlign: "center", fontSize: "2rem" }}>
          Recent activities
        </h2>
        <RecentActivities />
      </div>
    </div>
  );
};

export default Home;
