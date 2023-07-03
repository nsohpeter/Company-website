import React, { useState } from "react";
import "./Navbar.css";
import { motion } from "framer-motion";
import { headerVariants } from "../../Motions/FramerMotions";
import KeyboardArrowDownIcon from "@mui/icons-material/KeyboardArrowDown";
import { FaBars } from "react-icons/fa";
import {
  openSidebar,
  openSubmenu,
  closeSubmenu,
} from "../../Features/General/GeneralSlice";
import { useDispatch, useSelector } from "react-redux";
import { useEffect } from "react";
import { Link } from "react-router-dom";

const Navbar = () => {
  const [navbarcolor, setNavbarColor] = useState(false);
  const {} = useSelector((store) => store.General);
  const dispatch = useDispatch();

  const displaySubmenu = (e) => {
    const page = e.target.textContent;

    const tempBtn = e.target.getBoundingClientRect();

    const center = (tempBtn.left + tempBtn.right) / 2;
    const Bottom = tempBtn.Bottom - 3;

    dispatch(openSubmenu({ page, location: { center, Bottom } }));
  };

  const handleCloseMenu = (e) => {
    if (!e.target.classList.contains("link-btn")) {
      dispatch(closeSubmenu());
    }
  };

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
      onMouseOver={handleCloseMenu}
    >
      <div className="nav-center">
        <div className="nav-header">
          <Link to="/" style={{ textDecoration: "none" }}>
            <div className="logo">
              <img src="./photos/Logo.jpg" className="nav-logo" alt="logo" />
              <p>
                Nung A Bibile <span> Foundation</span>
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
          <li onMouseOver={displaySubmenu}>
            <button onMouseOver={displaySubmenu} className="link-btn">
              OUR FOCUS
              <KeyboardArrowDownIcon className="link-btn" />
            </button>
          </li>
          <li onMouseOver={displaySubmenu}>
            <button onMouseOver={displaySubmenu} className="link-btn">
              RESOURCES
              <KeyboardArrowDownIcon className="link-btn" />
            </button>
          </li>
          <li onMouseOver={displaySubmenu}>
            <button onMouseOver={displaySubmenu} className="link-btn">
              WHERE WE WORK
              <KeyboardArrowDownIcon className="link-btn" />
            </button>
          </li>

          <Link to="/volunteer" className="other-links">
            volunteer
          </Link>
          <Link to="/donation" className="other-links">
            Donation
          </Link>
          <Link to="/vision" className="other-links">
            About us
          </Link>
          <Link to="/contact" className="other-links">
            contact
          </Link>
        </ul>

        {/* <div className="signIn">
            <button className="btn signin-btn">sign in</button>
          </div> */}
      </div>
    </motion.nav>
  );
};

export default Navbar;
