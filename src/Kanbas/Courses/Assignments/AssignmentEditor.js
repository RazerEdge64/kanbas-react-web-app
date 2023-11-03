import React, {useState} from "react";
import {useNavigate, useParams, Link} from "react-router-dom";
import db from "../../Database";
import {useDispatch, useSelector} from "react-redux";
import {addAssignment, updateAssignment} from "./assignmentReducer";

function AssignmentEditor() {
    const dispatch = useDispatch();


    const {assignmentId} = useParams();
    const existingAssignment = useSelector(state => state.assignmentReducer.assignments.find(assignment => assignment._id === assignmentId));


    const [assignment, setAssignment] = useState(existingAssignment || {
        title: "",
        description: "",
        dueDate: "",
        availableFromDate: "",
        availableUntilDate: ""
    });

    const {courseId} = useParams();
    const navigate = useNavigate();

    // const handleSave = () => {
    //     if (existingAssignment) {
    //         dispatch(updateAssignment(assignment));
    //
    //         console.log("Updated:", assignment);
    //     } else {
    //         dispatch(addAssignment(assignment));
    //         console.log("Added:", assignment);
    //     }
    //     navigate(`/Kanbas/Courses/${courseId}/Assignments`);
    // };

    const handleSave = () => {
        const assignmentToSave = {
            ...assignment,
            course: courseId
        };

        if (existingAssignment) {
            dispatch(updateAssignment(assignmentToSave));
            console.log("Updated:", assignmentToSave);
        } else {
            dispatch(addAssignment(assignmentToSave));
            console.log("Added:", assignmentToSave);
        }
        navigate(`/Kanbas/Courses/${courseId}/Assignments`);
    };



    return (
        <div style={{marginTop: 16}}>
            <h6>Assignment Name</h6>

            <input
                value={assignment.title}
                onChange={e => setAssignment(prev => ({ ...prev, title: e.target.value }))}
                className="form-control mb-2"
            />

            <h6>Description</h6>
            <textarea
                value={assignment.description}
                onChange={e => setAssignment(prev => ({ ...prev, description: e.target.value }))}
                className="form-control mb-2"
                rows="4"
                placeholder="Enter assignment description..."
            ></textarea>

            <h6>Points</h6>
            <input
                type="number"
                value={assignment.points}
                onChange={e => setAssignment(prev => ({ ...prev, points: e.target.value }))}
                className="form-control mb-2"
                placeholder="Enter points for the assignment..."
            />

            <h6>Due Date</h6>
            <input
                type="date"
                value={assignment.dueDate}
                onChange={e => setAssignment(prev => ({ ...prev, dueDate: e.target.value }))}
                className="form-control mb-2"
            />

            <h6>Available From</h6>
            <input
                type="date"
                value={assignment.availableFromDate}
                onChange={e => setAssignment(prev => ({ ...prev, availableFromDate: e.target.value }))}
                className="form-control mb-2"
            />

            <h6>Available Until</h6>
            <input
                type="date"
                value={assignment.availableUntilDate}
                onChange={e => setAssignment(prev => ({ ...prev, availableUntilDate: e.target.value }))}
                className="form-control mb-2"
            />


            <hr/>
            <div className="float-end">
                <Link
                    to={`/Kanbas/Courses/${courseId}/Assignments`}
                    className="btn btn-secondary cancel-button"
                >
                    Cancel
                </Link>
                <button
                    onClick={handleSave}
                    className="btn btn-danger save-button">
                    Save
                </button>
            </div>
        </div>
    );
}

export default AssignmentEditor;
