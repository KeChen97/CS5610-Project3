//Ke Chen
import React, { useEffect, useState } from 'react';
import API from '../API/API';
import { useLocation, useNavigate } from 'react-router-dom';
import PropTypes from "prop-types";

function Dashboard ( {userLogout} ) {
    let navigate = useNavigate();
    let[user, setUser] = useState({});

    useEffect(() => {
        async function getUserInfo () {
            try {
                const res = await API.getUser();
                console.log("User get in Profile", res);
                setUser(res.user);
            } catch (e) {
                console.log(e);
            }
        }
        getUserInfo();
    },[])

    const toProfile = (event) => {
        navigate("/profile", {state: {user: user}});
        event.preventDefault();
    }

    return (
        <div>
            Hello, {user?.fname}
            
        </div>
    )
}

Dashboard.prototype = {
    userLogout : PropTypes.func,
};
export default Dashboard;