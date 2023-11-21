import { React } from "react";
import { Link } from "react-router-dom";
import "./index.css";
import {FaEllipsisV, FaEdit, FaTrash} from 'react-icons/fa';

function Dashboard({
					   courses,
					   course,
					   setCourse,
					   addNewCourse,
					   deleteCourse,
					   updateCourse,
				   }) {

	return (
		<div>
			<h2>Dashboard</h2>

			<hr />

			<div style={{ marginLeft: '30px' }}>
				<h4>Published Courses ({courses.length})</h4>
				<hr />
				<div>
					<h5>Course</h5>
					<div style={{ display: 'flex', alignItems: 'center', gap: '10px' }}>
						<input
							value={course.name}
							className="form-control"
							placeholder="Course Name"
							onChange={(e) => setCourse({ ...course, name: e.target.value })}
						/>
						<input
							value={course.number}
							className="form-control"
							placeholder="Course Number"
							onChange={(e) => setCourse({ ...course, number: e.target.value })}
						/>
						<input
							value={course.startDate}
							className="form-control"
							type="date"
							onChange={(e) => setCourse({ ...course, startDate: e.target.value })}
						/>
						<input
							value={course.endDate}
							className="form-control"
							type="date"
							onChange={(e) => setCourse({ ...course, endDate: e.target.value })}
						/>
						<button className="btn btn-success m-1" onClick={addNewCourse}>Add</button>
						<button className="btn btn-primary m-1" onClick={updateCourse}>Update</button>
					</div>
				</div>
				<div className="d-flex flex-row flex-wrap row-cols-4">
					{courses.map((course) => (
						<div key={course._id} className="card m-3 position-relative" style={{ width: '260px' }}>
							<img src="../../blue.jpg" className="card-img-top" alt="Course Image" />
							<button className="btn position-absolute top-0 end-0 mt-2 me-2" style={{ background: 'transparent', border: 'none' }}>
								<FaEllipsisV />
							</button>
							<div className="card-body" style={{ paddingBottom: '50px' }}>
								<Link to={`/Kanbas/Courses/${course._id}`} style={{ textDecoration: 'none', display: 'block' }}>
									<h5 className="card-title">{course.name}</h5>
									<p className="card-text" style={{ fontSize: '14px' }}>{course.startDate} to {course.endDate}</p>
								</Link>

							</div>
							<nav className="position-absolute bottom-0 start-0 mb-2 ms-2" style={{ display: 'flex', gap: '10px' }}>
								<button
									className="btn"
									style={{ background: 'transparent', border: 'none' }}
									onClick={(event) => {
										event.preventDefault();
										setCourse(course);
									}}
								>
									<FaEdit />
								</button>
								<button
									className="btn"
									style={{ background: 'transparent', border: 'none' }}
									onClick={(event) => {
										event.preventDefault();
										deleteCourse(course._id);
									}}
								>
									<FaTrash />
								</button>
							</nav>
						</div>
					))}
				</div>
			</div>
		</div>
	);
}

export default Dashboard;
