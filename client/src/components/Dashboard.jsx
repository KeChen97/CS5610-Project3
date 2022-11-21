// Ke Chen & Jerry Asala
import React, { useEffect, useState } from 'react';
import API from '../API/API';
import { useLocation, useNavigate } from 'react-router-dom';
import PropTypes from "prop-types";
import Paths from "./Paths";
import Plans from "./Plans";
import CreateDegreePlan from "./CreateDegreePlan";

function Dashboard ( {userLogout} ) {
    let navigate = useNavigate();
    let[user, setUser] = useState({});

    // Jerry Asala
    const [planState, setPlanState] = useState([0])


    // Ke Chen
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

    if (!planState) {
        return (
        <div>
            Hello, {user?.fname}
            
        </div>
    )}

    // Jerry Asala
    function handler() {
        const newState = [planState[0]+1]
        setPlanState(newState)
        console.log("now planstate: ", planState);
      }
      let planCount = 0;
      //const [planCount, setPlanCount] = useState(0)
      const numOfPlans = (num) => {
        planCount = num;
      };
    
      function getPlanCount() {
        console.log("just clicked..and plan count is: ", planCount);
        return planCount
      }
      return (
        <>
          <h2>Degree Plan</h2>
          <div className="row">
            <div className="col">
              <div className="card">
                <div className="card-body">
                  <Plans numOfPlans={numOfPlans} dep={planState}/>
                </div>
              </div>
            </div>
          </div>
          <div className="row">
            <div className="col">
              <div className="card">
                <div className="card-body">
                <h2>Recommendations:</h2>
                  <div className="row">
                    <div className="col">
                      <div className="card">
                        <div className="card-body">
                          <Paths />
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
          <h2>Create Plan</h2>
          <div className="row">
            <div className="col">
              <div className="card">
                <div className="card-body">
                  <CreateDegreePlan planCount={getPlanCount} handlePlanState={handler}/>
                </div>
              </div>
            </div>
          </div>
        </>
      );




}

Dashboard.prototype = {
    userLogout : PropTypes.func,
};
export default Dashboard;