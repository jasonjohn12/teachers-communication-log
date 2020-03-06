import React, { useState, createContext, useEffect } from "react";
import { login } from "../../api/authenication";
export const UserContext = createContext();

//const useMountEffect = func => useEffect(func, []);
// have loading spinner
// create a login page
const UserContextProvider = props => {
  const [user, setUser] = useState(null);

  useEffect(() => {
    const fetchData = async () => {
      const result = await login("myUserName", "myPassword");
      setUser(result.data);
    };
    fetchData();
  }, []);

  const logout = () => {
    setUser(null);
  };

  const register = user => {
    const realUser = { ...user };
    realUser.name = user.firstName;
    setUser(realUser);
  };
  return (
    <UserContext.Provider value={{ user, register, logout }}>
      {props.children}
    </UserContext.Provider>
  );
};
export default React.memo(UserContextProvider);
