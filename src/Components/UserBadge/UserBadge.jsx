import React from "react";
import unknownUserIcon from "../../Static/images/unknown_user_icon.svg";

const UserBadge = () => {
  return (
    <div className="userBadge">
      <img
        className="userBadge__image"
        src={unknownUserIcon}
        alt="User icon"
      ></img>
      <p className="userBadge__text">Dr. Jeroen</p>
    </div>
  );
};

export default UserBadge;
