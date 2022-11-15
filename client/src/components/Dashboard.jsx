//Ke Chen
import React, { useEffect, useState } from 'react';
import API from '../API/API';
import { useLocation, useNavigate } from 'react-router-dom';

function Dashboard ( {userLogout} ) {
    let location = useLocation();
    let navigate = useNavigate();
    const user = location.state.user;
    console.log("user", location.state.user);

    const toProfile = (event) => {
        navigate("/profile", {state: {user: user}});
        event.preventDefault();
    }

    return (
        <div>
            Hello, 
            {user.fname}
            <button onClick={userLogout}
                    className="btn btn-primary logoutBtn">Log out
            </button>
            <a href='/profile' onClick={toProfile}>Profile</a>
        </div>
    )
}
export default Dashboard;