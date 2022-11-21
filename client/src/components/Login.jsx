//Ke Chen
import React, { useState } from 'react';
import API from '../API/API';
import '../css/Login.css';
import {
    useNavigate
  } from "react-router-dom";
import PropTypes from "prop-types";

  function LoginPanel ({isLogin, setisLogin}) {
    const [input, setInput] = useState({});
    const [loginmsg, setMsg] = useState("");
    let navigate = useNavigate();

    const setupInput = (e) => {
        const name = e.target.name;
        const value = e.target.value;
        setInput({...input, [name]: value});
    }

    const onFormSubmit = async (event) => {
        console.log("Login Form Submit");
        event.preventDefault();
        const res = await API.login(input);
        if(res.success) {
            console.log("logged in");
            sessionStorage.setItem("user", res.user.email);
            setisLogin(true);
            // navigate("/dashboard", {state: {user: res.user}});
            navigate("/dashboard");
        } else {
            setMsg(res.msg);
        }
    }

    return (
        <div className='wrapper'>
            <div className='loginPanel'>
                <h1 className='loginTitle'>Login</h1>
                <div className='col-3'>
                    <form onSubmit={onFormSubmit} className="loginForm">
                        <div className="mb-3">
                            
                                <input  name="email" required={true} onChange={setupInput} value={input.email || ''} 
                                        type="email" className="form-control inputBox" placeholder='Email'
                                        id="email" aria-describedby="emailHelp" />
                                <div className="loginmsg" >
                                    {loginmsg}
                                
                            </div>
                        </div>

                        <div className="mb-3">
                            <input  name="password" required={true} onChange={setupInput} value={input.password || ''}
                                    type="password" className="form-control inputBox" placeholder='Password'
                                    id="InputPassword" />
                        </div>

                        <button className="loginBtn">Login</button>
                        <div> 
                            Don't have an account yet?
                            <a href='/register' to='/register' className='signup-link'>Sign up</a>
                        </div>
                    </form>              
                </div>
        </div>
    </div>
    )
}

LoginPanel.prototype = {
    isLogin : PropTypes.bool,
    setisLogin : PropTypes.func
};
export default LoginPanel;