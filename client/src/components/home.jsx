//Ke Chen
import React, { useEffect, useState } from 'react';
import API from '../API/API';
// import background from './images/background.png';
import '../css/home.css';
import {
    useParams,
    useNavigate,
    useLocation,
    redirect,
  } from "react-router-dom";
import PropTypes from 'prop-types';

function HomePage () {
    let navigate = useNavigate();

    const goTologin = (event) => {
        event.preventDefault();
        navigate("/login");
    }
    
    const goToRegister= (event) => {
        event.preventDefault();
        navigate("/register");
    }

    const getCourses = async (event) => {
        console.log("getCourse")
        const res = await API.getCourses();
        console.log(res);
        event.preventDefault();
    }

    const test = async (event) => {
        const res = await fetch('/testAPI');
    }
    
    return (
        <div className="home">
            <div className="greeting">
                <h1 className='welcome'>Welcome to </h1>
                <h2>Your Degree Planner</h2>
            </div>
            <button onClick={goTologin} className="toLoginBtn">Log in</button>
            <button onClick={goToRegister} className="toRegisterBtn">Sign up</button>
            {/* <button onClick={getCourses} className="getCourse"> Get courses</button>
            <button onClick={test} className="test"> test</button> */}
        </div>
    )
}

HomePage.propTypes = {};
export default HomePage;