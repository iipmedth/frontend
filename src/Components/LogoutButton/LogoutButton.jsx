import React, { useContext } from "react";
import LogoutIcon from "@mui/icons-material/Logout";
import { AuthContext } from "../../context/AuthContext";

const LogoutButton = () => {
  const { logout } = useContext(AuthContext);

  return (
    <div className="logoutButton" onClick={logout}>
      <LogoutIcon />
      <p>Logout</p>
    </div>
  );
};

export default LogoutButton;
