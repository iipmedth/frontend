import React, { createContext, useEffect, useState } from "react";
import { fetchUserData, fetchPatients } from "../API/apiMethods";

export const DataContext = createContext();

export const DataProvider = ({ children }) => {
  const [userData, setUserData] = useState(null);
  const [patients, setPatients] = useState(null);
  const [selectedPatient, setSelectedPatient] = useState(null);

  useEffect(() => {
    userDataSetter();
    patientsSetter();
  }, []);

  /**
   * @TODO Delete logs after testing
   */

  const userDataSetter = async () => {
    await fetchUserData().then((res) => {
      console.log("Fetched user data");
      console.log(res);
      setUserData(res);
    });
  };

  const patientsSetter = async () => {
    await fetchPatients().then((res) => {
      console.log("Fetched Patient data");
      // console.log(res);
      setPatients(res);
    });
  };

  return (
    <DataContext.Provider
      value={{
        userData,
        selectedPatient,
        setSelectedPatient,
        patients,
        setPatients,
      }}
    >
      {children}
    </DataContext.Provider>
  );
};
