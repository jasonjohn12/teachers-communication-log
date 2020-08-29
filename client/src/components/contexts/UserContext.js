import React, { useState, createContext } from "react";
import { login, logout, register } from "../../api/authenication";
export const UserContext = createContext();

// have loading spinner
// create a login page
const UserContextProvider = (props) => {
  const [user, setUser] = useState(null);

  const loginContext = async (userName, password) => {
    const result = await login(userName, password);
    setUser(result.data.user);
  };

  const logout = () => {
    setUser(null);
  };

  const register = (user) => {
    const realUser = { ...user };
    realUser.name = user.firstName;
    setUser(realUser);
  };
  return (
    <UserContext.Provider value={{ user, register, logout, loginContext }}>
      {props.children}
    </UserContext.Provider>
  );
};
export default React.memo(UserContextProvider);
