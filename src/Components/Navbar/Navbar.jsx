import React from "react";
import LogoutButton from "../LogoutButton/LogoutButton";
import NavItem from "../NavItem/NavItem";
import UserBadge from "../UserBadge/UserBadge";
import PatientBadge from "../PatientBadge/PatientBadge";
import ArrowBackIcon from "@mui/icons-material/ArrowBack";

const Navbar = () => {
  return (
    <article className="navbar box">
      <div className="navbar__upperBox">
        <button className="navbar__upperBox__backButton">
          <ArrowBackIcon sx={{ fontSize: 30 }} />
        </button>
        <PatientBadge />
      </div>
      <ul className="navbar__nav">
        <NavItem text="Complaint" icon="sickIcon" />
        <NavItem text="Hand profile" icon="handIcon" />
        <NavItem text="Activities" icon="activityIcon" />
        <NavItem text="Participation" icon="participationIcon" />
        <NavItem text="Conclusion" icon="conclusionIcon" />
        <NavItem text="Advice" icon="adviceIcon" />
      </ul>
      <div className="navbar__bottomBox">
        <UserBadge />
        <LogoutButton />
      </div>
    </article>
  );
};

export default Navbar;
