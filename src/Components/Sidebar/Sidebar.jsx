import React, { useState } from "react";
import "./Sidebar.css";
import { FaChevronDown } from "react-icons/fa";

import { closeSidebar } from "../../Features/General/GeneralSlice";
import { useDispatch, useSelector } from "react-redux";
import { sublinks } from "../../Utils/Data";

import { FaTimes } from "react-icons/fa";
import { Link } from "react-router-dom";

const Sidebar = () => {
  const { isSidebarOpen } = useSelector((store) => store.General);
  const [expandedPage, setExpandedPage] = useState(null);

  const dispatch = useDispatch();

  const togglePage = (pageIndex) => {
    setExpandedPage((prevExpandedPage) =>
      prevExpandedPage === pageIndex ? null : pageIndex
    );
  };
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

        <ul className="sidebar-links">
          {sublinks.map((item, index) => {
            const { links, page } = item;
            const isPageExpanded = expandedPage === index;
            return (
              <li key={index} className="dropdowns">
                <button className="dropdown-btn">
                  {page}
                  <FaChevronDown
                    className="chevron-icon"
                    onClick={() => togglePage(index)}
                  />
                </button>
                {isPageExpanded && (
                  <ul className="nested-sidebar-links">
                    {links.map((link, index) => {
                      const { label, url } = link;
                      return (
                        <li key={index} className="nested-subLinks">
                          <Link
                            to={url}
                            onClick={() => dispatch(closeSidebar())}
                          >
                            {label}
                          </Link>
                        </li>
                      );
                    })}
                  </ul>
                )}
              </li>
            );
          })}
        </ul>
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
