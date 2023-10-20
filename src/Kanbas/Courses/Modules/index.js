import ModuleList from "./ModuleList";
import { AiOutlineCheckCircle, AiOutlinePlus } from "react-icons/ai";
import { FaEllipsisVertical } from "react-icons/fa6";
function Modules() {
  return (
    <div style={{ position: "sticky" }}>
      <div>
        <div style={{ display: "flex", justifyContent: "flex-end" }}>
          <div className="home-row-buttons float-end">
            <button className="btn btn-secondary"> Collapse All</button>
            <button className="btn btn-secondary"> View Progress</button>
            <button className="btn btn-secondary">
              {" "}
              <AiOutlineCheckCircle
                style={{ color: "green" }}
              ></AiOutlineCheckCircle>{" "}
              Publish All
            </button>
            <button className="btn btn-danger">
              <AiOutlinePlus></AiOutlinePlus> Module
            </button>
            <button className="btn btn-secondary">
              <FaEllipsisVertical></FaEllipsisVertical>
            </button>
          </div>
        </div>
        <hr />
        <ModuleList />
      </div>
    </div>
  );
}
export default Modules;
