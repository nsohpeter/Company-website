import React from "react";
import "./HeroSlider.css";

import { useState, useEffect } from "react";
import { Link } from "react-router-dom";

import { peopleData } from "../../Utils/Data";

const HeroSlider = () => {
  const [people, setPeople] = useState(peopleData);
  const [index, setIndex] = useState(0);

  const nextSlide = () => {
    setIndex((prevPeople) => {
      let index = prevPeople + 1;
      if (index > peopleData.length - 1) {
        index = 0;
      }
      return index;
    });
  };
  const prevSlide = () => {
    setIndex((prevPeople) => {
      let index = prevPeople - 1;
      if (index < 0) {
        index = peopleData.length - 1;
      }
      return index;
    });
  };

  useEffect(() => {
    let autoSlider = setInterval(() => {
      setIndex((prevPeople) => {
        let index = prevPeople + 1;
        if (index > peopleData.length - 1) {
          index = 0;
        }
        return index;
      });
    }, 6000);
    return () => {
      clearInterval(autoSlider);
    };
  }, [index]);

  return (
    <div className="section">
      <People
        people={people}
        index={index}
        prevSlide={prevSlide}
        nextSlide={nextSlide}
      />
    </div>
  );
};

export default HeroSlider;

const People = ({ people, index }) => {
  return (
    <div className="section-center">
      <div className="overlay">
        <div className="overlay-text">
          <h1 className="overlay-text-item">
            Welcome to Trinity Electronics and Accessories – your go-to
            destination for high-quality electronics and accessories that
            enhance your tech experience.
          </h1>
          <div className="buttons-container">
            <Link to="/about">
              <button className="hero-btn">learn more</button>
            </Link>
          </div>
        </div>
      </div>
      <div className="slides">
        {people.map((item, personIndex) => {
          let position = "nextSlide";

          if (personIndex === index) {
            position = "activeSlide";
          }
          if (
            personIndex === index - 1 ||
            (index === 0 && personIndex === people.length - 1)
          ) {
            position = "lastSlide";
          }
          return (
            <article key={item.id} className={position}>
              <img src={item.image} alt="name" />
            </article>
          );
        })}
      </div>
    </div>
  );
};
