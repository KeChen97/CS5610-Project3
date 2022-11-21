// Jerry Asala
import React from "react";
import PropTypes from "prop-types"

export default function CreatePlan({ onClick }) {
  return (
    <button className="btn btn-success bg-success bg-gradient" onClick={onClick}>
      Create Plan
    </button>
  );
}

CreatePlan.prototype = {
  onClick: PropTypes.func,
}