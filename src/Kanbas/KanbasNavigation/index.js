import { Link, useLocation } from "react-router-dom";
import { BiUserCircle } from "react-icons/bi";
import { RiDashboard3Fill } from "react-icons/ri";
import { FaBook, FaInbox, FaHistory, FaPalette, FaImages, FaQuestionCircle } from "react-icons/fa";
import { BsFillCalendar2WeekFill } from "react-icons/bs";
import "./index.css";
import "../index.css";

function KanbasNavigation() {
  const links = [
    { label: "Account", icon: <BiUserCircle className="wd-icon" />, default: "" },
    { label: "Dashboard", icon: <RiDashboard3Fill className="wd-icon" />, default: "" },
    { label: "Courses", icon: <FaBook className="wd-icon" />, default: "CS5500" },
    { label: "Calendar", icon: <BsFillCalendar2WeekFill className="wd-icon" />, default: "" },
    { label: 'Inbox', icon: <FaInbox className="wd-icon"/>, default: "#" },
    { label: 'History', icon: <FaHistory className="wd-icon"/>, default: "#" },
    { label: 'Studio', icon: <FaPalette className="wd-icon"/>, default: "#" },
    { label: 'Commons', icon: <FaImages className="wd-icon"/>, default: "#" },
    { label: 'Help', icon: <FaQuestionCircle className="wd-icon"/>, default: "#" },
  ];

  const { pathname } = useLocation();

  return (
      <div className="list-group wd-kanbas-navigation sidebar">
        <Link
            key="neuLogo"
            to="/"
            className="list-group-item"
            style={{ marginTop: 10 }}
        >
          <img
              src="https://i.pinimg.com/originals/08/bd/47/08bd47b365a7ad4ed868352014ecbd48.png"
              alt="NEU Logo"
              className="img-fluid"
              width="80"
              height="30"
          />
        </Link>

        {links.map((link, index) => (
            <Link
                key={index}
                to={`/Kanbas/${link.label}/${link.default}`}
                className={`list-group-item ${pathname.includes(link.label) && "active"}`}
            >
              {link.icon}
              <br />
              <div
                  className={
                    pathname.includes(link.label)
                        ? "wd-kanbas-navigation-text-active"
                        : "wd-kanbas-navigation-text"
                  }
              >
                {link.label}
              </div>
            </Link>
        ))}
      </div>
  );
}

export default KanbasNavigation;
