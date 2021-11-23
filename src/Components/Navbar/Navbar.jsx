import React from "react";
import LogoutButton from "../LogoutButton/LogoutButton";
import NavItem from "../NavItem/NavItem";
import UserBadge from "../UserBadge/UserBadge";
const Navbar = () => {
  return (
    <article className="navbar box">
      <UserBadge />
      <ul className="navbar__nav">
        <NavItem text="FAQ" />
        <NavItem text="All data" icon="storageIcon" />
        <NavItem text="Settings" icon="settingsIcon" />
      </ul>
      <LogoutButton />
    </article>
  );
};

export default Navbar;
