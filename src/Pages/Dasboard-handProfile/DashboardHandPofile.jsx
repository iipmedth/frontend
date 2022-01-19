import React, { useEffect, useContext, useState } from "react";
import DataInfoSection from "../../Components/DataInfoSection/DataInfoSection";
import Navbar from "../../Components/Navbar/Navbar";
import PatientDataSection from "../../Components/PatientDataSection/PatientDataSection";
import { DataContext } from "../../context/DataContext";
import Logo from "../../Static/images/rfLogo.png";
import HandVisualisatie from "../../Components/HandVisualisatie/HandVisualisatie";
import PercentileTable from "../../Components/PercentileTable/PercentileTable";
import ExportButton from "../../Components/ExportButton/ExportButton";
import GraphInfoButton from "../../Components/GraphInfoButton/GraphInfoButton";
import HandSelect from "../../Components/HandSelect/HandSelect";
import LoadingOverlay from "../../Components/LoadingOverlay/LoadingOverlay";
import MeasurementDropdown from "../../Components/MeasurementDropdown/MeasurementDropdown";
import InfoModal from "../../Components/InfoModal/InfoModal";
import ExtremeValueToggle from "../../Components/ExtremeValueToggle/ExtremeValueToggle";

const DashboardHandProfile = () => {
  const {
    selectedPatient,
    patientHandPercentiles,
    loading,
    selectedFilter,
    modalVisible,
    isTherapist,
    extremeValueToggle,
  } = useContext(DataContext);
  const [therapist, setTherapist] = useState(null);
  const [property, setProperty] = useState(null);
  useEffect(() => {
    setTherapist(JSON.parse(localStorage.getItem("isTherapist")));
  }, [selectedPatient, patientHandPercentiles, isTherapist]);

  return (
    <div className="row dashboard">
      <InfoModal visible={modalVisible} />
      {/* NAVBAR */}
      <div className="col-lg-2">
        <Navbar content={therapist ? "dashboard" : "overview"} />
      </div>
      {selectedPatient != null && (
        <div className="col-lg test">
          <h1 className="row dashboard__header">Hand profile</h1>
          <div className="row dashboard__inner">
            {/* HAND VISUALISATION */}

            <div className="dashboard__hand col-lg-3">
              <div className="row dashboard__hand__handView">
                <HandVisualisatie property={property} />
              </div>
              <div className="row dashboard__hand__handSelect">
                <HandSelect />
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
                  {loading && <LoadingOverlay />}
                  <div className="row">
                    <div className="col-lg dashboard__data__body__graph__headerLeft">
                      <MeasurementDropdown />
                    </div>
                    <div className="col-lg dashboard__data__body__graph__headerMiddle">
                      <ExtremeValueToggle />
                    </div>
                    <div className="col-lg dashboard__data__body__graph__headerRight">
                      <GraphInfoButton />
                      <ExportButton />
                    </div>
                  </div>
                  <div className="row">
                    <PercentileTable
                      percentiles={patientHandPercentiles}
                      selectedFilter={selectedFilter}
                      toggle={extremeValueToggle}
                      changeIndex={(index) => setProperty(index)}
                    />
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      )}
    </div>
  );
};

export default DashboardHandProfile;
