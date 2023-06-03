import React, { useState } from "react";
import "./Home.css";
import { motion } from "framer-motion";
import { slideIn, fadeIn } from "../../Motions/FramerMotions";

import HeroSlider from "../../Components/HeroSlider/HeroSlider";
import CountUp, { useCountUp } from "react-countup";
import { timeLimeData } from "../../Utils/Data";
import {
  VerticalTimeline,
  VerticalTimelineElement,
} from "react-vertical-timeline-component";
import "react-vertical-timeline-component/style.min.css";
import { CountUpData } from "../../Utils/Data";
import Slick from "../../Components/SlickCarousel/Slick";
//import { testimonials } from "../../Utils/Data";
//import Testimonial from "../../Components/Testimonial/Testimonial";
//import Card from '../../Components/Card/Card';
//import Sidebar from '../../Components/Sidebar/Sidebar';

const Home = () => {
  const [readMore, setReadMore] = useState(" ");

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
          What our people are{" "}
        </h2>
        <div className="about-container">
          <motion.div
            initial="hidden"
            whileInView="show"
            variants={slideIn("left", "tween", 0.2, 1)}
            className="left"
          >
            <div className="text">
              <h2>
                We're working to end <br /> intergenerational poverty.
              </h2>
            </div>
            <button className="about-btn image-btn">learn more</button>
          </motion.div>
          <motion.div
            initial="hidden"
            whileInView="show"
            variants={slideIn("right", "tween", 0.2, 1)}
            className="right"
          >
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
          </motion.div>
        </div>
      </div>

      {/* timeline section */}
      <motion.div
        initial="hidden"
        animate="show"
        variants={slideIn("up", "tween", 0.2, 1)}
        className="timeline-container"
        style={{ marginTop: "1.5rem" }}
      >
        <h2 style={{ textAlign: "center", color: "#fff" }}>What we do</h2>
        <VerticalTimeline>
          {timeLimeData.map((t, i) => {
            const { Icon, title, desc } = t;

            return (
              <VerticalTimelineElement
                key={i}
                className="vertical-timeline-element--work"
                contentStyle={{
                  background: "rgb(242, 242, 242)",
                  color: "black",
                }}
                contentArrowStyle={{
                  borderRight: "7px solid  rgb(33, 150, 243)",
                }}
                icon={<Icon />}
              >
                {title ? (
                  <React.Fragment>
                    <h3 className="vertical-timeline-element-title">{title}</h3>
                    {desc && (
                      <p>
                        {readMore === title
                          ? desc
                          : `${desc.substring(0, 80)}...`}
                        <button
                          onClick={() =>
                            readMore === title
                              ? setReadMore("")
                              : setReadMore(title)
                          }
                        >
                          {readMore === title ? "show less" : "read more"}
                        </button>
                      </p>
                    )}
                  </React.Fragment>
                ) : undefined}
              </VerticalTimelineElement>
            );
          })}
        </VerticalTimeline>
      </motion.div>

      {/* countup section */}

      <motion.div
        initial="hidden"
        whileInView="show"
        variants={slideIn("up", "tween", 0.2, 1)}
        className="countup-container"
      >
        <h2 style={{ textAlign: "center" }}>our achievements</h2>
        <div className="countup-container-inner">
          {CountUpData.map((item, index) => {
            return (
              <div className="countup-item" key={index}>
                <img src={item.img} alt={item.desc} />
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
      </motion.div>

      {/* testimonial section */}
      <motion.div
        initial="hidden"
        whileInView="show"
        variants={slideIn("up", "tween", 0.2, 1)}
        className="testimonial-container"
      >
        <Slick />
      </motion.div>
    </div>
  );
};

export default Home;
