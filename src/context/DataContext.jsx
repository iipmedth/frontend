import React, { createContext, useEffect, useState } from "react";
import {
  fetchUserData,
  fetchPatients,
  fetchDataCount,
} from "../API/apiMethods";

export const DataContext = createContext();

export const DataProvider = ({ children }) => {
  const [userData, setUserData] = useState(null);
  const [patients, setPatients] = useState(null);
  const [dataEntryCount, setDataEntryCount] = useState(null);
  const [selectedPatient, setSelectedPatient] = useState(null);

  useEffect(() => {
    userDataSetter();
    patientsSetter();
  }, []);

  useEffect(() => {
    if (selectedPatient) {
      dataEntrySetter();
    }
  }, [selectedPatient]);

  /**
   * @TODO Delete logs after testing
   */

  const userDataSetter = async () => {
    await fetchUserData().then((res) => {
      setUserData(res);
    });
  };

  const patientsSetter = async () => {
    await fetchPatients().then((res) => {
      setPatients(res);
    });
  };

  const dataEntrySetter = async () => {
    console.log("test : " + selectedPatient.user_id);
    await fetchDataCount(selectedPatient.user_id, "left").then((res) => {
      setDataEntryCount(res);
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
        dataEntryCount,
      }}
    >
      {children}
    </DataContext.Provider>
  );
};
