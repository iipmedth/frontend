import React, { useEffect, useState } from "react";
import ContactPageIcon from "@mui/icons-material/ContactPage";

import { TEST_URL } from "../../GlobalStyles/variables/variables";

const PatientBadge = () => {
  const [name, setName] = useState("");
  // useEffect(() => {
  //   (async () => {
  //     const response = await fetch(TEST_URL + "user", {
  //       headers: { "Content-Type": "application/json" },
  //       credentials: "include",
  //     });
  //     const content = await response.json();
  //     setName(content.name);
  //   })();
  // });
  return (
    <div className="patientBadge">
      <ContactPageIcon />
      <p className="patientBadge__text">{name}</p>
    </div>
  );
};

export default PatientBadge;
