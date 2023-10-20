import { TbFileImport } from "react-icons/tb";
import { BsBarChartLineFill } from "react-icons/bs";
import { BiTargetLock } from "react-icons/bi";
import { AiOutlineBell } from "react-icons/ai";
import { GrAnnounce } from "react-icons/gr";
import TodoList from './TodoList';

function StatusColumn() {
    return (
        <div className="col-3">
            <div className="status-column-buttons">
                <button className="btn btn-secondary">
                    <TbFileImport /> Import Existing Content
                </button>
                <br />
                <button className="btn btn-secondary">
                    {" "}
                    <TbFileImport /> Import From Commons
                </button>
                <br />
                <button className="btn btn-secondary">
                    <BiTargetLock /> Choose Home Page
                </button>
                <br />
                <button className="btn btn-secondary">
                    <BsBarChartLineFill /> View Course Stream
                </button>
                <br />
                <button className="btn btn-secondary">
                    <GrAnnounce /> New Announcements
                </button>
                <br />
                <button className="btn btn-secondary">
                    <BsBarChartLineFill /> New Analytics
                </button>
                <br />
                <button className="btn btn-secondary">
                    <AiOutlineBell /> View Course Notifications
                </button>
            </div>
            <h6 style={{ marginTop: 10 }}>To Do</h6>
            <hr />
            <TodoList />
        </div>
    );
}

export default StatusColumn;
