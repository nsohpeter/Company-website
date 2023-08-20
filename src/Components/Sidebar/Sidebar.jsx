import React, { useState } from "react";
import "./Sidebar.css";

import { closeSidebar } from "../../Features/General/GeneralSlice";
import { useDispatch, useSelector } from "react-redux";

import { FaTimes } from "react-icons/fa";
import { Link } from "react-router-dom";

const Sidebar = () => {
  const { isSidebarOpen } = useSelector((store) => store.General);
  const dispatch = useDispatch();

  return (
    <section
      className={`${
        isSidebarOpen ? "sidebar-wrapper show" : "sidebar-wrapper"
      }`}
    >
      <div className="sidebar">
        <button className="close-btn" onClick={() => dispatch(closeSidebar())}>
          <FaTimes className="close-icon" />
        </button>

        <ul className="other-links">
          <Link
            to="/volunteer"
            style={{ textDecoration: "none" }}
            onClick={() => dispatch(closeSidebar())}
          >
            <li className="other-list">
              <span>volunteer</span>
            </li>
          </Link>
          <Link
            to="/donation"
            style={{ textDecoration: "none" }}
            onClick={() => dispatch(closeSidebar())}
          >
            <li className="other-list">
              <span>Donation</span>
            </li>
          </Link>
          <Link
            to="/about"
            style={{ textDecoration: "none" }}
            onClick={() => dispatch(closeSidebar())}
          >
            <li className="other-list">
              <span>About us</span>
            </li>
          </Link>
          <Link
            to="/contact"
            style={{ textDecoration: "none" }}
            onClick={() => dispatch(closeSidebar())}
          >
            <li className="other-list">
              <span>contact</span>
            </li>
          </Link>
        </ul>
      </div>
    </section>
  );
};

export default Sidebar;
