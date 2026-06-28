import { createContext, useEffect, useState } from "react";

export const UseContext = createContext();

const Context = (props) => {
  const api = "http://localhost:8000/api";

  // 🔥 load token from localStorage on refresh
  const [token, setToken] = useState(() => {
    return localStorage.getItem("token") || "";
  });

  const [registerUser, setRegisterUser] = useState({
    name: "",
    email: "",
    password: ""
  });

  const [loginUser, setLoginUser] = useState({
    email: "",
    password: ""
  });

  // 🔥 sync token to localStorage automatically
  useEffect(() => {
    if (token) {
      localStorage.setItem("token", token);
    } else {
      localStorage.removeItem("token");
    }
  }, [token]);

  return (
    <UseContext.Provider
      value={{
        api,
        token,
        setToken,
        registerUser,
        setRegisterUser,
        loginUser,
        setLoginUser
      }}
    >
      {props.children}
    </UseContext.Provider>
  );
};

export default Context;