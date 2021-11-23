import React from "react";
/**
 * Place imported icons below:
 */
import SettingsIcon from "@mui/icons-material/Settings";
import HelpIcon from "@mui/icons-material/Help";
import StorageIcon from "@mui/icons-material/Storage";
import LogoutIcon from "@mui/icons-material/Logout";

/**
 * Component which displays items in navbar, to add icons
 * @see https://mui.com/components/material-icons/
 */
const NavItem = (props) => {
  const clickHandler = () => {
    // TODO Implement something that's actually usefull
    console.log(props.text);
  };

  return (
    <li className="navItem" onClick={clickHandler}>
      {(() => {
        switch (props.icon) {
          case "storageIcon":
            return <StorageIcon />;
          case "settingsIcon":
            return <SettingsIcon />;
          case "logoutIcon":
            return <LogoutIcon />;
          default:
            return <HelpIcon />;
        }
      }).call(this)}
      <p>{props.text}</p>
    </li>
  );
};

export default NavItem;
