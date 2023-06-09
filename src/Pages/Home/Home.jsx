import React, { useState } from "react";
import "./Home.css";
import { motion } from "framer-motion";
import { slideIn, fadeIn } from "../../Motions/FramerMotions";

import HeroSlider from "../../Components/HeroSlider/HeroSlider";
import CountUp, { useCountUp } from "react-countup";

import { CountUpData } from "../../Utils/Data";
import Slick from "../../Components/SlickCarousel/Slick";
import Models from "../../Components/OurModels/Models";

const Home = () => {
  //const [readMore, setReadMore] = useState(" ");

  useCountUp({
    ref: "counter",
    enableScrollSpy: true,
    scrollSpyDelay: 1000,
  });

  return (
    <div className="main-home">
      <HeroSlider />
      {/* About us */}

      <div className="about-main-container">
        <h2 style={{ textAlign: "center", color: "black" }}>
          Organisation Profile{" "}
        </h2>
        <div className="about-container">
          <div className="left">
            <div className="left-overlay">
              <div className="text">
                <h2>
                  We're working to end <br /> intergenerational poverty.
                </h2>
              </div>
            </div>
            <button className="about-btn image-btn">learn more</button>
          </div>
          <div className="right">
            <h2>ORGANISATION PROFILE</h2>
            <p>
              The Nung A Bibile Foundation (NABF) is a registered non-profit
              organisation established in 2022 with a primary focus on impacting
              educational outcomes through improved nutrition and self-reliance
              programmes. The NABF reaches out to children daily in Wa, Northern
              region of Ghana teaching English, Arabic and French languages, IT
              programmes, alleviating poverty, running HIV/Aids awareness
              campaigns, setting up and organising community and individual
              feeding initiatives and coordinating community upliftment
              programmes including, skills development, food framing and Early
              Childhood Development.
            </p>
            <button className="about-btn">learn more</button>
          </div>
        </div>
      </div>

      {/* countup section */}

      <div className="countup-container">
        <h2 style={{ textAlign: "center" }}>our achievements</h2>
        <div className="countup-container-inner">
          {CountUpData.map((item, index) => {
            return (
              <div className="countup-item" key={index}>
                <span>
                  <CountUp
                    start={0}
                    end={item.value}
                    duration={3}
                    enableScrollSpy
                  />
                  +
                </span>
                <p>{item.desc}</p>
              </div>
            );
          })}
        </div>
      </div>

      {/* our models */}

      <div className="models-container">
        <Models />
      </div>

      {/* testimonial section */}
      <motion.div className="testimonial-container">
        <Slick />
      </motion.div>
    </div>
  );
};

export default Home;
