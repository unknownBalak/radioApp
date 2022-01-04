import React, { useRef, useContext, useState } from "react";
import "./search.css";
// import { updatePostion } from "../helper/helper.js";
import { FilteredContext } from "../store/FilterContext.js";
function Search() {
  const { setSelectValue, setInputValue, inputValue, selectValue } =
    useContext(FilteredContext);
  const floatDiv = useRef();
  const searBarRef = useRef();
  const updatePostion = (floatDiv, e) => {
    if (floatDiv.current) {
      let element = floatDiv.current;
      let top =
        window.scrollY + window.innerHeight / 2 - element.offsetHeight / 2;
      element.style.top = `${top}px`;
    }
  };

  console.log("floatDiv in search.jsx", floatDiv);

  const searchBar = searBarRef.current;
  if (searchBar) {
    window.addEventListener("scroll", function (event) {
      updatePostion(floatDiv, event);
    });
  }

  return (
    <div className="searchBar" ref={searBarRef}>
      <div className="childContainer" ref={floatDiv}>
        <h1>Filter BY: </h1>
        <div className="tagName">
          <label htmlFor="drowpdown"> Select from DropDown: </label>
          <select
            id="dropdown"
            onChange={(e) => setSelectValue(e.target.value)}
            value={selectValue}
            required
          >
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
