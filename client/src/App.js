import React, { useEffect, useState } from 'react';
import ReactDOM from 'react-dom/client';
import {
  BrowserRouter,
  Routes,
  Route,
  useContext,
  useNavigate,
  Navigate
} from "react-router-dom";
import './css/App.css';
import RegisterPanel from './components/RegisterPanel';
import Login from './components/Login';
import HomePage from './components/home';
import Dashboard from './components/Dashboard';
import Profile from './components/Profile';
import About from './components/About';
import Navbar from './components/Navbar';
import API from './API/API';
import PropTypes from "prop-types";

function App() {
  const [isLogin, setisLogin] = useState( sessionStorage.getItem("user") !== null &&  sessionStorage.getItem("user") !== "null");

  const userLogout = async () => {
    sessionStorage.setItem("user", null);
    setisLogin(false);
    const res = await API.logout();
  };

  async function getUser (){
    const res = await API.getUser();
    console.log("User get in App", res.user);
    return res.user;
  }

  return (
    <div>
        <Navbar isLogin={isLogin} userLogout={userLogout}/>
      <main>
        <BrowserRouter>
            <Routes>
              <Route path="/" element={<HomePage />} />
              <Route path="/register" element={<RegisterPanel />} />
              <Route path="/login" element={<Login isLogin={isLogin} setisLogin={setisLogin} />} />
              <Route path="/dashboard" element={isLogin ? <Dashboard userLogout={userLogout}/> : <HomePage />} />
              <Route path="/profile" element={isLogin ? <Profile setisLogin={setisLogin}  /> :  <HomePage />} />
              <Route path="/about" element={<About />} />
            </Routes>
          </BrowserRouter>
        </main>
    </div>
    
  );
}
App.prototype = {};
export default App;
