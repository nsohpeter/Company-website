import React from "react";
import "./Testimonial.css";
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import { testimonials } from "../../Utils/Data";

//{name, img, occupation, testimonial}
const Testimonial = () => {
  // try updating my git repo
  const settings = {
    dots: true,
    infinite: false,
    speed: 500,
    slidesToShow: 3,
    slidesToScroll: 3,
    initialSlide: 0,
    responsive: [
      {
        breakpoint: 1024,
        settings: {
          slidesToShow: 3,
          slidesToScroll: 3,
          infinite: true,
          dots: true,
        },
      },
      {
        breakpoint: 600,
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
      <Slider {...settings}>
        {testimonials.map((item, index) => {
          const { img, name, occupation, testimonial } = item;
          return (
            <div key={index} className="container">
              <img src={img} alt={name} />
              <div className="details">
                <div className="name-occup">
                  <h3>{name}</h3>
                  <h4>{occupation}</h4>
                </div>
                <p>{testimonial}</p>
              </div>
            </div>
          );
        })}
      </Slider>
    </div>
  );
};

export default Testimonial;
