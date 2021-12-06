import React from "react";
import ContactPageIcon from "@mui/icons-material/ContactPage";

const PatientListItem = (props) => {
  return (
    <li className="patientListItem">
      <aside className="patientListItem__icon">
        <ContactPageIcon sx={{ fontSize: 30 }} />
      </aside>
      <p>{props.name}</p>
      <p>{props.dob}</p>
      <p>{props.sex}</p>
      <p>{props.instrument}</p>
    </li>
  );
};

export default PatientListItem;
