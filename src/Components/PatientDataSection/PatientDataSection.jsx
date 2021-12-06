import React from "react";

const PatientDataSection = (props) => {
  let dob = new Date(props.patient.date_of_birth);
  let diff_ms = Date.now() - dob.getTime();
  let age_dt = new Date(diff_ms);

  let age = Math.abs(age_dt.getUTCFullYear() - 1970);

  return (
    <div className="patientData">
      <h1 className="patientData__header">Personal information</h1>
      <p className="patientData__text">Name: {props.patient.name} </p>
      <p className="patientData__text">Age: {age} </p>
      <p className="patientData__text">Sex: {props.patient.gender} </p>
      <p className="patientData__text">
        Instrument: {props.patient.instrument}
      </p>
    </div>
  );
};

export default PatientDataSection;
