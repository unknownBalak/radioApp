import React, { useState } from "react";
import "./cssFile/search.css";

function Search() {
  const [value, setValue] = useState("noFilter");
  const [input, setInput] = useState("");

  return (
    <div className="searchBar">
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
  );
}
export default Search;
