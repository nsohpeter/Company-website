import React from "react";
import "./Values.css";
import { ValuesData } from "../../Utils/Data";
import { Link } from "react-router-dom";

const Values = () => {
  return (
    <div className="our-values">
      {ValuesData.map((item, index) => {
        const { Icon, title, description } = item;
        return (
          <Link to="/vision" className="single-value" key={index}>
            <h1>{title}</h1>
            <div className="value-icon">
              <Icon />
            </div>
            <p>{description}</p>
          </Link>
        );
      })}
    </div>
  );
};

export default Values;
