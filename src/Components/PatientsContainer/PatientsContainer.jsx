import React from "react";
import PatientListItem from "../PatientListItem/PatientListItem";
import SentimentVeryDissatisfiedIcon from "@mui/icons-material/SentimentVeryDissatisfied";

const PatientsContainer = (props) => {
  return (
    <div className="col-lg patientsContainer">
      <ul>
        {props.patients.length > 0 ? (
          props.patients.map((patientObj, index) => {
            return <PatientListItem key={index} patient={patientObj.patient} />;
          })
        ) : (
          <div className="patientsContainer__notFound">
            <SentimentVeryDissatisfiedIcon
              sx={{ fontSize: 70, marginBottom: 5 }}
            />
            <p>I couldn't find any patients with the name:</p>
            <p className="patientsContainer__notFound--highlight">
              {props.searchCriteria}
            </p>
          </div>
        )}
      </ul>
    </div>
  );
};

export default PatientsContainer;
