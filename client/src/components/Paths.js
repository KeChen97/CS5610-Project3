// Jerry Asala
import React, { useEffect, useState } from "react";
import Path from "./Path";


export default function Paths() {
  const [path, setPath] = useState([]);
  const [courses, setCourses] = useState([]);
  const [arrOfCourseNames, setArrOfCourseNames] = useState([]);


  useEffect(() => {
    const getPath = async () => {
      const res = await fetch("/getPaths");
      const data = await res.json();
      //console.log(data.paths);
      let allPaths = [];

      if (data) {
        //console.log(data.paths);
        data.paths.forEach((path) => {
          allPaths.push(path.name);
        });
      }

      setPath(allPaths);
      //console.log(allPaths);
    };
    getPath();
    // path ia an array of names
  }, []);

  useEffect(() => {
    const getCourses = async () => {
      const res = await fetch("/getPathRecs");
      const data = await res.json();
      //console.log(data.pathRecs);

      setCourses(data.pathRecs);
      //console.log(data);
    };
    getCourses();
    // path is an array of names
  }, []);

  const pathCourses = function getCourse(path) {
    //console.log(courses);
    let arrOfCourses;
    courses.forEach((course) => {
      if (course.courses[0].path === path) {
        //console.log(`this is course.courses for ${path}: ${course.courses}`);
        arrOfCourses = course.courses.slice(1);
      }
    });
    return arrOfCourses;
  };
  //getCourse()



    useEffect(() => {
        const getArrOfCourseName = async () => {
          let res;
          try {
            res = await fetch("/getCourseName");
            const data = await res.json();
            if (data) {
              //console.log(data.courses);
              setArrOfCourseNames(data.courses);
            }
          } catch (e) {
            console.log(e);
          }
        };
        getArrOfCourseName();
      }, []);
    
      function getCourseNameArr() {
        let courseNameArr;
        courseNameArr = arrOfCourseNames
        return courseNameArr
      }

  return (
    <>
      <div className="row">
        {path.map((path, index) => (
          // look for path object that matches path (where path is the name of a path)
          // course is an array of courses
          <Path
            name={path}
            key={index}
            courses={pathCourses}
            courseNames={getCourseNameArr}
          />
        ))}
      </div>
    </>
  );
}


Paths.prototype = {}