import React from "react";
import LogoutButton from "../LogoutButton/LogoutButton";
import NavItem from "../NavItem/NavItem";
import Clock from "../Clock/Clock";
import UserBadge from "../UserBadge/UserBadge";
import PatientBadge from "../PatientBadge/PatientBadge";
import ArrowBackIcon from "@mui/icons-material/ArrowBack";
import { Link } from "react-router-dom";

const Navbar = (props) => {
  return (
    <article className="navbar box">
      {props.content === "dashboard" && (
        <div>
          <div className="navbar__upperBox">
            <button className="navbar__upperBox__backButton">
              <Link to="/patients">
                <ArrowBackIcon sx={{ fontSize: 30, color: "white" }} />
              </Link>
            </button>
            <PatientBadge />
          </div>
          <ul className="navbar__nav col-lg">
            <NavItem text="Complaint" icon="sickIcon" />
            <NavItem text="Hand profile" icon="handIcon" />
            <NavItem text="Activities" icon="activityIcon" />
            <NavItem text="Participation" icon="participationIcon" />
            <NavItem text="Conclusion" icon="conclusionIcon" />
            <NavItem text="Advice" icon="adviceIcon" />
          </ul>
        </div>
      )}

      {props.content === "overview" && (
        <div className="navbar__clock">
          <Clock />
        </div>
      )}

      <div className="navbar__bottomBox">
        <UserBadge />
        <LogoutButton />
      </div>
    </article>
  );
};

export default Navbar;
