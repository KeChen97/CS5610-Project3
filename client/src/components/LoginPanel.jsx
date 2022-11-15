import React, { useEffect, useState } from 'react';
import API from '../API/API';
import Dashboard from './Dashboard';
import '../css/loginPanel.css';
import {
    useParams,
    useNavigate,
    useLocation,
  } from "react-router-dom";

  function LoginPanel ({setUser}) {
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
        console.log("res",res);
        console.log("res.user",res.user);
        if(res.success) {
            console.log("logged in");
            sessionStorage.setItem("user", res.user.email);
            setUser(res.user);
            navigate("/dashboard", {state: {user: res.user}});
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
                    </form>              
                </div>
        </div>
    </div>
    )
}

export default LoginPanel;