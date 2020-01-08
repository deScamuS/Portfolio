import React from "react";
import {Link } from "react-router-dom";
import "./Sidedrawer.css";

const Sidedrawer = props => {
  let drawerClasses = "side-drawer";
  if (props.show) {
    drawerClasses = "side-drawer open";
  }
  return (
      <nav className={drawerClasses}>
        <ul>
          <li>
            <Link to="/">Home</Link>
          </li>
          <li>
            <Link to="/projects">Projects</Link>
          </li>
          <li>
            <Link to="/contact">Contact</Link>
          </li>
        </ul>
      </nav>
  );
};

export default Sidedrawer;
