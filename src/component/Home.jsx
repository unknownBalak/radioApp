import React, { useRef, useState, useContext } from "react";
import Nav from "./Nav";
// import Search from "./Search";
import Body from "./Body";
import "./cssFile/search.css";
import "./cssFile/home.css";
import { StationContext } from "./StationProvider";

function Home() {
  const data = useContext(StationContext);

  const [selectValue, setSelectValue] = useState("noFilter");
  const [inputValue, setInputValue] = useState("");
  const floatDiv = useRef();
  let newArr = [];

  if (selectValue === "noFilter") {
    newArr.push(...data);
  }
  if (selectValue === "country") {
    let country = inputValue.toLowerCase();
    newArr = data.filter((item, index) => item.country.toLowerCase().includes(country));
  }

  console.log("new Arr is ", newArr);
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
    <div className="home ">
      <Nav />
      <div className="fullGrowContainer mainContainer">
        <div className="searchBar">
          <div className="childContainer" ref={floatDiv}>
            <h1>Filter BY: </h1>
            <div className="tagName">
              <label htmlFor="drowpdown"> Select from DrowpDown: </label>
              <select id="dropdown" onChange={(e) => setSelectValue(e.target.value)} required>
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
                onChange={(e) => setInputValue(e.target.value)}
              />
            </div>
            <h3 style={{ color: "black" }}>
              <span className="warning"> Note: </span> Working on filtering{" "}
            </h3>
          </div>
        </div>
        <Body data={newArr} />
      </div>
    </div>
  );
}

export default Home;
