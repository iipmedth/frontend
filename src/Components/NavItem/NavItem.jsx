import React from "react";
/**
 * Place imported icons below:
 */
import HelpIcon from "@mui/icons-material/Help";
import SickIcon from "@mui/icons-material/Sick";
import PanToolIcon from "@mui/icons-material/PanTool";
import SportsHandballIcon from "@mui/icons-material/SportsHandball";
import PsychologyIcon from "@mui/icons-material/Psychology";
import WbIncandescentIcon from "@mui/icons-material/WbIncandescent";
import QuestionAnswerIcon from "@mui/icons-material/QuestionAnswer";

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
    <li className="navItem row" onClick={clickHandler}>
      {(() => {
        switch (props.icon) {
          case "sickIcon":
            return <SickIcon />;
          case "handIcon":
            return <PanToolIcon />;
          case "activityIcon":
            return <SportsHandballIcon />;
          case "participationIcon":
            return <PsychologyIcon />;
          case "conclusionIcon":
            return <WbIncandescentIcon />;
          case "adviceIcon":
            return <QuestionAnswerIcon />;
          default:
            return <HelpIcon />;
        }
      }).call(this)}
      <p>{props.text}</p>
    </li>
  );
};

export default NavItem;
