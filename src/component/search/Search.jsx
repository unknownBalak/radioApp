import React, { useRef , useContext } from "react";
import "./search.css";
import {updatePostion} from "../helper/helper.js";
import {FilteredContext} from "../store/FilterContext.js"; 
function Search() {
  
  const { setSelectValue, setInputValue ,inputValue, selectValue} = useContext(FilteredContext);
  const floatDiv = useRef();

  window.addEventListener("scroll", (updatePostion(floatDiv)));
  return (
    <div className="searchBar">
      <div className="childContainer" ref={floatDiv}>
        <h1>Filter BY: </h1>
        <div className="tagName">
          <label htmlFor="drowpdown"> Select from DropDown: </label>
          <select id="dropdown" onChange={(e) => setSelectValue(e.target.value)} value={selectValue} required>
            <option value="noFilter"> No Filter </option>
            <option value="country">Country </option>
            <option value="state"> State </option>
            <option value="tag">Tag name </option>
            <option value="station">Station Name </option>
          </select>
          <input
            type="text"
            className={selectValue !== "noFilter" ? "active" : ""}
            placeholder="Enter value name"
            value={inputValue}
            onChange={(e) => setInputValue(e.target.value)}
          />
        </div>
      </div>
    </div>
  );
}
export default Search;
