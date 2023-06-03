import React from "react";
import "./Testimonial.css";
import { Testimonials } from "../../Utils/Data";
import TestimonialDetail from "../TestimonialDetail/TestimonialDetail";
import OwlCarousel from "react-owl-carousel";
import "owl.carousel/dist/assets/owl.carousel.css";
import "owl.carousel/dist/assets/owl.theme.default.css";
//import "bootstrap/dist/css/bootstrap.min.css";

const Testimonial = () => {
  const options = {
    loop: true,
    center: true,
    items: 3,
    margin: 0,
    autoplay: true,
    dots: true,
    autoplayTimeout: 8500,
    smartSpeed: 450,
    nav: false,
    responsive: {
      0: {
        items: 1,
      },
      600: {
        items: 3,
      },
      1000: {
        items: 3,
      },
    },
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
        <div className="row">
          <div className="col-md-12">
            <OwlCarousel
              id="customer-testimonoals"
              className="owl-carousel owl-theme"
              {...options}
            >
              {Testimonials.map((testiMonialDetail, index) => {
                return (
                  <TestimonialDetail
                    testiMonialDetail={testiMonialDetail}
                    key={index}
                  />
                );
              })}
            </OwlCarousel>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Testimonial;
