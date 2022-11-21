//Ke Chen
import React from 'react';
import '../css/home.css';
import {
    useNavigate
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

    return (
        <div className="home">
            <div className="greeting">
                <h1 className='welcome'>Welcome to </h1>
                <h2>Your Degree Planner</h2>
            </div>
            <button onClick={goTologin} className="toLoginBtn">Log in</button>
            <button onClick={goToRegister} className="toRegisterBtn">Sign up</button>
        </div>
    )
}

HomePage.propTypes = {};
export default HomePage;