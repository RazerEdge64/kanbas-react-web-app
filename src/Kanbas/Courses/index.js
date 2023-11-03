import React from "react";
import { useParams, Routes, Route, Navigate } from "react-router-dom";
import { AiOutlineMenu, AiOutlineRight } from "react-icons/ai";

import CourseNavigation from "./CourseNavigation";
import Modules from "./Modules";
import Home from "./Home";
import Assignments from "./Assignments";
import AssignmentEditor from "./Assignments/AssignmentEditor";
import Grades from "./Grades";
import "./index.css";

function Courses({ courses }) {
  const { courseId } = useParams();
  console.log("Course ID:", courseId);

  const course = courses.find((course) => course._id === courseId);
  const location = window.location.href.split("/");
  const screen = location.pop();

  return (
      <div>
        <div className="course-heading">
          <div className="course-name">
            <AiOutlineMenu />
            <h6>{course.name}</h6>
            <AiOutlineRight />
            <h6 style={{ color: "black", fontWeight: 300 }}>{screen}</h6>
          </div>
        </div>
        <hr />
        <div className="d-flex">
          <CourseNavigation />
          <div style={{ flexGrow: 1 }}>
            <Routes>
              <Route path="/" element={<Navigate to="Home" />} />
              <Route path="Home" element={<Home />} />
              <Route path="Modules" element={<Modules />} />
              <Route path="Assignments" element={<Assignments />} />
              <Route path="Assignments/:assignmentId" element={<AssignmentEditor />} />
              <Route path="Grades" element={<Grades />} />
            </Routes>
          </div>
        </div>
      </div>
  );
}

export default Courses;
