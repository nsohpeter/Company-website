import React from "react";
import "./Volunteer.css";
import { Link } from "react-router-dom";
import { voluntaryData } from "../../Utils/Data";
import "../../Components/Carousel/Slick.css";

import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";

const Volunteer = () => {
  var settings = {
    dots: true,
    slidesToShow: 3,
    slidesToScroll: 3,
    initialSlide: 0,

    speed: 2000,

    cssEase: "linear",
    responsive: [
      {
        breakpoint: 1024,
        settings: {
          slidesToShow: 3,
          slidesToScroll: 3,
          infinite: false,
          dots: true,
        },
      },
      {
        breakpoint: 768,
        settings: {
          slidesToShow: 2,
          slidesToScroll: 2,
          initialSlide: 2,
        },
      },
      {
        breakpoint: 480,
        settings: {
          slidesToShow: 1,
          slidesToScroll: 1,
        },
      },
    ],
  };

  return (
    <div className="voluntry-container">
      <div className="volunteerBanner-container">
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

      <h3 className="volunteer-title">Our current voluntary Teachers</h3>
      <Slider {...settings} className="slick-container">
        {voluntaryData.map((member, index) => {
          const { image, role, name } = member;
          return (
            <div key={index} className="volunteer-leader">
              <img src={image} alt={name} />
              <div className="detail-text">
                <h1>{name}</h1>
                <h2>{role}</h2>
              </div>
            </div>
          );
        })}
      </Slider>
    </div>
  );
};

export default Volunteer;
