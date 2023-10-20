import { AiOutlineCheckCircle, AiOutlinePlus } from "react-icons/ai";
import { FaEllipsisVertical } from "react-icons/fa6";

function HeaderButtons() {
    return (
        <div style={{ display: "flex", justifyContent: "flex-end" }}>
            <div className="home-row-buttons float-end">
                <button className="btn btn-secondary">Collapse All</button>
                <button className="btn btn-secondary">View Progress</button>
                <button className="btn btn-secondary">
                    <AiOutlineCheckCircle style={{ color: "green" }} /> Publish All
                </button>
                <button className="btn btn-danger">
                    <AiOutlinePlus /> Module
                </button>
                <button className="btn btn-secondary">
                    <FaEllipsisVertical />
                </button>
            </div>
        </div>
    );
}

export default HeaderButtons;
