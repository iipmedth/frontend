import React, { useContext } from "react";
import ContactPageIcon from "@mui/icons-material/ContactPage";
import { DataContext } from "../../context/DataContext";
import { Link } from "react-router-dom";

const PatientListItem = (props) => {
  const { setSelectedPatient } = useContext(DataContext);
  const onClickHandler = (patient) => {
    setSelectedPatient(patient);
  };
  return (
    <Link to="/dashboard" style={{ textDecoration: "none", color: "black" }}>
      <li
        className="patientListItem"
        onClick={() => onClickHandler(props.patient)}
      >
        <aside className="patientListItem__icon">
          <ContactPageIcon sx={{ fontSize: 30 }} />
        </aside>
        <p>{props.patient.name}</p>
        <p>{props.patient.date_of_birth}</p>
        <p>{props.patient.gender}</p>
        <p>{props.patient.instrument}</p>
      </li>
    </Link>
  );
};

export default PatientListItem;
