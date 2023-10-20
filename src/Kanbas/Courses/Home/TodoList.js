import db from "../../Database";
import { useParams } from "react-router-dom";

function TodoList() {
    const { courseId } = useParams();
    const assignments = db.assignments;
    const courseAssignments = assignments.filter(
        (assignment) => assignment.course === courseId
    );

    return (
        <div>
            {courseAssignments.map((assignment, index) => (
                <div className="grade-assg-title" key={index}>
                    <h5>Grade {assignment.title}</h5>
                    <p>100 points . Due Oct 19 at 11:59pm </p>
                </div>
            ))}
        </div>
    );
}

export default TodoList;
