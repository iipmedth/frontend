import React from "react";
import AccountCircleIcon from "@mui/icons-material/AccountCircle";

/**
 * Component which displays items in navbar, to add icons 
 * @see https://mui.com/components/material-icons/
 */
const NavItem = () => {
  return (
    <a className="navItem">
      <li className="navItem__item">
        <AccountCircleIcon />
        <p>hello</p>
      </li>
    </a>
  );
};

export default NavItem;
