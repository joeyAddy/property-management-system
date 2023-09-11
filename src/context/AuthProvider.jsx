/* eslint-disable react/prop-types */
import { createContext, useState } from "react";
import { getCookie } from "../utils/cookie";

const AuthContext = createContext({});

export const AuthProvider = ({ children }) => {
  const [user, setUser] = useState({});
  const foundUser = getCookie("user");

  const parseJSON = (data) => {
    let parsedJSON;
    try {
      if (data !== undefined) {
        parsedJSON = JSON.parse(data);
        console.log(parsedJSON, "Logged in user data");
      }
    } catch (error) {
      console.log(error);
    }
    return parsedJSON;
  };
  const cookieUser = parseJSON(foundUser);
  console.log(cookieUser, "Cookie for user");

  return (
    <AuthContext.Provider value={{ user, setUser, cookieUser }}>
      {children}
    </AuthContext.Provider>
  );
};

export default AuthContext;
