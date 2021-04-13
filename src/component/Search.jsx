import React from "react";
import "./cssFile/search.css";
function Search() {
  function updateDataByCountry() {
    console.log("I have been clicked!!");
  }
  return (
    <div className="searchBar">
      <h1>Filter BY: </h1>
      <div className="tagName">
        <span className="all">All</span>
        <span className="country" onClick={updateDataByCountry}>
          Country
        </span>
        <span className="country">language</span>
      </div>
    </div>
  );
}

export default Search;
