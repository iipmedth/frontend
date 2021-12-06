import React, { useEffect, useContext } from "react";
import ContactPageIcon from "@mui/icons-material/ContactPage";
import { DataContext } from "../../context/DataContext";

const PatientBadge = () => {
  const { selectedPatient } = useContext(DataContext);
  useEffect(() => {}, [selectedPatient]);
  return (
    <div className="patientBadge">
      <ContactPageIcon />
      <p className="patientBadge__text">
        {selectedPatient ? selectedPatient.name : ""}
      </p>
    </div>
  );
};

export default PatientBadge;
