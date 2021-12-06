import React, { createContext } from "react";
import { login, register } from "../API/apiMethods";

export const AuthContext = createContext();

export const AuthProvider = ({ children }) => {
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
