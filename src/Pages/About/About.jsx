import React from "react";
import "./About.css";
import { aboutUs } from "../../Utils/Data";

const About = () => {
  return (
    <div className="About-container">
      <div className="hero">
        <div className="hero-text">
          <p>
            Welcome to Trinity Electronics and Accessories – your go-to
            destination for high-quality electronic accessories that enhance
            your tech experience. We are a passionate team of tech enthusiasts
            who understand the importance of reliable accessories to complement
            your devices.
          </p>
        </div>
      </div>

      <div className="vision">
        <h1 style={{ color: "#036978", textAlign: "center" }}>Our Vision</h1>
        <p>
          Our vision is to revolutionize the way you shop for electronic
          accessories. We're dedicated to creating a platform that not only
          offers top-notch products but also serves as a hub of information and
          inspiration for tech enthusiasts.
        </p>
        <h1 style={{ color: "#036978", textAlign: "center", fontSize: "2rem" }}>
          Our mission
        </h1>
        <p>
          To empower individuals with innovative and reliable electronic
          accessories that enhance their tech journey. We are committed to
          curating a diverse selection of accessories that cater to various
          preferences, ensuring that each product we offer adds tangible value
          to our customers' devices.
        </p>
      </div>
      <h1
        style={{
          color: "#036978",
          textAlign: "center",
          fontSize: "2rem",
        }}
      >
        {" "}
        WHY US{" "}
      </h1>
      <div className="why-us">
        {aboutUs.map((item, index) => {
          return (
            <div className="single-item" key={index}>
              <h1
                style={{
                  color: "#036978",
                  textAlign: "center",
                  fontSize: "2rem",
                }}
              >
                {item.title}
              </h1>
              <p>{item.parag}</p>
            </div>
          );
        })}
      </div>
    </div>
  );
};

export default About;
