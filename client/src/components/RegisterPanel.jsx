//Ke Chen
import React, { useState } from 'react';
import API from '../API/API';
import '../css/register.css';
import {
    useNavigate
  } from "react-router-dom";


function RegisterPage () {
    const [input, setInput] = useState({});
    const [registermsg, setMsg] = useState("");
    let navigate = useNavigate();

    const setupInput = (e) => {
        const name = e.target.name;
        const value = e.target.value;
        setInput({...input, [name]: value});
    }

    const onFormSubmit = async (event) => {
        console.log("Form Submit");
        event.preventDefault();
        const res = await API.register(input);
        if(res.success) {
            navigate("/login");
        } else {
            setMsg(res.msg);
        }
    }

    return (
        <div>
            <div className='registerPanel'>
                <h1 className='registerTitle'>Sign up</h1>
         
                <form onSubmit={onFormSubmit} className="registerForm">
                    
                    <div className="mb-3">
                        <label className="form-label">Email address</label>
                        <input value={input.email || ''} onChange={setupInput} name="email"  
                                required={true} type="email" className="form-control registerBox" 
                                id="email" aria-describedby="emailHelp" />
                    </div>
                
                    <div className="mb-3">
                        <label className="form-label">First Name</label>
                        <input value={input.fName} onChange={setupInput} name="fname" required={true}
                                type="text" className="form-control registerBox" id="fName" />
                    </div>

                    <div className="mb-3">
                        <label className="form-label">Last Name</label>
                        <input value={input.lName} onChange={setupInput} name="lname" required={true}
                            type="text" className="form-control registerBox" id="lName" />
                    </div>

                    <div className="mb-3">
                        <label className="form-label">Program</label>
                        <select name="program" value={input.program} onChange={setupInput}
                                className="form-select selectBox" required={true} id="program" >
                            <option value="">Please choose</option>
                            <option value="general">MS in Computer Science </option>
                            <option value="align">Align MS in Computer Science</option>
                        </select>
                    </div>

                    <div className="mb-3">
                        <label className="form-label">Password</label> 
                        <input value={input.password || ''} onChange={setupInput} name="password" 
                            required={true} type="password" className="form-control registerBox" 
                            id="InputPassword" />
                    </div>

                    <div className="registermsg" >
                        {registermsg}
                    </div>

                    <button className="registerBtn">Signup</button>
                </form>
               
                </div>
            </div>
    
    )
}
RegisterPage.prototype = {};
export default RegisterPage;