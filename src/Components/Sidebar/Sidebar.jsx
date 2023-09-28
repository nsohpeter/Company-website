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
            to="/products"
            style={{ textDecoration: "none" }}
            onClick={() => dispatch(closeSidebar())}
          >
            <li className="other-list">
              <span>PRODUCTS</span>
            </li>
          </Link>
          <Link
            to="/service"
            style={{ textDecoration: "none" }}
            onClick={() => dispatch(closeSidebar())}
          >
            <li className="other-list">
              <span>SERVICES</span>
            </li>
          </Link>
          <Link
            to="/about"
            style={{ textDecoration: "none" }}
            onClick={() => dispatch(closeSidebar())}
          >
            <li className="other-list">
              <span>ABOUT US</span>
            </li>
          </Link>
          <Link
            to="/contact"
            style={{ textDecoration: "none" }}
            onClick={() => dispatch(closeSidebar())}
          >
            <li className="other-list">
              <span>CONTACT US</span>
            </li>
          </Link>
        </ul>
      </div>
    </section>
  );
};

export default Sidebar;
