import React, { createContext, useState, useEffect } from "react";
import { login, register } from "../API/apiMethods";

export const AuthContext = createContext();

export const AuthProvider = ({ children }) => {
  // const [authenticated, setAuthenticated] = useState(false);

  // useEffect(() => {
  //   checkAuth();
  // }, []);

  // const checkAuth = () => {
  //   const check = localStorage.getItem("auth");
  //   setAuthenticated(check);
  // };

  return (
    <AuthContext.Provider
      value={{
        login,
        register,
      }}
    >
      {children}
    </AuthContext.Provider>
  );
};
