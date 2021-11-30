import React from "react";
import SearchIcon from "@mui/icons-material/Search";

const Searchbar = () => {
  return (
    <div className="searchbar">
      <div className="searchbar__icon">
        <SearchIcon fontSize="large" />
      </div>

      <input
        className="searchbar__input"
        type="text"
        placeholder="e.g. Hans de Jong"
      ></input>
    </div>
  );
};

export default Searchbar;
