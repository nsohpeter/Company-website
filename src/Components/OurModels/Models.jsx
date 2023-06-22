import React from "react";
import "./Models.css";
import { Link } from "react-router-dom";
import { modelsData } from "../../Utils/Data";

const Models = () => {
  return (
    <div className="main-model-container">
      <h2 style={{ textAlign: "center" }}>OUR MODELS</h2>
      <div className="model-container">
        {modelsData.map((model, index) => {
          const { Icon, name, description } = model;
          return (
            <div className="model-card" key={index}>
              <div className="model-icon">
                <Icon />
              </div>
              <h2>{name}</h2>
              <p>{description}</p>
            </div>
          );
        })}
      </div>
    </div>
  );
};

export default Models;
