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
          const { Icon, name, description, url } = model;
          return (
            <Link
              to={url}
              className="model-card"
              key={index}
              style={{ textDecoration: "none" }}
            >
              <div className="model-icon">
                <Icon />
              </div>
              <div className="model-text">
                <h2>{name}</h2>
                <p>{description}</p>
              </div>
              <button className="model-btn">read more</button>
            </Link>
          );
        })}
      </div>
    </div>
  );
};

export default Models;
