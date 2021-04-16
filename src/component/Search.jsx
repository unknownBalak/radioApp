import React, { useRef, useState } from "react";
import "./cssFile/search.css";

function Search() {
  const [value, setValue] = useState("noFilter");
  const [input, setInput] = useState("");
  const floatDiv = useRef();

  console.log(input, value);

  function debounce(func, wait = 10, immediate = true) {
    var timeout;
    return function () {
      var context = this,
        args = arguments;
      var later = function () {
        timeout = null;
        if (!immediate) func.apply(context, args);
      };
      var callNow = immediate && !timeout;
      clearTimeout(timeout);
      timeout = setTimeout(later, wait);
      if (callNow) func.apply(context, args);
    };
  }

  const updatePostion = () => {
    if (floatDiv.current) {
      let element = floatDiv.current;
      let top = window.scrollY + window.innerHeight / 2 - element.offsetHeight / 2;
      element.style.top = `${top}px`;
    }
  };
  window.addEventListener("scroll", debounce(updatePostion));
  return (
    <div className="searchBar">
      <div className="childContainer" ref={floatDiv}>
        <h1>Filter BY: </h1>
        <div className="tagName">
          <label htmlFor="drowpdown"> Select from DrowpDown: </label>
          <select id="dropdown" onChange={(e) => setValue(e.target.value)} required>
            <option value="noFilter"> No Filter </option>
            <option value="country">Country </option>
            <option value="state"> State </option>
            <option value="tag">Tag name </option>
            <option value="station">Station Name </option>
          </select>
          <input
            type="text"
            className={value !== "noFilter" ? "active" : ""}
            placeholder="Enter value name"
            onChange={(e) => setInput(e.target.value)}
          />
        </div>
        <h3 style={{ color: "black" }}>
          <span className="warning"> Note: </span> Working on filtering{" "}
        </h3>
      </div>
    </div>
  );
}
export default Search;
