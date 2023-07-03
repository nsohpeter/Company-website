import React from "react";
import "./Position.css";

const Position = ({ position }) => {
  const { role, image, name, description } = position;
  return (
    <div className="postion-card">
      <div className="image-container">
        <img src={image} alt={name} />
      </div>
      <div className="text-description">
        <h2>{role}</h2>
        <h1>{name}</h1>
        <p>{description}</p>
      </div>
      <button className="position-btn">meet {name}</button>
    </div>
  );
};

export default Position;
