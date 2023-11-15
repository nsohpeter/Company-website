import "./LeaderShip.css";
import { BoardLeadData } from "../../Utils/Data";
import Slick from "../../Components/Carousel/Slick";
import { Link } from "react-router-dom";
import { useState } from "react";

import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
const LeaderShip = () => {
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
    <div className="main-container">
      <div className="banner-container"></div>

      <div className="leadership-desc">
        <p className="first-para">
          At NUNGA,our success is driven by a dedicated and dynamic leadership
          team. With a diverse range of skills, experiences, and a shared
          commitment to our company's mission and values, our leaders inspire,
          innovate, and lead by example. They bring a wealth of expertise to
          their respective roles, steering our organization towards excellence
          and growth.
        </p>
        <p className="second-para">
          Our leaders are not just executives; they are visionaries,
          strategists, and problem-solvers who work collaboratively to shape the
          future of our company. Their passion for what they do, combined with
          their unwavering dedication to our employees and customers, is what
          sets them apart.
        </p>
      </div>

      <h1 style={{ marginTop: "3rem", textAlign: "center" }}>
        Board of Directors
      </h1>

      <Slider {...settings}>
        {" "}
        {BoardLeadData.map((item, index) => {
          const { image, name, position, bio, id } = item;
          return (
            <Link
              key={index}
              to={`/singleleader/${id}`}
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

      <h1 style={{ marginTop: "3rem", textAlign: "center" }}>
        Other Managenent Team
      </h1>
      <Slick />
    </div>
  );
};

export default LeaderShip;
