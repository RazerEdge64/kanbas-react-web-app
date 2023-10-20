import { Link } from "react-router-dom";
import db from "../Database";
import "./index.css";
import { FaEllipsisV, FaBullhorn, FaTasks, FaComments } from 'react-icons/fa';

function Dashboard() {
    const courses = db.courses;
    return (
        <div>
            <h2>Dashboard</h2>
            <hr />
            <div style={{ marginLeft: '30px' }}>
                <h4>Published Courses ({courses.length})</h4>
                <hr />
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
                                <button className="btn" style={{ background: 'transparent', border: 'none' }}><FaBullhorn /></button>
                                <button className="btn" style={{ background: 'transparent', border: 'none' }}><FaTasks /></button>
                                <button className="btn" style={{ background: 'transparent', border: 'none' }}><FaComments /></button>
                            </nav>
                        </div>
                    ))}
                </div>
            </div>
        </div>
    );
}

export default Dashboard;
