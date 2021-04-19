import React from "react";
import Nav from "./Nav";
import Search from "./Search";
import Body from "./Body";

import "./cssFile/home.css";
function Home() {
  return (
    <div className="app ">
      <Nav />
      <div className="fullGrowContainer mainContainer" style={{ position: "relative" }}>
        <Search />
        <Body />
      </div>
    </div>
  );
}

export default Home;
