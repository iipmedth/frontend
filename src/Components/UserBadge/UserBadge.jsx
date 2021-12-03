import React, { useEffect, useContext } from "react";
import unknownUserIcon from "../../Static/images/unknown_user_icon.svg";
import { DataContext } from "../../context/DataContext";

const UserBadge = () => {
  const { userData } = useContext(DataContext);

  useEffect(() => {
    console.log(userData);
  }, [userData]);

  return (
    <div className="userBadge">
      <img
        className="userBadge__image"
        src={unknownUserIcon}
        alt="User icon"
      ></img>
      <p className="userBadge__text">{userData.name}</p>
    </div>
  );
};

export default UserBadge;
