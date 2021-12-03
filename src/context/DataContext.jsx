import React, { createContext, useEffect, useState } from "react";
import { fetchUserData } from "../API/apiMethods";

export const DataContext = createContext();

export const DataProvider = ({ children }) => {
  const [userData, setUserData] = useState(null);

  useEffect(() => {
    userDataSetter();
  }, []);

  const userDataSetter = async () => {
    await fetchUserData().then((res) => {
      console.log("Fetched user data");
      console.log(res);
      setUserData(res);
    });
  };

  return (
    <DataContext.Provider
      value={{
        userData,
      }}
    >
      {children}
    </DataContext.Provider>
  );
};
