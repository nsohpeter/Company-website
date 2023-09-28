import React, { useState } from "react";
import "./Navbar.css";
import { motion } from "framer-motion";
import { headerVariants } from "../../Motions/FramerMotions";

import { FaBars } from "react-icons/fa";
import { openSidebar } from "../../Features/General/GeneralSlice";
import { useDispatch, useSelector } from "react-redux";
import { useEffect } from "react";
import { Link } from "react-router-dom";

const Navbar = () => {
  const [navbarcolor, setNavbarColor] = useState(false);
  const {} = useSelector((store) => store.General);
  const dispatch = useDispatch();

  useEffect(() => {
    function handleNavColor() {
      if (window.scrollY >= 70) {
        setNavbarColor(true);
      } else {
        setNavbarColor(false);
      }
    }
    window.addEventListener("scroll", handleNavColor);

    return () => {
      window.removeEventListener("scroll", handleNavColor);
    };
  }, []);

  return (
    <motion.nav
      initial="hidden"
      whileInView="show"
      variants={headerVariants}
      viewport={{ once: false, amount: 0.25 }}
      className={`${navbarcolor ? "nav active" : "nav"}`}
    >
      <div className="nav-center">
        <div className="nav-header">
          <Link to="/" style={{ textDecoration: "none" }}>
            <div className="logo">
              <img src="./photos/Logo.jpg" className="nav-logo" alt="logo" />
              <p>
                Holy Trinity <span> Accessories</span>
              </p>
            </div>
          </Link>
          <button
            className="btn toggle-btn"
            onClick={() => dispatch(openSidebar())}
          >
            <FaBars />
          </button>
        </div>
        <ul className="links">
          <Link to="/">
            <button className="link-btn">HOME</button>
          </Link>
          <Link to="/products">
            <button className="link-btn">PRODUCTS</button>
          </Link>
          <Link to="/service">
            <button className="link-btn">SERVICE</button>
          </Link>
          <Link to="/about" className="other-links">
            ABOUT US
          </Link>
          <Link to="/contact" className="other-links">
            CONTACT
          </Link>
        </ul>
      </div>
    </motion.nav>
  );
};

export default Navbar;
