import React, { createContext } from "react";
import { login, register, logout } from "../API/apiMethods";

export const AuthContext = createContext();

export const AuthProvider = ({ children }) => {
  return (
    <AuthContext.Provider
      value={{
        login,
        register,
        logout,
      }}
    >
      {children}
    </AuthContext.Provider>
  );
};
