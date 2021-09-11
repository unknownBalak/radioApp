import React from "react";
import Nav from "../nav/Nav";
import Body from "../body/Body";
import "../search/search.css";
import "./home.css";
import Search from "../search/Search";

function Home() {
   return (
    <div className="home ">
      <Nav />
      <div className="fullGrowContainer mainContainer">
        <Search />
        <Body />
      </div>
    </div>
  );
}

export default Home;
