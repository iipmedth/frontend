import React from "react";
import ContactPageIcon from "@mui/icons-material/ContactPage";

const PatientBadge = () => {
  return (
    <div className="patientBadge">
      <ContactPageIcon />
      <p className="patientBadge__text">Patient name</p>
    </div>
  );
};

export default PatientBadge;
