import React, { useState, createContext } from "react";

export const AuthContext = createContext();

const AuthContextProvider = props => {
  const [authentication, setAuthenticationStatus] = useState({ status: false });

  const toggleAuthentication = status => {
    status === true
      ? setAuthenticationStatus({ status: false })
      : setAuthenticationStatus({ status: true });

  };
  return (
    <AuthContext.Provider value={{ authentication, toggleAuthentication }}>
      {props.children}
    </AuthContext.Provider>
  );
};
export default AuthContextProvider;
