//Ke Chen
import React from "react";
import { Link } from "react-router-dom";
import "../css/Navbar.css";
import AccountIcon from "./AccountIcon";
import PropTypes from "prop-types";

function Navbar({ isLogin }) {
  const empty = <span></span>;

  return (
    <div>
      <nav id="mainNavbar" className="navbar navbar-expand-md fixed-top">
        <ul className="navbar-nav">
          <li className="nav-item">
            <Link to="/" className="brand nav-link">
              Degree Planner{" "}
            </Link>
          </li>
          <li className="nav-item">
            <Link to="/dashboard" className="nav-link">
              Home
            </Link>
          </li>
          <li className="nav-item">
            <Link to="/profile" className="nav-link">
              MyProfile
            </Link>
          </li>
          <li className="nav-item">
            <Link to="/about" className="nav-link" id="about">
              About
            </Link>
          </li>
        </ul>
        <div className="navbar-nav icons">
          <div className="">{isLogin ? <AccountIcon /> : empty}</div>
        </div>
      </nav>
    </div>
  );
}

Navbar.prototype = {
  isLogin: PropTypes.bool,
};

export default Navbar;
