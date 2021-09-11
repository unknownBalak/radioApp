import React, { createContext, useState, useEffect } from "react";
import main from "../helper/fetch.js";

export const StationContext = createContext();
export const StationProvider = (props) => {
  const [data, setData] = useState([]);
  useEffect(() => {
    main.then((res) => {
      setData([...res]);
    });
  }, []);

  return <StationContext.Provider value={data}>{props.children}</StationContext.Provider>;
};
