import React, { createContext, useEffect, useState } from "react";
import {
  fetchUserData,
  fetchPatients,
  fetchDataCount,
  fetchPatientHandPercentiles,
  fetchMeasurements,
} from "../API/apiMethods";

export const DataContext = createContext();

export const DataProvider = ({ children }) => {
  const [userData, setUserData] = useState(null);
  const [patients, setPatients] = useState(null);
  const [dataEntryCount, setDataEntryCount] = useState(null);
  const [selectedPatient, setSelectedPatient] = useState(null);
  const [patientHandPercentiles, setPatientHandPercentiles] = useState(null);
  const [selectedHand, setSelectedHand] = useState("left");
  const [selectedFilter, setSelectedFilter] = useState("All fingers");
  const [loading, setLoading] = useState(false);
  const [modalVisible, setModalVisible] = useState(false);
  const [patientMeasurements, setPatientMeasurements] = useState(null);
  const [isTherapist, setIsTherapist] = useState(null);
  const [isFetching, setIsFecthing] = useState(null);
  const [isLoggedIn, setIsLoggedIn] = useState(null);
  const [extremeValueToggle, setExtremeValueToggle] = useState(false);

  useEffect(() => {
    userDataSetter();
    patientsSetter();
  }, [isLoggedIn]);

  useEffect(() => {
    if (selectedPatient) {
      localStorage.setItem("selectedPatientID", selectedPatient.id);
      dataEntrySetter();
      patientHandPercentilesSetter();
      patientMeasurmentSetter();
    } else {
      for (let i in patients) {
        let patientID = parseInt(localStorage.getItem("selectedPatientID"));
        if (patients[i].patient_id === patientID) {
          setSelectedPatient(patients[i].patient);
        }
      }
    }
  }, [selectedPatient, selectedHand, patients]);

  /**
   * @TODO Delete logs after testing
   */

  const userDataSetter = async () => {
    await fetchUserData().then((res) => {
      setIsFecthing(true);
      if (res.role === "therapist") {
        setIsTherapist(true);
        localStorage.setItem("isTherapist", true);
      } else {
        setIsTherapist(false);
        localStorage.setItem("isTherapist", false);
        res.user_id = res.id;
        setSelectedPatient(res);
      }
      setUserData(res);
      setIsFecthing(false);
    });
  };

  const patientsSetter = async () => {
    await fetchPatients().then((res) => {
      if (isTherapist || JSON.parse(localStorage.getItem("isTherapist"))) {
        setPatients(res);
      }
    });
  };

  const patientHandPercentilesSetter = async () => {
    setLoading(true);
    await fetchPatientHandPercentiles(
      selectedPatient.user_id,
      selectedHand
    ).then((res) => {
      setPatientHandPercentiles(res);
    });
    setLoading(false);
  };

  const dataEntrySetter = async () => {
    await fetchDataCount(selectedPatient.user_id, selectedHand).then((res) => {
      setDataEntryCount(res);
    });
  };

  const patientMeasurmentSetter = async () => {
    await fetchMeasurements(selectedPatient.user_id, selectedHand).then(
      (res) => {
        setPatientMeasurements(res);
      }
    );
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
        selectedHand,
        setSelectedHand,
        loading,
        selectedFilter,
        setSelectedFilter,
        modalVisible,
        setModalVisible,
        patientMeasurements,
        isTherapist,
        setIsTherapist,
        isFetching,
        isLoggedIn,
        setIsLoggedIn,
        extremeValueToggle,
        setExtremeValueToggle,
      }}
    >
      {children}
    </DataContext.Provider>
  );
};
