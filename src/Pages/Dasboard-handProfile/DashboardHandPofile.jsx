import React from "react";
import Navbar from "../../Components/Navbar/Navbar";
import Logo from "../../Static/images/rfLogo.png";

export default class DashboardHandProfile extends React.Component {
  render() {
    return (
      <div className="row dashboard">
        {/* NAVBAR */}
        <div className="col-lg-1">
          <Navbar />
        </div>

        <div className="col-lg">
          <h1 className="row dashboard__header">Hand profile</h1>
          <div className="row dashboard__inner">
            {/* HAND VISUALISATION */}

            <div className="dashboard__hand col-lg-3">
              <div className="row dashboard__hand__handView">
                HAND VIEW PLACEHOLDER
              </div>
              <div className="row dashboard__hand__handSelect">
                HAND SELECT PLACEHOLDER
              </div>
            </div>

            {/* DATA */}
            <div className=" col-lg dashboard__data">
              <div className="row dashboard__data__header">
                <div className="box dashboard__data__header__patientData">
                  PATIENT DATA PLACEHOLDER
                </div>
                <div className="box dashboard__data__header__dataInfo">
                  DATA INFO PLACEHOLDER
                </div>
                <img className="box dashboard__data__header__logo" src={Logo} />
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
  }
}