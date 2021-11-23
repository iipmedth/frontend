import React from "react";
import LogoutButton from "../LogoutButton/LogoutButton";
import NavItem from "../NavItem/NavItem";
const Navbar = () => {
  return (
    <article className="navbar box">
      <ul className="navbar__nav">
        <NavItem text="hi" />
        <NavItem text="All data" icon="storageIcon" />
        <NavItem text="Settings" icon="settingsIcon" />
      </ul>
      <LogoutButton />
    </article>
  );
};

export default Navbar;
