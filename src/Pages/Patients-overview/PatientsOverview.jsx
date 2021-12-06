import React from "react";
import Navbar from "../../Components/Navbar/Navbar";
import Searchbar from "../../Components/Searchbar/Searchbar";
import PatientsContainer from "../../Components/PatientsContainer/PatientsContainer";

export default class PatientsOverview extends React.Component {
  render() {
    return (
      <div className="row patientsOverview">
        <div className="col-lg-2">
          <Navbar content="overview" />
        </div>
        <div className="col-lg  patientsOverview__content">
          <h1 className="row patientsOverview__content__header">Patients</h1>
          <div className="row patientsOverview__content__searchbar">
            <Searchbar />
          </div>
          <div className="row patientsOverview__content__patients">
            <PatientsContainer />
          </div>
        </div>
      </div>
    );
  }
}
