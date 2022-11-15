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
        const a = await fetch('/testAPI', {
            method: 'get',
        });
    }
    
    return (
        <div className="home">
            <button onClick={goTologin} className="btn btn-primary toLoginBtn">Log in</button>
            <button onClick={goToRegister} className="btn btn-primary toRegisterBtn">Sign up</button>
            <button onClick={getCourses} className="btn btn-primary getCourse"> Get courses</button>
            <button onClick={test} className="btn btn-primary test"> test</button>
        </div>
    )
}


export default HomePage;