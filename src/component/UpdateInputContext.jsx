import React, { createContext } from "react";

export const InputContext = createContext();
let obj = {};

export const InputProvider = ({ children }) => {
  let input = "",
    value = "";
  console.log(children);
  return <InputContext.Provider value={(input, value)}>{children}</InputContext.Provider>;
};
