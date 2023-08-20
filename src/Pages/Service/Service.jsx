import React from "react";
import "./Service.css";
import { service } from "../../Utils/Data";

const Service = () => {
  return (
    <div className="main-service-container">
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
      <h1
        style={{
          marginTop: "2rem",
          color: "#036978",
          textAlign: "center",
          fontSize: "2rem",
        }}
      >
        OUR SERVICES
      </h1>
      <div className="service-container">
        {service.map((item, index) => {
          const { Icon, title, description } = item;
          return (
            <div className="single-service">
              {<Icon />}
              <h1>{title}</h1>
              <p>{description}</p>
            </div>
          );
        })}
      </div>
    </div>
  );
};

export default Service;
