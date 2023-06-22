import React from "react";
import "./Volunteer.css";
import { Link } from "react-router-dom";

const Volunteer = () => {
  return (
    <div className="voluntry-container">
      <div className="bamner-container">
        <div className="text">
          <h3>BECOME A MEMBER</h3>
          <Link to="/contact">
            <button className="about-btn">submit your details</button>
          </Link>
        </div>
      </div>

      <div className="voluntry-description">
        <h2>VOLUNTRY TEACHING</h2>

        <p>
          Voluntarily teaching is a noble endeavor that involves selflessly
          sharing knowledge, skills, and experiences with others in a teaching
          capacity, without any expectation of financial compensation. It is a
          powerful way to contribute to the betterment of society by helping
          individuals, particularly those who are less fortunate or in
          underserved communities, gain access to education and opportunities
          they might not otherwise have.
        </p>
      </div>
    </div>
  );
};

export default Volunteer;
