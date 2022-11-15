//Ke Chen
import React, { useEffect, useState } from 'react';
import API from '../API/API';
import {
    useParams,
    useNavigate,
    useLocation,
  } from "react-router-dom";

function Profile () {
    let location = useLocation();
    let navigate = useNavigate();
    const user = location.state.user;

    return (
        <div>
            <div>
                <label>First Name: </label> {user.fname}
            </div>
            <div>
                <label>Last Name: </label>{user.lname}
            </div>
            <div>
                <label>Program: </label>{user.program}
            </div>
        </div>
    )
}

export default Profile;