import React from "react";
import "./Slick.css";
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import { Testimonials } from "../../Utils/Data";
import TestimonialDetail from "../TestimonialDetails/Testimonial";

const Slick = () => {
  var settings = {
    dots: true,
    infinite: true,

    slidesToShow: 3,
    slidesToScroll: 3,
    initialSlide: 0,
    autoplay: true,
    speed: 3000,
    autoplaySpeed: 3000,
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
    <section id="testimonial" className="testimonials pt-70 pb-70">
      <h4
        style={{
          textAlign: "center",
          fontSize: "2.2rem",
          color: "rgb(227, 72, 16)",
        }}
      >
        TESTIMONIALS
      </h4>
      <h3
        style={{
          textAlign: "center",
          fontSize: "2rem",
          color: "rgb(227, 72, 16)",
        }}
      >
        What Our Clients are Saying?
      </h3>
      <Slider {...settings} id="customer-testimonoals" className="slick-theme">
        {Testimonials.map((testiMonialDetail, index) => {
          return (
            <TestimonialDetail
              testiMonialDetail={testiMonialDetail}
              key={index}
            />
          );
        })}
      </Slider>
    </section>
  );
};

export default Slick;
