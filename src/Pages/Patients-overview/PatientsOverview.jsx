import React from "react";
import Navbar from "../../Components/Navbar/Navbar";

export default class PatientsOverview extends React.Component {
  render() {
    return (
      <div className="row patientsOverview">
        <div className="col-lg-2">
          <Navbar content="overview" />
        </div>
        <div className="col-lg">
          <h1>hi</h1>
        </div>
      </div>
    );
  }
}
