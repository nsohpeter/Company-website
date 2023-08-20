import React, { useState } from "react";
import "./Myproducts.css";

import { productData } from "../../Utils/Data";
import { Link } from "react-router-dom";

import { FaStar, FaStarHalfAlt, FaRegStar } from "react-icons/fa";

//import { useDispatch, useSelector } from "react-redux";

const Myproducts = () => {
  const [readMore, setReadMore] = useState(false);

  const handleProductClick = (item) => {
    setSelectedProduct(item);
    dispatch(openModal());
  };

  function getStarIcons(rating) {
    const fullStars = Math.floor(rating);
    const halfStars = Math.ceil(rating - fullStars);
    const emptyStars = 5 - fullStars - halfStars;

    const stars = [];

    for (let i = 0; i < fullStars; i++) {
      stars.push(<FaStar key={i} />);
    }

    for (let i = 0; i < halfStars; i++) {
      stars.push(<FaStarHalfAlt key={fullStars + i} />);
    }

    for (let i = 0; i < emptyStars; i++) {
      stars.push(<FaRegStar key={fullStars + halfStars + i} />);
    }

    return stars;
  }

  return (
    <div className="main-section">
      <div className="product-center">
        {productData &&
          productData.map((item) => (
            <div className="product-list-item" key={item.id}>
              <div className="image-container">
                <img src={item.img} alt={item.title} className="product-img" />
              </div>
              <h4>{item.title}</h4>

              <p className="disc">
                {readMore ? item.disc : `${item.disc.substring(0, 25)}...`}
                <Link to={`products/${item.id}`}>
                  <button>{readMore ? "show less" : "read more"}</button>
                </Link>
              </p>
              <div className="coupons-item">
                <span style={{ textDecoration: "line-through" }}>
                  {" "}
                  Gh{item.old_price}
                </span>
                <span> Gh{item.price}</span>
                <span>%{item.percentage_off} 0ff</span>
              </div>
              <div className="rating-review">
                <span>{getStarIcons(item.rating)}</span>
                <p>{item.reviews} reviews</p>
              </div>
            </div>
          ))}
      </div>
    </div>
  );
};

export default Myproducts;
