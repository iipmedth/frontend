import React from "react";
import SearchIcon from "@mui/icons-material/Search";

const Searchbar = (props) => {
  return (
    <div className="searchbar">
      <div className="searchbar__iconContainer">
        <div className="searchbar__iconContainer__icon">
          <SearchIcon sx={{ fontSize: 30 }} />
        </div>
      </div>

      <input
        className="searchbar__input"
        type="text"
        placeholder="e.g. Hans de Jong"
        onChange={(e) => props.changeHandler(e.target.value)}
      ></input>
    </div>
  );
};

export default Searchbar;
