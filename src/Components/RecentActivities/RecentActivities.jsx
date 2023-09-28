import React from "react";
import "./RecentActivities.css";

import { recentActivities } from "../../Utils/Data";

const RecentActivities = () => {
  return (
    <div className="our-values">
      {recentActivities.map((item, index) => {
        const { image, activity, desc } = item;
        return (
          <div to="/vision" className="single-activity" key={index}>
            <img src={image} alt={activity} />
            <div className="activity-text">
              <h3>{activity}</h3>
              <p>{desc}</p>
            </div>

            <button className="activity-btn">learn more</button>
          </div>
        );
      })}
    </div>
  );
};

export default RecentActivities;
