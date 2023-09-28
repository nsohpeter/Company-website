import React from "react";
import "./BannerCard.css";
import { bannerData } from "../../Utils/Data";
import { Link } from "react-router-dom";

const BannerCard = () => {
  return (
    <div className="mini-banner-container">
      {bannerData.map((item, index) => {
        const { Icon, title, description, url } = item;
        return (
          <Link
            to={url}
            className="item-banner"
            key={index}
            style={{
              background: item.color.backGround,
              boxShadow: item.color.boxShadow,
            }}
          >
            {<Icon />}
            <h3>{title}</h3>
            <p>{description}</p>
          </Link>
        );
      })}
    </div>
  );
};

export default BannerCard;
