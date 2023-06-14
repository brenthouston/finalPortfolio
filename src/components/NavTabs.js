import React from "react";
import { NavLink } from "react-router-dom";
import "./styles/style.css";

function NavTabs(currentPage) {
  return (
    <div className="container">
      <ul className="nav nav-tabs">
        <li className="nav-item ">
          <NavLink
            className={
              currentPage === "About Me" ? "nav-link active" : "nav-link"
            }
            to="/"
          >
            About Me
          </NavLink>
        </li>
        <li className="nav-item">
          <NavLink
            className={
              currentPage === "Portfolio" ? "nav-link active" : "nav-link"
            }
            to="/Portfolio"
          >
            Portfolio
          </NavLink>
        </li>
        <li className="nav-item ">
          <NavLink
            className={
              currentPage === "Contact" ? "nav-link active" : "nav-link"
            }
            to="/Contact"
          >
            Contact
          </NavLink>
        </li>
        <li className="nav-item ">
          <NavLink
            className={
              currentPage === "Resume" ? "nav-link active" : "nav-link"
            }
            to="/Resume"
          >
            Resume
          </NavLink>
        </li>
      </ul>
    </div>
  );
}

export default NavTabs;
