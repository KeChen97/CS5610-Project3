//Ke Chen
import React, { useEffect, useState } from 'react';
import API from '../API/API';
import {
    useParams,
    useNavigate,
    useLocation,
  } from "react-router-dom";
import '../css/Navbar.css';

function Navbar ( {user, userLogout} ) {
    const logoutBtn = <button onClick={userLogout}>Log out</button>
    const greeting = <div>Hello! </div>

    return (
        <div>
        <nav id="mainNavbar" className="navbar navbar-expand-md fixed-top">
            <div className="container">
                <div className="navbar-brand">Degree Planner</div>
                
                <div className="collapse navbar-collapse" id="navLinks">
                    <ul className="navbar-nav">
                        <li className="nav-item">
                            <a href="/" className="nav-link">Home</a>
                        </li>
                        
                        <li className="nav-item">
                            <a href="/profile" className="nav-link" id="profile">MyProfile</a>
                        </li>

                        <li className="nav-item">
                            <a href="/about" className="nav-link" id="about">About</a>
                        </li>
                    </ul>
                </div>
                {user ? greeting :logoutBtn}
            </div> 
        </nav>
        </div>
    )
}

export default Navbar;