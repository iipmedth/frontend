import React, { useContext, useEffect, useState } from "react";
import Navbar from "../../Components/Navbar/Navbar";
import Searchbar from "../../Components/Searchbar/Searchbar";
import PatientsContainer from "../../Components/PatientsContainer/PatientsContainer";
import { DataContext } from "../../context/DataContext";

const PatientsOverview = () => {
  const { patients } = useContext(DataContext);
  const [fetchedPatients, setFetchedPatients] = useState([]);
  const [search, setSearch] = useState("");

  useEffect(() => {
    if (patients !== null) {
      setFetchedPatients(patients);
    }
  }, [patients]);

  const filteredPatients =
    search.length === 0
      ? fetchedPatients
      : fetchedPatients.filter((pat) =>
          pat.patient.name.toLowerCase().includes(search.toLocaleLowerCase())
        );

  const changeHandler = (inputText) => {
    setSearch(inputText);
  };

  return (
    <div className="row patientsOverview">
      <div className="col-lg-2">
        <Navbar content="overview" />
      </div>
      <div className="col-lg  patientsOverview__content">
        <h1 className="row patientsOverview__content__header">Patients</h1>
        <div className="row patientsOverview__content__searchbar">
          <Searchbar changeHandler={changeHandler} />
        </div>
        <div className="row patientsOverview__content__patients">
          <PatientsContainer
            patients={filteredPatients}
            searchCriteria={search}
          />
        </div>
      </div>
    </div>
  );
};

export default PatientsOverview;
