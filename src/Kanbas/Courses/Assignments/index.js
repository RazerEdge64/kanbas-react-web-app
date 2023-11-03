import React from "react";
import { Link, useParams, useNavigate } from "react-router-dom";
import db from "../../Database";
import { useCollapse } from "react-collapsed";
import "./index.css";
import { AiOutlineHolder, AiOutlinePlus } from "react-icons/ai";
import { FaCaretRight } from "react-icons/fa6";
import { FaRegPenToSquare } from "react-icons/fa6";
import { FaEllipsisVertical } from "react-icons/fa6";
import {FaEdit, FaTrash} from "react-icons/fa";
import {useDispatch, useSelector} from "react-redux";


import {addAssignment, deleteAssignment} from "./assignmentReducer";


function Assignments() {

    const { courseId } = useParams();
    const dispatch = useDispatch();
    const assignments = useSelector((state) => state.assignmentReducer.assignments);
    const assignment = useSelector((state) => state.assignmentReducer.assignment);

    const courseAssignments = assignments.filter(
        (assignment) => assignment.course === courseId,
    );

    console.log("Displaying assignments:", courseAssignments);

    const { getCollapseProps, getToggleProps, isExpanded } = useCollapse();

    const navigate = useNavigate();

    // const handleAddAssignment = () => {
    //     const newAssignmentData = {
    //         title: assignment.title,
    //         course: courseId
    //     };
    //     dispatch(addAssignment(newAssignmentData));
    //     navigate(`/Kanbas/Courses/${courseId}/Assignments/new`);
    // };

    const handleAddAssignment = () => {
        navigate(`/Kanbas/Courses/${courseId}/Assignments/new`);
    };


    const handleDeleteAssignment = (id, event) => {
        // event.stopPropagation();
        const confirmDelete = window.confirm("Are you sure you want to delete this assignment?");
        event.stopPropagation();
        if (confirmDelete) {
            dispatch(deleteAssignment(id));
            console.log(`Deleted assignment with ID: ${id}`);
        }
    };


  return (
    <div>
      <div
        style={{
          display: "flex",
          justifyContent: "space-between",
          marginTop: 10,
        }}
      >
        <div>
          <input
            type="text"
            placeholder="Search for assignments"
            className="form-control mb-2"
          ></input>
        </div>
        <div>
          <div className="assg-buttons">
            <button className="btn btn-secondary">
              <AiOutlinePlus /> Group
            </button>
            <button className="btn btn-danger"  onClick={handleAddAssignment}
            >
              <AiOutlinePlus /> Assignment
            </button>
            <button className="btn btn-secondary">
              <FaEllipsisVertical></FaEllipsisVertical>
            </button>
          </div>
        </div>
      </div>
      <hr style={{ marginTop: 4 }} />
      <div className="assg-collapsible">
        <div className="header" {...getToggleProps()}>
          <AiOutlineHolder style={{ marginRight: 10 }}></AiOutlineHolder>
          <FaCaretRight style={{ marginRight: 10 }}></FaCaretRight>
          <h5>Assignments</h5>
        </div>
        <div {...getCollapseProps()}>
          <div className="content">
            {courseAssignments.map((assignment) => (

                <div className="assignment" {...getToggleProps()}>
                  <AiOutlineHolder
                    style={{ marginRight: 20 }}
                  ></AiOutlineHolder>

                    <Link
                        key={assignment._id}
                        to={`/Kanbas/Courses/${courseId}/Assignments/${assignment._id}`}
                        className="list-group-item"
                    >
                        <div style={{display:"flex", alignItems:"center"}}>
                            <FaRegPenToSquare
                                style={{ marginRight: 20 }}
                            ></FaRegPenToSquare>
                            <div className="assg-title">
                                <h5>{assignment.title}</h5>
                                <p>
                                    <span style={{ color: "red" }}>Multiple Modules</span> |
                                    Due Oct 19 at 11:59pm | 100 pts
                                </p>
                            </div>
                        </div>

                    </Link>

                    <button
                        className="btn"
                        style={{ background: 'transparent', border: 'none', float: 'right', marginLeft: '10px'  }}
                        onClick={(event) => handleDeleteAssignment(assignment._id, event)}
                    >
                        <FaTrash />
                    </button>

                </div>

            ))}
          </div>
        </div>
      </div>
    </div>
  );
}
export default Assignments;
