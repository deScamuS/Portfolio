/* eslint-disable no-unused-vars */
import React from "react";
import { Link } from "react-router-dom";
import Toggle from "../Sidedrawer/Toggle";
import "./Topnav.css";

const Topnav = props => (
  <header className="toolbar">
    <nav className="toolbar__navigation">
      <div className="toolbar__toggle-button">
        <Toggle click={props.drawerClickHandler} />
      </div>
      <div className="toolbar__logo"></div>
      <div className="spacer" />

      <div className="toolbar_navigation-items">
        <ul>
          <li>
            <Link
              style={{ fontSize: "18px", fontFamily: "Montserrat, sans-serif" }}
              to="/"
            >
              Home
            </Link>
          </li>
          <li>
            <Link
              style={{ fontSize: "17px", fontFamily: "Montserrat, sans-serif" }}
              to="/projects"
            >
              Projects
            </Link>
          </li>
          <li>
            <Link
              style={{ fontSize: "17px", fontFamily: "Montserrat, sans-serif" }}
              to="/contact"
            >
              Contact
            </Link>
          </li>
        </ul>
      </div>
    </nav>
  </header>
);

export default Topnav;
