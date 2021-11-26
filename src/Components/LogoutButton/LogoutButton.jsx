import React from "react";
import LogoutIcon from "@mui/icons-material/Logout";
const LogoutButton = () => {
  const clickHandler = () => {
    console.log("Logout button clicked");
  };
  return (
    <div className="logoutButton" onClick={clickHandler}>
      <LogoutIcon />
      <p>Logout</p>
    </div>
  );
};

export default LogoutButton;
