import React, { useEffect, useState } from 'react';
import ReactDOM from 'react-dom/client';
import {
  BrowserRouter,
  Routes,
  Route,
  useNavigate,
  Navigate
} from "react-router-dom";
import './css/App.css';
import RegisterPanel from './components/RegisterPanel';
import Login from './components/Login';
import LoginPanel from './components/LoginPanel';
import HomePage from './components/home';
import Dashboard from './components/Dashboard';
import Profile from './components/Profile';
import About from './components/About';
import Navbar from './components/Navbar';


function App() {
  const [user, setUser] = useState(null);

  const userLogout = () => {
    sessionStorage.setItem("user", null);
    setUser(null);
  };

  return (
    <div>
        <Navbar user={user} userLogout={userLogout}/>
      <main>
        <BrowserRouter>
            <Routes>
              <Route path="/" element={<HomePage />} />
              <Route path="/register" element={<RegisterPanel />} />
              <Route path="/login" element={<LoginPanel setUser={setUser}/>} />
              <Route path="/dashboard" element={user ? <Dashboard userLogout={userLogout}/> : <HomePage />} />
              <Route path="/profile" element={user ? <Profile /> : <LoginPanel />} />
              <Route path="/about" element={<About />} />
            </Routes>
          </BrowserRouter>
        </main>
    </div>
    
  );
}

export default App;
