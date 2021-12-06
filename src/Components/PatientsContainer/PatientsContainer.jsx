import React, { useEffect } from "react";
import PatientListItem from "../PatientListItem/PatientListItem";
import patients from "../../TestData/patients.json";

const PatientsContainer = () => {
  useEffect(() => {
    console.log(patients);
  }, [patients]);
  return (
    <div className="col-lg patientsContainer">
      <ul>
        {patients.map((patient, index) => {
          return (
            <PatientListItem
              name={patient.name}
              dob={patient.date_of_birth}
              sex={patient.gender}
              instrument={patient.instrument}
            />
          );
        })}
      </ul>
    </div>
  );
};

export default PatientsContainer;
