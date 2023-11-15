import React, { useState } from "react";
import "./Slick.css";
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import { OtherLeadData } from "../../Utils/Data";
//import OtherLeaders from "../OtherLeaders/OtherLeaders";
import { Link } from "react-router-dom";

const Slick = () => {
  const [readMore, setReadMore] = useState(false);
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
    <Slider {...settings}>
      {" "}
      {OtherLeadData.map((item, index) => {
        const { image, name, position, bio, id } = item;
        return (
          <Link
            key={index}
            to={`/slidesingleperson/${id}`}
            style={{ textDecoration: "none" }}
            className="single-leader"
          >
            <img src={image} alt={name} />
            <div className="detail-text">
              <h1>{name}</h1>
              <h2>{position}</h2>
              <p>{readMore ? bio : `${bio.substring(0, 100)}...`}</p>
            </div>

            <button className="single-btn">learn more</button>
          </Link>
        );
      })}
    </Slider>
  );
};

export default Slick;

/*  {OtherLeadData.map((item, index) => {
        const { image, name, position, bio, id } = item;
        <Link
          to={`/slidesingleperson/${id}`}
          style={{ textDecoration: "none" }}
          className="single-leader"
        >
          <img src={image} alt={name} />
          <div className="detail-text">
            <h1>{name}</h1>
            <h2>{position}</h2>
            <p>
              {readMore ? bio : `${bio.substring(0, 100)}...`}
              <Link
                to={`/slidesingleperson/${id}`}
                style={{ textDecoration: "none" }}
              >
                <button
                  onClick={() => {
                    setReadMore(!readMore);
                  }}
                >
                  {readMore ? "show less" : "read more"}
                </button>
              </Link>
            </p>
          </div>

          <button className="activity-btn">learn more</button>
        </Link>;
      })} */
