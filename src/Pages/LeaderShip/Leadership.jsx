import React from "react";
import "./Leadership.css";
import PositionCard from "../../Components/PostionCard/PositionCard";

const Leadership = () => {
  return (
    <div className="main-leadership-container">
      <div className="banner-container">
        <div className="text">
          <h3>OUR LEADERSHIP</h3>
        </div>
      </div>
      <div className="leadership-container">
        <h2 style={{ textAlign: "center" }}>Our leaders</h2>
        <PositionCard />
      </div>
    </div>
  );
};

export default Leadership;
