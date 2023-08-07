import React from "react";
import "./Volunteer.css";
import { Link } from "react-router-dom";
import { voluntaryData } from "../../Utils/Data";

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

      <h3 style={{ textAlign: "center" }}>Our current voluntary Teachers</h3>
      <div className="voluntary-members">
        {voluntaryData.map((member, index) => {
          const { image, role, name } = member;
          return (
            <div className="single-member" key={index}>
              <div className="image-container">
                <img src={image} alt={name} />
              </div>
              <div className="member-text">
                <h2>{name}</h2>
                <p>{role}</p>
              </div>
            </div>
          );
        })}
      </div>
    </div>
  );
};

export default Volunteer;
