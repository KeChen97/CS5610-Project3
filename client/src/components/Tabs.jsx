//Ke Chen
import React from "react";
import "../css/Tabs.css";
import LogoutIcon from "./LogoutIcon";
import PropTypes from "prop-types";

function Tabs({ setTab, user, userLogout }) {
  return (
    <div class="tabs">
      <div class="tab">
        <div id="tab-currentPlan" onClick={() => setTab(1)}>
          <span class="material-symbols-outlined tabIcon">wysiwyg</span>
          Current Degree Plan
        </div>
      </div>

      <div class="tab">
        <div id="tab-createPlan" onClick={() => setTab(2)}>
          <span class="material-symbols-outlined tabIcon">library_add</span>
          Create Plan
        </div>
      </div>

      <div class="tab">
        <div id="tab-recommendation" onClick={() => setTab(3)}>
          <span class="material-symbols-outlined tabIcon">wysiwyg</span>
          Recommendations
        </div>
      </div>

      <div className="tab">
        <div id="tab-logout">
          {user ? <LogoutIcon userLogout={userLogout} /> : ""}
        </div>
      </div>
    </div>
  );
}

Tabs.prototype = {
  setTab: PropTypes.func,
  user: PropTypes.object,
  userLogout: PropTypes.func,
};
export default Tabs;
