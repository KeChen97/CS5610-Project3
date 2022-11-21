// Jerry Asala
import React, { useEffect, useState } from "react";


export default function PopulateCourses() {
  const [courses, setCourses] = useState([]);
  //const [userPlan, setUserPlan] = useState([])

  useEffect(() => {
    const getCourseNames = async () => {
      const res = await fetch("/getCourseName");
      const data = await res.json();

      setCourses(data.courses);
    };
    getCourseNames();
  }, []);

  const populateOptions = (course) => {
    const createPlanSelects = document.querySelectorAll("select.create-plan");

    createPlanSelects.forEach((div) => {
      for (const child of div.children) {
        if (child.value === course.code) {
          return;
        }
      }
      const opt = document.createElement("option");
      opt.label = `${course.code} - ${course.name}`;
      opt.value = course.code;
      div.appendChild(opt);
    });
  };

  /*useEffect(() => {
        let res
        const newPlan = async() => {
            try {
                res = await fetch("./createPlan", {
                    method: "POST",
                    headers: {"Content-Type": "application/json"},
                    body: JSON.stringify(userPlan)
                });
                    if(res.ok) {
                    res = await res.json();
                    // do something
                    console.log(res.msg);
                }
            } catch(e) {
                console.log(e);
            }

        }
        newPlan()
    }, [])*/

  return <>{courses.map((course) => populateOptions(course))}</>;
}
