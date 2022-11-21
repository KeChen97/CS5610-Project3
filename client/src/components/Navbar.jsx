//Ke Chen
import React, { useEffect, useState } from 'react';
import API from '../API/API';
import {
    useParams,
    useNavigate,
    useLocation,
  } from "react-router-dom";
import '../css/Navbar.css';
import PropTypes from "prop-types";

function Navbar ( { isLogin, userLogout} ) {
    const accountIcon =
        <a href='/profile' to='/profile' className="nav-link" >
            <span className="material-symbols-outlined icon">account_box</span>
        </a>
    const logoutIcon = 
        <a href='/' to='/' onClick={userLogout} className="nav-link" >
            <span className="material-symbols-outlined icon">logout</span>
        </a>
    const empty = <span></span>
   
    return (
        <div>
            <nav id="mainNavbar" className="navbar navbar-expand-md fixed-top">
                    <ul className="navbar-nav">
                        <li className="nav-item">
                            <a href="/"className="brand nav-link">Degree Planner</a>
                        </li>
                        <li className="nav-item">
                            <a href="/dashboard" className="nav-link">Home</a>
                        </li>
                        <li className="nav-item">
                            <a href="/profile" className="nav-link">MyProfile</a>
                        </li>
                        <li className="nav-item">
                            <a href="/about" className="nav-link" id="about">About</a>
                        </li>
                    </ul>
                    <div className="navbar-nav icons">
                        <div className="">
                            {isLogin ? accountIcon : empty}
                        </div>
                    
                        <div className="">
                            {isLogin ? logoutIcon : empty}
                        </div>
                    </div>

            </nav>
        </div>
    )
}

Navbar.prototype = {
    isLogin : PropTypes.bool,
    userLogout : PropTypes.func
};

export default Navbar;