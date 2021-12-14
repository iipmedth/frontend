import React, { useEffect, useContext } from "react";
import DataInfoSection from "../../Components/DataInfoSection/DataInfoSection";
import Navbar from "../../Components/Navbar/Navbar";
import PatientDataSection from "../../Components/PatientDataSection/PatientDataSection";
import { DataContext } from "../../context/DataContext";
import Logo from "../../Static/images/rfLogo.png";
import HandVisualisatie from "../../Components/HandVisualisatie/HandVisualisatie";

const DashboardHandProfile = () => {
  const { selectedPatient } = useContext(DataContext);
  useEffect(() => {
    console.log(selectedPatient);
  }, [selectedPatient]);

  return (
    <div className="row dashboard">
      {/* NAVBAR */}
      <div className="col-lg-2">
        <Navbar content="dashboard" />
      </div>

      <div className="col-lg">
        <h1 className="row dashboard__header">Hand profile</h1>
        <div className="row dashboard__inner">
          {/* HAND VISUALISATION */}

          <div className="dashboard__hand col-lg-3">
            <div className="row dashboard__hand__handView">
              <HandVisualisatie />
            </div>
            <div className="row dashboard__hand__handSelect">
              HAND SELECT PLACEHOLDER
            </div>
          </div>

          {/* DATA */}
          <div className=" col-lg dashboard__data">
            <div className="row dashboard__data__header">
              <div className="box dashboard__data__header__patientData">
                <PatientDataSection patient={selectedPatient} />
              </div>
              <div className="box dashboard__data__header__dataInfo">
                <DataInfoSection patient={selectedPatient} />
              </div>
              <img
                className="box dashboard__data__header__logo"
                src={Logo}
                alt="LOGO"
              />
              {/* <div className="box dashboard__data__header__logo"></div> */}
            </div>
            <div className="row dashboard__data__body">
              <div className="box dashboard__data__body__graph">
                GRAPH PLACEHOLDER
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default DashboardHandProfile;
