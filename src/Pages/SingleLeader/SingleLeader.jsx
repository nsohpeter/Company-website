import React from "react";
import "./SingleLeader.css";

import { useParams } from "react-router-dom";
import { BoardLeadData } from "../../Utils/Data";

const SingleLeader = () => {
  const { id } = useParams();
  const personId = Number(id);

  const newData = BoardLeadData.find((item) => item.id === personId);
  const { image, name, position, bio } = newData;
  return (
    <div className="singleLeader">
      <h1>The Biograghy</h1>
      <img src={image} alt="name" />
      <div className="text">
        <h1>{name}</h1>
        <p>{position}</p>
      </div>
      <p className="bio">{bio}</p>
    </div>
  );
};

export default SingleLeader;
