// Jerry Asala
import React from "react";
import PropTypes from "prop-types"


export default function DeletePlan({ deletePlan }) {
  return (
    <button onClick={deletePlan} className="btn btn-danger bg-danger bg-gradient">
      Delete Plan
    </button>
  );
}

DeletePlan.prototype = {
  delePlan: PropTypes.func,
}