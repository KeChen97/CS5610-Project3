//Ke Chen
import React, { useEffect, useState } from 'react';
import '../css/login.css';
import API from '../API/API';
import Dashboard from './Dashboard';
import LoginPanel from './LoginPanel';
import Navbar from './Navbar';
import {
    useParams,
    useNavigate,
    useLocation,
  } from "react-router-dom";

function Login () {
    return (
        <div>
            <div className='login'>
                <LoginPanel />
            </div>
        </div>
    )
}

export default Login;