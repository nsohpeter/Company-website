import React, { useEffect, useRef } from "react";
import "./Submenu.css";

import { useDispatch, useSelector } from "react-redux";
import { Link } from "react-router-dom";

const Submenu = () => {
  const { isSubmenuOpen, location, page } = useSelector(
    (State) => State.General
  );

  // console.log(location);
  const submenuContainer = useRef(null);
  useEffect(() => {
    const submenu = submenuContainer.current;

    const { center, bottom } = location;
    console.log(center, bottom);
    submenu.style.left = `${center}px`;
    submenu.style.top = `${bottom}px`;
  }, [location]);

  return (
    <div
      className={`${isSubmenuOpen ? "submenu show" : "submenu"}`}
      ref={submenuContainer}
    >
      <h4>{page && page.page}</h4>
      <div className={`submenu-center col-2`}>
        {page &&
          page.links &&
          page.links.map((link, index) => {
            const { label, img, url } = link;
            return (
              <Link to={url} key={index}>
                {label}
              </Link>
            );
          })}
      </div>
    </div>
  );
};

export default Submenu;
