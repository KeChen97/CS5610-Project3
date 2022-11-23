//Ke Chen
import React from "react";
import { Link } from "react-router-dom";
import "../css/Navbar.css";
import LogoutIcon from "./LogoutIcon";
import AccountIcon from "./AccountIcon";
import PropTypes from "prop-types";

function Navbar({ isLogin, userLogout }) {
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

          <div className="">
            {isLogin ? <LogoutIcon userLogout={userLogout} /> : empty}
          </div>
        </div>
      </nav>
    </div>
  );
}

Navbar.prototype = {
  isLogin: PropTypes.bool,
  userLogout: PropTypes.func,
};

export default Navbar;
