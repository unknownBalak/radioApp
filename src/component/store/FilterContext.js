import { createContext, useContext, useState } from "react";
import { StationContext } from "./StationProvider";
import { filterData } from "../helper/filter.js";
export const FilteredContext = createContext();

//This component will provide filterd Data to It's child....

const FilteredContextProvider = (props) => {
  const originalData = useContext(StationContext);
  const [selectValue, setSelectValue] = useState("noFilter");
  const [inputValue, setInputValue] = useState("");

  let newArr = [];
  newArr = filterData(inputValue, selectValue, originalData);
  // console.log("This is newArr from FilterContext", newArr);
  return (
    <FilteredContext.Provider
      value={{
        newArr,
        setSelectValue,
        setInputValue,
        selectValue,
        inputValue,
      }}
    >
      {props.children}
    </FilteredContext.Provider>
  );
};
export default FilteredContextProvider;
