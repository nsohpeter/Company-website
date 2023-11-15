import React from "react";
import "./Vision.css";
import { visionItems } from "../../Utils/Data";
import { motion } from "framer-motion";
import { staggerContainer, fadeIn } from "../../Motions/FramerMotions";

const Vision = () => {
  return (
    <div className="main-vision-container">
      <div className="bamner-container">
        <div className="text">
          <h3>OUR VISION,MISSION AND VALUES</h3>
          <h2>Life In All Its Fullness</h2>
        </div>
      </div>

      <div className="content-section">
        <div className="left">
          <img src="./photos/group-photo.png" alt="name" />
        </div>
        <div className="right">
          <p>
            The Nung A Bibile Foundation (NABF) is a registered non-profit
            organisation established in 2022 with a primary focus on impacting
            educational outcomes through improved nutrition and self-reliance
            programmes. The NABF reaches out to children daily in Wa, Northern
            region of Ghana teaching English, Arabic and French languages, IT
            programmes, alleviating poverty, running HIV/Aids awareness
            campaigns, setting up and organising community and individual
            feeding initiatives and coordinating community upliftment programmes
            including, skills development, food framing and Early Childhood
            Development.
          </p>
        </div>
      </div>
      <div className="our-reasons">
        <h2 style={{ textAlign: "center" }}>WHO WE ARE</h2>

        <motion.div
          variants={staggerContainer()}
          initial="hidden"
          whileInView="show"
          viewport={{ once: true, amount: 0.25 }}
          className="card-container"
        >
          {visionItems.map((item, index) => {
            const { Icon, title, description } = item;
            return (
              <motion.div
                variants={fadeIn("right", "tween", (index + 1) * 0.5, 1)}
                className="item-card"
                key={index}
              >
                <h2>{title}</h2>
                <div className="card-icon">
                  <Icon />
                </div>
                <p>{description}</p>
              </motion.div>
            );
          })}
        </motion.div>
      </div>
    </div>
  );
};

export default Vision;
