import React from "react";
import LogoutIcon from "@mui/icons-material/Logout";

import { TEST_URL } from "../../GlobalStyles/variables/variables";

const LogoutButton = () => {
  const logout = async () => {
    await fetch(TEST_URL + "logout", {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      credentials: "include",
    });
  };
  const clickHandler = () => {
    logout();
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
