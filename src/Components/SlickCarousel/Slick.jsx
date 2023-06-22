import React from "react";
import "./Slick.css";
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import { Testimonials } from "../../Utils/Data";
import TestimonialDetail from "../TestimonialDetail/TestimonialDetail";

const Slick = () => {
  var settings = {
    dots: true,
    infinite: true,

    slidesToShow: 3,
    slidesToScroll: 3,
    initialSlide: 0,
    autoplay: true,
    speed: 2000,
    autoplaySpeed: 2000,
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
      <div className="container mt-5">
        <h4 className="miniTitle text-center">TESTIMONIALS</h4>
        <div className="text-center ">
          <h3 className="sectionTitle">What Our Clients are Saying?</h3>
        </div>
        <p className="text-center ">
          Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
          eiusmod tempor incididunt ut labore et dolore magna.
        </p>

        <Slider
          {...settings}
          id="customer-testimonoals"
          className="slick-theme"
        >
          {Testimonials.map((testiMonialDetail, index) => {
            return (
              <TestimonialDetail
                testiMonialDetail={testiMonialDetail}
                key={index}
              />
            );
          })}
        </Slider>
      </div>
    </section>
  );
};

export default Slick;
