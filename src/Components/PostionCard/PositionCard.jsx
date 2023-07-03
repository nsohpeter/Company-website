import React from "react";
import "./PositionCard.css";
import { positionData } from "../../Utils/Data";
import Position from "../Position/Position";

const PositionCard = () => {
  return (
    <div className="postionCard-main-container">
      {positionData.map((position, index) => {
        return <Position key={index} position={position} />;
      })}
    </div>
  );
};

export default PositionCard;
