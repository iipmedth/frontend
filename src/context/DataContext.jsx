import React, { createContext, useEffect, useState } from "react";
import {
  fetchUserData,
  fetchPatients,
  fetchDataCount,
  fetchPatientHandPercentiles,
} from "../API/apiMethods";

export const DataContext = createContext();

export const DataProvider = ({ children }) => {
  const [userData, setUserData] = useState(null);
  const [patients, setPatients] = useState(null);
  const [dataEntryCount, setDataEntryCount] = useState(null);
  const [selectedPatient, setSelectedPatient] = useState(null);
  const [patientHandPercentiles, setPatientHandPercentiles] = useState(null);

  useEffect(() => {
    userDataSetter();
    patientsSetter();
  }, []);

  useEffect(() => {
    if (selectedPatient) {
      dataEntrySetter();
      patientHandPercentilesSetter();
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

  const patientHandPercentilesSetter = async () => {
    await fetchPatientHandPercentiles(selectedPatient.user_id, "left").then(
      (res) => {
        setPatientHandPercentiles(res);
      }
    );
  };

  const dataEntrySetter = async () => {
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
        patientHandPercentiles,
      }}
    >
      {children}
    </DataContext.Provider>
  );
};
