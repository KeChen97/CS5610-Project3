// Jerry Asala
import React from "react";
import PropTypes from "prop-types"


export default function PlanCourse({ code, getName, semester }) {
  //console.log(getName);
  return <div className="card-body">{`${code} - ${getName}`}</div>;
}


PlanCourse.prototype = {
  code: PropTypes.string.isRequired,
  getName: PropTypes.string.isRequired,
  semester: PropTypes.string.isRequired
}