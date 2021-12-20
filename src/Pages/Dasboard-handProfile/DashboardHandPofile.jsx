import React, { useEffect, useContext } from "react";
import DataInfoSection from "../../Components/DataInfoSection/DataInfoSection";
import Navbar from "../../Components/Navbar/Navbar";
import PatientDataSection from "../../Components/PatientDataSection/PatientDataSection";
import { DataContext } from "../../context/DataContext";
import Logo from "../../Static/images/rfLogo.png";
import HandVisualisatie from "../../Components/HandVisualisatie/HandVisualisatie";
import PercentileTable from "../../Components/PercentileTable/PercentileTable";
import ExportButton from "../../Components/ExportButton/ExportButton";
import GraphInfoButton from "../../Components/GraphInfoButton/GraphInfoButton";

const DashboardHandProfile = () => {
  const { selectedPatient, patientHandPercentiles } = useContext(DataContext);
  useEffect(() => {
    console.log(selectedPatient);
    console.log(patientHandPercentiles);
  }, [selectedPatient, patientHandPercentiles]);

  return (
    <div className="row dashboard">
      {/* NAVBAR */}
      <div className="col-lg-2">
        <Navbar content="dashboard" />
      </div>

      <div className="col-lg test">
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
                <div className="row">
                  <div className="col-lg dashboard__data__body__graph__headerLeft">
                    {/* Filter option here? */}
                  </div>
                  <div className="col-lg dashboard__data__body__graph__headerRight">
                    <GraphInfoButton />
                    <ExportButton />
                  </div>
                </div>
                <div className="row">
                  <PercentileTable percentiles={patientHandPercentiles} />
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default DashboardHandProfile;
