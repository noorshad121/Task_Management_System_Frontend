import React, { createContext } from "react";

export const UseContext = createContext();

const Context = (props) => {
  const api ="http://localhost:8000/api/user"
  return (
    <UseContext.Provider value={{api}}>
      {props.children}
    </UseContext.Provider>
  );
};

export default Context;
