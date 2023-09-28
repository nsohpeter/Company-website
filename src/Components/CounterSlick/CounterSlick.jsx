import React from "react";
import "./CounterSlick.css";
import CountUp, { useCountUp } from "react-countup";

import Slider from "react-slick";

import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import { CountUpData } from "../../Utils/Data";

const CounterSlick = () => {
  useCountUp({
    ref: "counter",
    enableScrollSpy: true,
    scrollSpyDelay: 1000,
  });

  const settings = {
    dots: true,
    infinite: true,

    slidesToShow: 3,
    slidesToScroll: 3,
    initialSlide: 0,
    autoplay: true,
    speed: 4000,
    autoplaySpeed: 6000,
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
    <div className="main-container">
      <h2>Auto Play</h2>
      <Slider {...settings} className="main-counter">
        {CountUpData.map((item, index) => {
          return (
            <div className="single-item" key={index}>
              <h1>
                <CountUp
                  start={0}
                  end={item.value}
                  duration={3}
                  enableScrollSpy
                />
                +
              </h1>
              <p>{item.desc}</p>
            </div>
          );
        })}
      </Slider>
    </div>
  );
};

export default CounterSlick;
