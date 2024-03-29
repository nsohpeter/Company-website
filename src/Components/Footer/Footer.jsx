import React from "react";
import "./Footer.css";
import { Link } from "react-router-dom";
import {
  FaFacebook,
  FaTwitter,
  FaInstagram,
  FaWhatsapp,
  FaEnvelope,
  FaArrowRight,
} from "react-icons/fa";

const Footer = () => {
  return (
    <footer>
      <div className="row">
        <div className="col">
          <img src="../../photos/Logo.jpg" alt="" />
          <p className="para">
            The Nung A Bibile <br /> Foundation (NABF)
          </p>

          <h2 className="official">official partners</h2>
          <div className="partnership">
            <p>Reginal Ministry, Bono regon</p>
            <img src="../../photos/ministry.png" alt="" />
          </div>
        </div>
        <div className="col">
          <h3>
            Company Details
            <div className="underline">
              <span></span>
            </div>
          </h3>
          <ul>
            <Link to="/vision">
              <li>Our Vision, Mission & Values</li>
            </Link>
            <Link to="/history">
              <li>Our History</li>
            </Link>
            <Link to="/leadership">
              <li>Our Leadership</li>
            </Link>
            <Link to="/accountability">
              <li>Accountability</li>
            </Link>
          </ul>
        </div>
        <div className="col">
          <h3>
            Links
            <div className="underline">
              <span></span>
            </div>
          </h3>
          <ul>
            <Link to="/livelihood">
              <li>our livelihoood promise</li>
            </Link>
            <Link to="/projects">
              <li>projects</li>
            </Link>
            <Link to="/donations">
              <li>impact of donations</li>
            </Link>
          </ul>
        </div>
        <div className="col">
          <h3>
            Newsletter
            <div className="underline">
              <span></span>
            </div>
          </h3>
          <form action="">
            <i className="icon">
              <FaEnvelope />
            </i>
            <input type="email" placeholder="enter your email" />
            <button type="submit">
              <i className="icon">
                <FaArrowRight />
              </i>
            </button>
          </form>
          <div className="social-icons">
            <li className="icon">
              <a href="https://web.facebook.com/nsoh.peter.5">
                <FaFacebook />
              </a>
            </li>
            <li className="icon">
              <a href="">
                <FaTwitter />
              </a>
            </li>
            <li className="icon">
              <a href="">
                <FaInstagram />
              </a>
            </li>
            <li className="icon">
              <a href="">
                <FaWhatsapp />
              </a>
            </li>
          </div>
        </div>
      </div>
      <hr />
      <p className="copy-right">
        nung A Bibile Foundation @ 2023- All Rights Reserved
      </p>
    </footer>
  );
};

export default Footer;
